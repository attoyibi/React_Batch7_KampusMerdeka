import React, { useState, useContext, createContext } from 'react'
import ContextApp from "./useContext/ContextApp"
import SimpleUseContext from './useContext/SimpleUseContext'
import ClassComponent from './ClassComponent'
import FunctionComponent from './FunctionComponent'
export default function App() {

  return (
    <>
      {/* <ClassComponent /> */}
      <hr />
      <FunctionComponent />
    </>

  )
}
