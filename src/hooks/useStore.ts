import { useReducer } from 'react'
import { Action, FromLang, Language, type TranslateState } from '../types.d'
import { AUTO_LANGUAGE } from '../constants'

const initialState: TranslateState = {
  fromLang: 'auto',
  toLang: 'en',
  fromText: '',
  toText: '',
  loading: false,
}

function reducer (state: TranslateState, action: Action) {
  const { type } = action

  if (type === 'INTERCHANGE_LANG') {
    if (state.fromLang === AUTO_LANGUAGE) {
      return state
    }
    return { ...state, fromLang: state.toLang, toLang: state.fromLang }
  }

  if (type === 'CHANGE_TO_LANG') {
    return { ...state, toLang: action.payload }
  }

  if (type === 'CHANGE_FROM_LANG') {
    return { ...state, fromLang: action.payload }
  }

  if (type === 'CHANGE_FROM_TEXT') {
    return { ...state, fromText: action.payload, loading: true}
  }

  if (type === 'CHANGE_TO_TEXT') { 
    return { ...state, toText: action.payload, loading: false}
  }

  return state
}

export function useStore () {
  const [{fromLang, toLang, fromText, toText, loading}, dispatch] = useReducer(reducer, initialState)
  
  const interchangeLang = () => dispatch({type: 'INTERCHANGE_LANG'})
  const changeToLang = (payload: Language) => dispatch({type: 'CHANGE_TO_LANG', payload})
  const changeFromLang = (payload: FromLang) => dispatch({type: 'CHANGE_FROM_LANG', payload})
  const changeFromText = (payload: string) => dispatch({type: 'CHANGE_FROM_TEXT', payload})
  const changeToText = (payload: string) => dispatch({type: 'CHANGE_TO_TEXT', payload})

  return {
    fromLang,
    toLang,
    fromText,
    toText,
    loading,
    interchangeLang,
    changeFromLang,
    changeToLang,
    changeFromText,
    changeToText
  }
}