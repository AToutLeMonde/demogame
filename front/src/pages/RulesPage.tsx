import { Close, Console, Forward } from '@fcc/icons';
import { Button, Card, Grid, Groups, H1, H4, P, Text } from '@fcc/ui';
import React from 'react';
import { GameAvatar } from 'src/components/GameAvatar';
import { useAppActions } from 'src/store';
import styled from 'styled-components';

const Container = styled.div`
margin-top:32px;
`

export const RulesPage = (props) => {

  const {
    setCurrentPage
  } = useAppActions(actions => actions)

  const handleStartGame = () => {
    setCurrentPage("create-player")
  }

  return (
    <Container>
      <Grid.Row>
        <Grid.Col size={2}></Grid.Col>
        <Grid.Col size={8}>
          <Card
            header={
              <Groups design="vertical" size="s">
                <Card.Title>Добро пожаловать в Open API Demo Game!</Card.Title>
                <Card.Subtitle style={{ fontSize: '140%' }}>Правила игры</Card.Subtitle>
              </Groups>
            }
            footer={
              <Groups justifyContent="flex-end">
                <Button onClick={handleStartGame} design="accent" size="xl">Продолжить
                  <Forward />
                </Button>
              </Groups>
            }
          >

            <Grid.Row>
              <Grid.Col size={3}>
                <GameAvatar x={undefined} y={undefined} isVisible={true} />
              </Grid.Col>

              <Grid.Col size={9}>

                <P style={{ fontSize: '120%', lineHeight: 1.5, marginBottom: 16 }}>
                  Все игроки делятся на две группы: <b>лидогенераторы</b> и <b>специалисты по выдаче</b>.
                </P>
                <P style={{ fontSize: '120%', lineHeight: 1.5, marginBottom: 16 }}>
                  <b>Задача лидогенераторов</b> - привлечь в Банк как можно больше лидов на потребительский кредит.
                  {/* За каждую выдачу кредита лидегенератору начисляется <b>5000</b> очков. */}
                </P>
                <P style={{ fontSize: '120%', lineHeight: 1.5, marginBottom: 16 }}>
                  <b>Задача специалиста по выдаче</b> - выдать как можно больше кредитов благонадежным заемщикам,
                  при этом отказать неблагонадежным.
                  {/* За выдачу кредита <i>благонадежному</i> заемщику игроку <b>начисляется %1</b> от суммы кредита.
              За выдау кредита <i>неблагонадежному</i> заемщику игрок <b>штрафуется на 1%</b> от стоимости кредита. */}
                </P>
              </Grid.Col>
            </Grid.Row>


          </Card>
        </Grid.Col>
        <Grid.Col size={2}></Grid.Col>
      </Grid.Row>


    </Container>
  )
}