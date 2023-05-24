import { Outlet } from "react-router-dom";
import {useState} from "react";
import SignIn from "../../modals/SignIn/SignIn";

const Header = () => {

  const [modalState, setModalState] = useState(false);


  const openRegModal = () => {
    console.log('hello ')
    setModalState(!modalState)
  }

  return <>
    <div className='header'>
      <h2>HEADER</h2>
      <button className='sign_in_btn' onClick={openRegModal}>Sign in</button>
    </div>


    {
        (modalState) ? <SignIn openRegModal={openRegModal}/> : null
    }



    <Outlet />
  </>

};

export default Header;