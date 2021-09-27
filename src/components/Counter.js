import { useReducer, useContext, createContext, useState } from 'react'

const CounterStateContext = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREASE':
      return state + 1
    case 'DECREASE':
      return state - 1
    case 'INCREASE_BY':
      return state + action.payload
    default:
      throw new Error(`Unknown action: ${action.type}`)
  }
}

export const AppStateProvider = ({ children }) => {
  const [state, setState] = useState(0)
  return (
    <CounterStateContext.Provider value={{state, setState}}>
    {children}
    </CounterStateContext.Provider>
  )
}

export const useCount = () => useContext(CounterStateContext)
