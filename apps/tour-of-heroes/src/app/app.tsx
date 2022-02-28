import { Route, Routes } from 'react-router-dom';
import { Monsters } from './pages/Monsters';
import { Monster } from './pages/Monster';

import { SomethingWentWrong } from './pages/SomethingWentWrong';

export function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Monsters />} />
      <Route path={'/monster/:id'} element={<Monster />} />
      <Route path={'/something-went-wrong'} element={<SomethingWentWrong />} />
    </Routes>
  );
}

export default App;
