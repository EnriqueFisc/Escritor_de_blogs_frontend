import React from 'react'
import { Navigate } from 'react-router-dom'
import { LoginScreen } from '../auth/LoginScreen'

export const LoginCheckAuth = ({ uid }) => {
  return (
    ( !!uid ) ?
    (<Navigate to="/" />)
    :
    (<LoginScreen />)
  )
}
