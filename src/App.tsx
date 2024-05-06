import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { useReducer } from 'react'

const initialState = {
  fromLang: 'auto',
  toLang: 'en',
  fromText: '',
  toText: '',
  loading: false,
}

function reducer (state, action) {
  const { type, payload } = action

  if (type === 'INTERCHANGE_LANG') {
    return { ...state, fromLang: state.toLang, toLang: state.fromLang }
  }

  if (type === 'CHANGE_TO_LANG') {
    return { ...state, toLang: payload.value }
  }

  if (type === 'CHANGE_FROM_LANG') {
    return { ...state, fromLang: payload.value }
  }

  if (type === 'CHANGE_FROM_TEXT') {
    return { ...state, fromText: payload.value, loading: true}
  }

  if (type === 'CHANGE_TO_TEXT') { 
    return { ...state, toText: payload.value, loading: false}
  }

  return state
}



function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <h1>Google Translate</h1>
    </>
  )
}

export default App
