import User from './user';

function Admin() {
  User.apply(this, arguments);
}
Admin.prototype = Object.create(User.prototype);


export default Admin;
