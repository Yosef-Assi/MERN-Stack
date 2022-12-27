import React from 'react'
import { Link } from '@reach/router';
import ListProjects from '../components/ListProjects';
import LoginForm from '../components/LoginForm';

export const Main = () => {
  return (
    <div>
      <h1>Pet Shelter</h1>
       <ListProjects/>
    </div>
  )
}
