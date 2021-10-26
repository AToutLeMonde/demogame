import { Close } from '@fcc/icons';
import { Button, Grid, Groups, P } from '@fcc/ui';
import React, { useEffect } from 'react';
import { Bag, GameAvatar, GameAvatar2 } from 'src/components';
import { useAppActions, useAppStore } from 'src/store';
import { generateAvatar, rectanglesIntersect } from 'src/utils';
import styled from 'styled-components';
import useSound from 'use-sound';

import { useGame2 } from './useGame2';

//import themeMusic from './../../assets/sounds/theme.mp3'

const Container = styled.div`
margin: 0 auto;
width: 1280px;
height: calc(720px - 49px);

background-position: 0 -15px;
position: relative;
z-index: 1;

&::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
  z-index: -1;
  background: #E6F6F8;
}
`

export const Game2 = (props) => {

  const {
    player,
    leadPositions,
    nonConfirmedLeadIds,
    nonConfirmedLeadById
  } = useAppStore(state => state)

  const {
    setCurrentPage,
    startGame
  } = useAppActions(actions => actions)

  const {
    bagX,

    onMouseMove

  } = useGame2();


  // setInterval(() => {

  // })


  // const isIntersect = rectanglesIntersect(20, 470, 20+96, 470+96,
  //   bagX, 560, bagX+96, 570+96)

  //console.log('nonConfirmedLeadById', nonConfirmedLeadById)

  //const avatar = generateAvatar()

  return (
    <div style={{ width: '100%', height: '100%' }} onMouseMove={onMouseMove}>
      <Container >

        <Bag x={bagX} />

        {leadPositions.map(pos => {


          const lead = nonConfirmedLeadById[pos.leadId];
          //console.log('pos', pos, 'lead', lead)
          if (!pos || !lead) return null;



          return (
            <GameAvatar2
              key={lead.leadId}
              id={lead.leadId}
              string={lead.avatar}
              profession={lead.profession}
              salary={lead.salary}
              amount={lead.amount}
              x={pos.x}
              y={pos.y}
            />
          )
        })}




      </Container>
    </div>
  )
}