import { BrowserRouter, Route, Routes} from 'react-router-dom';
import   Home   from './components/Home';
import { Suspense, useEffect } from 'react';
import { Loading } from './components/Loading';
import { generateEnv } from './generateEnv';
import liff from '@line/liff';

function App() {

  const {liffId, mock} = generateEnv();
  
  const opstion = {liffId: liffId, mock: mock}

  useEffect(() => {
    liff
    .init(opstion)
    .then(async () => {
      console.log("init collect")
      if (!liff.isLoggedIn()) {
        console.log("login start")
        await liff.login();
        console.log("login collect")
      }
  })
  .catch((e) => {
    alert(`LIFF error: ${e.message}`)
  })
  }, [])

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
export default App