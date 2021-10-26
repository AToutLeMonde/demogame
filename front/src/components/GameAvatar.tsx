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
cursor: pointer;

&:hover {
  background: #FED500;
  transform: rotate(-2deg);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 20px 0px;
}
user-select: none;
`

const Img = styled.img`
width: 128px;
height: 128px;
top: 12px;
left: 12px;
position: absolute;
user-select: none;
`

const Caption = styled.div`
width: 200px;
position: absolute;
padding: 4px;
user-select: none;
text-align: center;
line-height: 1.2;
font-weight: 700;
text-shadow: 2px 2px 2px #fff;
`

const rootUrl = '/demogame/img/game-assets/faces';

export const GameAvatar = (props) => {

  if (!props.x || !props.y) {
    console.error('err', props)
  }

  //const avatar = props.avatar;
  const isVisible = props.isVisible ? true : false;

  let avatarImg = props.string ? parseAvatar(props.string) : generateAvatar();

  const handleClick = () => {
    if (props.onClick) {
      props.onClick(props.index);
    }
  }

  const style: any = {
    display: isVisible ? 'block' : 'none'
  }

  if (props.x && props.y) {
    style.x = props.x;
    style.y = props.y;
  }


  return (
    <>

      <Container
        style={{
          left: props.x || 'unset', top: props.y || 'unset',
          display: isVisible ? 'block' : 'none'
        }}
        onMouseDown={handleClick}>

        <Img alt="" src={`${rootUrl}/face.png`} />
        <Img alt="" src={`${rootUrl}/${avatarImg.eyebrows}`} />
        <Img alt="" src={`${rootUrl}/${avatarImg.eyes}`} />
        <Img alt="" src={`${rootUrl}/${avatarImg.nose}`} />
        <Img alt="" src={`${rootUrl}/${avatarImg.mouth}`} />
      </Container>
      <Caption
        style={{
          left: props.x - 20, top: props.y + 145,
          display: isVisible ? 'block' : 'none'
        }}>
        {props.profession}
      </Caption>
    </>
  )
}