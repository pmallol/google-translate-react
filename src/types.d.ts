export interface translateState {
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
