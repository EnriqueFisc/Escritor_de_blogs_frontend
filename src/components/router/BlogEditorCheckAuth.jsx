import React from 'react'
import { BlogCreator } from '../blog-creator/BlogCreator'
import { Navigate } from 'react-router-dom'

export const BlogEditorCheckAuth = ({ uid }) => {
  return (
    ( !!uid  ) ? 
        <BlogCreator/>
        :
        <Navigate to="/auth/login" />
  )
}
