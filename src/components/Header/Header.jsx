import { Outlet } from "react-router-dom";
import SignIn from "../../modals/SignIn/SignIn";
import Login from "../../modals/Login/Login";

const Header = () => {




  return <>
    <div className='header'>
      <h2>HEADER</h2>
      <SignIn/>
      <Login/>
    </div>

    <Outlet />
  </>

};

export default Header;