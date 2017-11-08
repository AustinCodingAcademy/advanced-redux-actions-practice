import { connect } from 'react-redux';
import {addUser} from "../actions";
import {removeUser} from "../actions";
import UserButtons from "../components/UserButtons";


function mapDispatchToProps(dispatch){
  return {
   add:function(user){
     let action = addUser(user);
     dispatch(action);
   },
   remove:function(){
    let action = removeUser();
    dispatch(action);
  }
}



var label = connect(null, mapDispatchToProps);
var UserButtonsContainer = label(UserButtons);
export default UserButtonsContainer;
