import './App.css';
import Pokemon from './components/pokemon';
import Loading from './components/loading';
import { Suspense } from 'react';
function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <Pokemon />
      </Suspense>
    </div>
  );
}

export default App;
