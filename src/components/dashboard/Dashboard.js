import React,{ Component } from "react"; 
import ProjectList from '../projects/ProjectList'
import {connect} from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import {Redirect} from 'react-router-dom';

class Dashboard extends Component{

    render(){
      //console.log(this.props);

      const { projectMap, auth } = this.props;
      
      if(!auth.uid) return <Redirect to='/signin'/>

      return(
        <div className="dashboard container">
            <div className="row">
                
              {/* Project List Div */}
               <div className="col s12 m6">
                    <ProjectList projects={projectMap}/>
               </div>     

               {/* Notification section div */}
                 {/* <div className="col s12 m5 offset-m1">
                   <Notifications notifications={notifications}/>
                 </div> */}
            </div>  
        </div>
      );
    }
}

const mapStateToProps= (state)=> {
   //console.log(state);
   return{
     projectMap: state.firestore.ordered.projects,
     auth: state.firebase.auth,
     //notifications: state.firestore.ordered.notifications
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects', orderBy: ['createdAt', 'desc']},
    //{ collection: 'notifications', limit:3}
  ]) 
)(Dashboard)