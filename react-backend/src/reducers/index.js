import {combineReducers} from 'redux';
import Listcreate from './listcreate';
import Listboss from './listboss';
import Addname from './addfirstname';

const allReducers = combineReducers({
  users: Listboss,
  persons: Listcreate,
  addname: Addname
});

console.log(Listboss);
console.log(Listcreate);

export default allReducers;
