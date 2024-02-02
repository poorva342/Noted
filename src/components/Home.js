import React, { useContext } from 'react'
import noteContext from '../context/noteContext';
import styled from 'styled-components';
import { Notes } from './Notes';
import { Addnotes } from './Addnotes';
export const Home = (props) => {
const {showAlert}=props
  return (
    <div>
<Notes showAlert={showAlert}/>
</div>
  )
}
export default Home