import * as _ from 'lodash/fp';
import React from 'react';
import { getNotConfirmedLeadsApi } from 'src/api';
import { useAppActions, useAppStore } from 'src/store';
import { getRandom, rectanglesIntersect, showBadLead, showGoodLead } from 'src/utils';
import useSound from 'use-sound';

import { runDebounced } from './../../utils/debounced';

const xPositions = [
  20, 130, 240, 350, 460, 570, 680, 790, 900, 1010, 1120
]

const generateLeadPosition = (leadId, profit) => {
  const xPosIndex = getRandom(0, xPositions.length - 1);
  return {
    leadId,
    y: -100,
    x: xPositions[xPosIndex],
    speed: getRandom(10, 35),
    profit
  }
}

const isPosIntersect = (i, bagX) => {
  return rectanglesIntersect(i.x, i.y, i.x + 96, i.y + 96,
    bagX, 560, bagX + 96, 570 + 96);
}

export const useGame2 = () => {
  const {
    bagX,
    player,
    leadPositions,
    nonConfirmedLeadIds,
    nonConfirmedLeadById,
    catchedIds
  } = useAppStore(state => state)

  const {
    getState,
    setCurrentPage,
    startGame,
    updateLeadPosition,
    loadNonConfirmedLeads,
    setBagX,
    catchLeadId
  } = useAppActions(actions => actions)

  const leadsTimer = React.useRef(null);
  const fallingTimer = React.useRef(null);
  const [playingMusic, setPlayingMusic] = React.useState(false);
  const [catchIsPlaying, setCatchIsPlaying] = React.useState(false);


  const [playCatch] = useSound(
    '/sounds/catch.mp3',
    {
      volume: 0.5,
      interrupt: true,
      onend: () => {
        setCatchIsPlaying(false)
      }
    }
  );

  const [playTheme, { stop }] = useSound(
    '/sounds/theme.mp3',
    {
      volume: 0.01,
      onend: () => {
        //console.log('xxxx-stop')
        setPlayingMusic(false)
      }
    }
  );

  //const [bagX, setBagX] = React.useState(0);




  const fallLeads = () => {
    const { bagX, nonConfirmedLeadIds, nonConfirmedLeadById, leadPositions } = getState();

    leadPositions.forEach(i => {
      const isIntersect = isPosIntersect(i, bagX)

      if (isIntersect) {
        if (i.profit >= 0) {
          showGoodLead(i.profit)
        } else if (i.profit < 0) {
          showBadLead(i.profit)
        }

        catchLeadId(i.leadId);
        setCatchIsPlaying(false);
      }
    })

    //console.log('nonConfirmedLeadIds', nonConfirmedLeadIds)
    nonConfirmedLeadIds.forEach(id => {
      updateLeadPosition(generateLeadPosition(id, nonConfirmedLeadById[id].profit))
    })

  }

  React.useEffect(() => {

    fallingTimer.current = setInterval(() => {
      //console.log('tik')
      fallLeads();
    }, 250)

    return () => {
      clearInterval(fallingTimer.current);
    }
  }, [])

  React.useEffect(() => {

    leadsTimer.current = setInterval(async () => {
      await loadNonConfirmedLeads();
    }, 1000)

    return () => {
      //stop();
      clearInterval(leadsTimer.current);
    }

  }, [])


  //console.log('playingMusic',playingMusic)

  const onMouseMove = (e) => {
    const { leadPositions, nonConfirmedLeadById } = getState();

    if (!playingMusic) {
      console.log('playingMusic', playingMusic)
      setPlayingMusic(true);
      playTheme()
    }

    leadPositions.forEach(i => {
      const isIntersect = isPosIntersect(i, bagX)
      console.log('isIntersect', isIntersect, i)
      if (isIntersect) {
        const lead = nonConfirmedLeadById[i.leadId];

        if (i.profit >= 0) {
          showGoodLead(i.profit)
        } else if (i.profit < 0) {
          showBadLead(i.profit)
        }
        catchLeadId(i.leadId);

        if (catchedIds.indexOf(i.leadId) === -1) {
          setCatchIsPlaying(true)
          playCatch();
        }
      }
    })


    if (e.pageX <= 1190) {
      setBagX(e.pageX)
    }
  }


  return {



    onMouseMove,
    bagX,

  }
}