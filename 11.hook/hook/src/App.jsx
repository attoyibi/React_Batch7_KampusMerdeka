import React, { useState, useContext, createContext } from 'react'
import ContextApp from "./useContext/ContextApp"
import SimpleUseContext from './useContext/SimpleUseContext'
import ClassComponent from './ClassComponent'
import FunctionComponent from './FunctionComponent'
import BasicUseEffect from './useEffect/BasicUseEffect'
import FetchData from './useEffect/FetchData'
export default function App() {

  return (
    <>
      {/* <ClassComponent /> */}
      {/* <hr /> */}
      {/* <BasicUseEffect /> */}
      <FetchData />
    </>

  )
}
