import React from 'react'
import './components.css';
import { useHistory } from "react-router-dom";

const Home=()=> {
const history = useHistory();    
const handleBack = () => history.goBack(); 
const handleForward = () => history.goForward();
return (
  <div className='text'>
    This is the "Home" page.
    <div>
      <button onClick={handleBack}> Go back</button>
      <button onClick={handleForward}>  Go forward</button>
    </div>
  </div>
  )
}
export default Home;