import React from 'react'
import { Close } from '@fcc/icons'
import { Button, Grid, Groups, Header, P } from '@fcc/ui'
import { showBadLead } from 'src/utils'


export const NavigationBar = (props) => {
  const items = [
    { value: 'game', label: 'Игра' },
    { value: 'players', label: 'Пользователи' },
    { value: 'score', label: 'Зал славы' },        
  ]
  const [state, setState] = React.useState({ value: 'game' })
  const handleChange = (e, value) => setState({ value })

  //showBadLead(100);
  return (
    <Header
        size="s"
        items={
          <Header.Items
            align="center"
            design="primary"
            onChange={handleChange}
            value={state.value}
          >
            {items.map(({ value, label }) => (
              <Header.Item key={value} value={value} label={label} />
            ))}
          </Header.Items>
        }
      />
  )
}