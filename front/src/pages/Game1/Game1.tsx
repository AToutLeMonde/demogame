import { Close } from '@fcc/icons';
import { Button, Grid, Groups, P } from '@fcc/ui';
import React, { useEffect } from 'react';
import { GameAvatar } from 'src/components';
import { useAppActions, useAppStore } from 'src/store';
import { generateAvatar } from 'src/utils';
import styled from 'styled-components';
import useSound from 'use-sound';

import { useGame1 } from './useGame1';

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
  opacity: .8;
  z-index: -1;
  background: url('/demogame/img/game-assets/mall_bg.png');
}
`

export const Game1 = (props) => {

  const {
    player,
    avatars
  } = useAppStore(state => state)

  const {
    setCurrentPage,
    startGame
  } = useAppActions(actions => actions)

  const {
    playingMusic,
    setPlayingMusic,
    playTheme,

    onClick
  } = useGame1();


  const handleClick = (e) => {

    if (!playingMusic) {
      setPlayingMusic(true);
      playTheme()
    }

  }


  //const avatar = generateAvatar()

  return (
    <Container onClick={handleClick}>

      {avatars.length >= 11 && (
        <>
          <GameAvatar
            onClick={onClick}
            index={0}
            profession={avatars[0].profession}
            isVisible={avatars[0].isVisible}
            x={20}
            y={140}
          />

          <GameAvatar
            onClick={onClick}
            index={1}
            profession={avatars[1].profession}
            isVisible={avatars[1].isVisible}
            x={230}
            y={160}
          />

          <GameAvatar
            onClick={onClick}
            index={2}
            profession={avatars[2].profession}
            isVisible={avatars[2].isVisible}
            x={420}
            y={140}
          />

          <GameAvatar
            onClick={onClick}
            index={3}
            profession={avatars[3].profession}
            isVisible={avatars[3].isVisible}
            x={650}
            y={160}
          />

          <GameAvatar
            onClick={onClick}
            index={4}
            profession={avatars[4].profession}
            isVisible={avatars[4].isVisible}
            x={1090}
            y={160}
          />

          <GameAvatar
            onClick={onClick}
            index={5}
            profession={avatars[5].profession}
            isVisible={avatars[5].isVisible}
            x={20}
            y={470}
          />

          <GameAvatar
            onClick={onClick}
            index={6}
            profession={avatars[6].profession}
            isVisible={avatars[6].isVisible}
            x={230}
            y={380}
          />


          <GameAvatar
            onClick={onClick}
            index={7}
            profession={avatars[7].profession}
            isVisible={avatars[7].isVisible}
            x={410}
            y={480}
          />

          <GameAvatar
            onClick={onClick}
            index={8}
            profession={avatars[8].profession}
            isVisible={avatars[8].isVisible}
            x={630}
            y={450}
          />

          <GameAvatar
            onClick={onClick}
            index={9}
            profession={avatars[9].profession}
            isVisible={avatars[9].isVisible}
            x={880}
            y={430}
          />

          <GameAvatar
            onClick={onClick}
            index={10}
            profession={avatars[10].profession}
            isVisible={avatars[10].isVisible}
            x={1090}
            y={480}
          />
        </>
      )}



    </Container>
  )
}