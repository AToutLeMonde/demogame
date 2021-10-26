import * as _ from 'lodash/fp';
import React from 'react';
import { createLeadApi } from 'src/api';
import { useAppActions, useAppStore } from 'src/store';
import { getRandom } from 'src/utils';
import useSound from 'use-sound';

import { generateAvatar } from './../../utils/avatars';





export const useGame1 = () => {
  const {
    player,
    avatars
  } = useAppStore(state => state)

  const {
    setCurrentPage,
    startGame,
    loadPlayers,
    regenerateAvatats,
    hideAvatar
  } = useAppActions(actions => actions)

  const [playingMusic, setPlayingMusic] = React.useState(false);


  const [playTheme, { stop }] = useSound(
    '/sounds/theme.mp3',
    {
      volume: 0.01,
      onend: () => {
        setPlayingMusic(false)
      }
    }
  );




  React.useEffect(() => {


    return () => {
      //stop();
    }

  }, [])


  //const [avatars, setAvatars] = React.useState(buildAvatars())
  const timer = React.useRef(null);



  React.useEffect(() => {
    const t = setTimeout(() => {

      timer.current = setInterval(() => {
        regenerateAvatats();

      }, 1500)
    }, 1000)

    return () => {
      if (t) clearTimeout(t);
      if (timer.current) {
        clearInterval(timer.current)
      }
    }
  }, [])

  const [playCatch] = useSound(
    '/sounds/catch.mp3',
    {
      volume: 0.5,
      interrupt: true
    }
  );

  const [nextPlayerIndex, setNextPlayerIndex] = React.useState(0)

  const onClick = async (index: number) => {

    playCatch();



    hideAvatar(index);


    const avatar = avatars[index];
    let players = await loadPlayers();

    players = players.filter(i => i.playerGroup === 2)

    let toPlayerId = null;

    if (players?.length) {
      if (nextPlayerIndex >= players.length) {
        toPlayerId = players[0].playerId;
        setNextPlayerIndex(1);
      } else {
        toPlayerId = players[nextPlayerIndex].playerId;
        setNextPlayerIndex(nextPlayerIndex + 1);
      }

      await createLeadApi({
        fromPlayerId: player.playerId,
        toPlayerId,
        salary: avatar.salary,
        amount: avatar.amount,
        profit: avatar.profit,
        avatar: avatar.avatar,
        profession: avatar.profession,
        confirmed: false
      })
    }
    //console.log('players',players)

  }

  return {
    playingMusic,
    setPlayingMusic,
    playTheme,
    avatars,
    onClick
  }
}