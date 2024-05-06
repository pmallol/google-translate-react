import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { useReducer } from 'react'
import { Action, type translateState } from './types.d'

const initialState: translateState = {
  fromLang: 'auto',
  toLang: 'en',
  fromText: '',
  toText: '',
  loading: false,
}

function reducer (state: translateState, action: Action) {
  const { type } = action

  if (type === 'INTERCHANGE_LANG') {
    return { ...state, fromLang: state.toLang, toLang: state.fromLang }
  }

  if (type === 'CHANGE_TO_LANG') {
    return { ...state, toLang: action.payload.value }
  }

  if (type === 'CHANGE_FROM_LANG') {
    return { ...state, fromLang: action.payload.value }
  }

  if (type === 'CHANGE_FROM_TEXT') {
    return { ...state, fromText: action.payload.value, loading: true}
  }

  if (type === 'CHANGE_TO_TEXT') { 
    return { ...state, toText: action.payload.value, loading: false}
  }

  return state
}



function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <h1>Google Translate</h1>
      <button onClick={() => { dispatch({type: 'CHANGE_FROM_LANG', payload: {value: 'es'}})}}>Change language</button>
      {state.fromLang}
    </>
  )
}

export default App
