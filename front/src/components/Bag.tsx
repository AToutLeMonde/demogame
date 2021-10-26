import { Close } from '@fcc/icons';
import { Button, Grid, Groups, P } from '@fcc/ui';
import React from 'react';
import { generateAvatar, parseAvatar } from 'src/utils';
import styled from 'styled-components';

const Container = styled.div`
width: 152px;
height: 152px;
position: absolute;

border-radius: 50%;

transform: rotate(-5deg);
user-select: none;
top: 570px;
left: 0px;
`

const Img = styled.img`
width: 96px;
height: 96px;
position: absolute;
user-select: none;

`


const rootUrl = '/demogame/img/game-assets/';

export const Bag = (props) => {



  return (
    <>

      <Container
        style={{ left: props.x }}
      >

        <Img alt="" src={`${rootUrl}/bag.png`} />


      </Container>
    </>
  )
}