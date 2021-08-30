import React from 'react'
import { Close, Console } from '@fcc/icons'
import { Button, Card, FormField, Grid, Groups, H1, H4, Input, P, Radio, Text } from '@fcc/ui'
import styled from 'styled-components'
import { useAppActions } from 'src/store'
import { createPlayerApi } from 'src/api'

const Container = styled.div`
margin-top:32px;
`

export const CreatePlayerPage = (props) => {

  const {
    setCurrentPage,
    startGame
  } = useAppActions(actions=>actions)

  const [values, setValues] = React.useState({
    name: '',
    group: ''
  })

  const [errors, setErrors] = React.useState({
    name: '',
    group: ''
  })

  const handleCreatePlayer = async () => {
    let nameError = handleValidate('name')
    const groupError = handleValidate('group')
    setErrors({
      name: nameError,
      group: groupError
    })

    
    
    if (!nameError && !groupError) {
      const resp = await startGame({
        playerName: values.name,
        playerGroup: parseInt(values.group)
      })

      if (resp) {
        setCurrentPage(`game-${values.group}`)
      }
    }
  }

  const handleValidate = (name:string, value?,) => {
    const toValidate = value !== undefined ? value : values[name];
    
    if (name === 'name') {
      
      if (!toValidate || toValidate.trim().length < 2) {
        const error = 'Имя должно быть не меньше двух символов';
        const newValues = {
          ...errors,
          [name]: error
        }
        setErrors(newValues)
        
        return error;
      }else {
        setErrors({
          ...errors,
          [name]: ''
        })
      }
    }else if (name === 'group') {
      if (!toValidate) {
        const error = 'Выбирите свою роль в игре';
        const newValues = {
          ...errors,
          [name]: error
        }
        setErrors(newValues)
        return error
      }else {
        setErrors({
          ...errors,
          [name]: ''
        })
      }
    }
    return '';

  }

  const handleChangeValue = (name, value) => {
    const newValues = {
      ...values,
      [name]: value
    }

    setValues(newValues)
  }

  

  return (
    <Container>
      <Grid.Row>
        <Grid.Col size={2}></Grid.Col>
        <Grid.Col size={8}>
          <Card
            header={
              <Groups design="vertical" size="s">
                <Card.Title>Новая игра</Card.Title>
                <Card.Subtitle style={{ fontSize: '140%' }}>
                  Придумайте себе ник и выбирите за кого будете играть
                </Card.Subtitle>
              </Groups>
            }
            footer={
              <Groups justifyContent="flex-end">
                <Button onClick={handleCreatePlayer} design="accent" size="xl">Начать игру
                  <Console />
                </Button>
              </Groups>
            }
          >

            <Grid.Row>
              <Grid.Col size={8}>

                <FormField size="m" style={{marginBottom: 16}}>
                  <FormField.Label required>Имя игрока</FormField.Label>
                  <FormField.Content>
                    <Input
                    value={values.name}
                    onBlur={() => handleValidate('name')}
                    onChange={(e:any) => {
                      handleValidate('name', e.target.value)
                      handleChangeValue('name', e.target.value)
                    }}
                    />                    
                    {errors.name && (
                      <FormField.Message color="critical">{errors.name}</FormField.Message>
                    )}
                    
                  </FormField.Content>
                </FormField>

                <FormField size="m">
                  <FormField.Label required>Роль в игре</FormField.Label>
                  <FormField.Content>
                    <Groups>
                      <Radio
                        checked={values.group === '1'}
                        name="group"
                        value="1"
                        onChange={(e, { value }) => {
                          handleValidate('group', value);
                          handleChangeValue('group', value)
                        }}
                      >
                        Лидогенератор
                      </Radio>

                      <Radio
                        checked={values.group === '2'}
                        name="group"
                        value="2"
                        onChange={(e, { value }) => {
                          handleValidate('group', value);
                          handleChangeValue('group', value)
                        }}
                      >
                        Специалист по выдаче
                      </Radio>
                    </Groups>
                    {errors.group && (
                      <FormField.Message color="critical">{errors.group}</FormField.Message>
                    )}
                  </FormField.Content>
                </FormField>

              </Grid.Col>
            </Grid.Row>


          </Card>
        </Grid.Col>
        <Grid.Col size={2}></Grid.Col>
      </Grid.Row>


    </Container>
  )
}