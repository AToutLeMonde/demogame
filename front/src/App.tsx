import { Notifications } from '@fcc/ui';
import React from 'react';
import { NavigationBar } from './components';
import { CreatePlayerPage, Game1, Game2, RulesPage } from './pages';
import { useAppStore } from './store';
import { toast } from './utils';


function App() {
  const {
    currentPage
  } = useAppStore(state=>state)
  return (
    <div>
      <NavigationBar />
      {currentPage === 'rules' && <RulesPage />}
      {currentPage === 'create-player' && <CreatePlayerPage />}
      {currentPage === 'game-1' && <Game1 />}
      {currentPage === 'game-2' && <Game2 />}

      <Notifications service={toast} limit={3}  valign="top" align="right"/>
    </div>
  );
}

export default App;
