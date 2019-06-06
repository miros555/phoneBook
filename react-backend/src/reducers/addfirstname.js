export default function (state=null, action){
  if (action.type==='ADD_PERSON_FIRSTNAME'){
    return action.payload;
  }
  else{
    return state;
  }
}
