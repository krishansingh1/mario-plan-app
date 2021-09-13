import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import {signOut} from '../../store/actions/authAction';

const SignedInLinks= (props)=>{
   return(
      <ul className='right hide-on-med-and-down'>
         <li><NavLink to='/create'>New Project</NavLink></li>
         <li><a href='/' onClick={props.signOut}>Log Out</a></li>
         <li><NavLink to='/' className='btn btn-floating pink lightne-1'>
            {props.profile.initials}
         </NavLink></li>
      </ul>
   );  
}

const mapDispatchToProps=(disptach)=>{
    return{
       signOut: ()=> disptach(signOut())
    }
}

 export default connect(null,mapDispatchToProps)(SignedInLinks);