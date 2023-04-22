import React from 'react'
import { Navigate } from 'react-router-dom'
import { RegisterScreen } from '../auth/RegisterScreen'

export const RegisterCheckAuth = ({ uid }) => {
  return (
    ( !!uid ) ?
    (<Navigate to="/" />)
    :
    (<RegisterScreen />)
  )
}
