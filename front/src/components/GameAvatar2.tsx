import { Close } from '@fcc/icons';
import { Button, Grid, Groups, P } from '@fcc/ui';
import { convertNumberToString, formatNumberString } from '@fcc/utils';
import React from 'react';
import { generateAvatar, parseAvatar } from 'src/utils';
import styled from 'styled-components';

const Container = styled.div`
width: 152px;
height: 152px;
position: absolute;

border-radius: 50%;


user-select: none;
`

const Img = styled.img`
width: 96px;
height: 96px;
top: 12px;
left: 12px;
position: absolute;
user-select: none;

`

const Caption = styled.div`
width: 160px;
position: absolute;
padding: 4px;
user-select: none;

font-size:12px;
text-align: center;
line-height: 1.15;
font-weight: 700;
text-shadow: 2px 2px 2px #fff;

`

const rootUrl = '/demogame/img/game-assets/faces';

export const GameAvatar2 = (props) => {

  //const avatar = props.avatar;


  let avatarImg = props.string ? parseAvatar(props.string) : generateAvatar();

  const handleClick = () => {
    if (props.onClick) {
      props.onClick(props.index);
    }
  }



  return (
    <>

      <Container
      style={{left: props.x, top: props.y }}
       onClick={handleClick}>

        <Img alt="" src={`${rootUrl}/face.png`} />
        <Img alt="" src={`${rootUrl}/${avatarImg.eyebrows}`} />
        <Img alt="" src={`${rootUrl}/${avatarImg.eyes}`} />
        <Img alt="" src={`${rootUrl}/${avatarImg.nose}`} />
        <Img alt="" src={`${rootUrl}/${avatarImg.mouth}`} />
      </Container>
      <Caption
        style={{left: props.x-0, top: props.y+105
          }}>
            {props.profession}<br/>
           кредит: {convertNumberToString(props.amount)}₽<br/>
           Зп: {convertNumberToString(props.salary)}₽
        </Caption>
    </>
  )
}
