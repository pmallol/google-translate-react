import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { useStore } from './hooks/useStore'

function App() {
  const {fromLang, changeFromLang} = useStore()

  return (
    <>
      <h1>Google Translate</h1>
      <button onClick={() => changeFromLang('es')}>Change language</button>
      {fromLang}
    </>
  )
}

export default App
