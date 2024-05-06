import {AUTO_LANGUAGE, SUPPORTED_LANGUAGES} from './constants'

export type Language = keyof typeof SUPPORTED_LANGUAGES
export type AutoLanguage = keyof typeof AUTO_LANGUAGE
export type FromLang = Language | AutoLanguage
export interface TranslateState {
  fromLang: string,
  toLang: string,
  fromText: string,
  toText: string,
  loading: boolean,
}

export type Action =
  | {type: 'INTERCHANGE_LANG'}
  | {type: 'CHANGE_TO_LANG', payload: {value: string}}
  | {type: 'CHANGE_FROM_LANG', payload: {value: string}}
  | {type: 'CHANGE_FROM_TEXT', payload: {value: string}}
  | {type: 'CHANGE_TO_TEXT', payload: {value: string}}
