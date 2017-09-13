import _ from "lodash";
import UserModel from "../models/UserModel";

const UserCtrl = {
  //// ADMIN
  users: (req, res) => {
    UserModel.getUsers({})
    .then((data) => {
      if (data === null) {throw new Error('noUserError');}
      let response = [];
      for (let user of data){
        response[response.length] = {
          email: user.email,
          firstname: user.firstname,
          lastname: user.lastname,
        }
      }
      return _.sortBy(response, 'email');
    })
    .then((data) => {
      res.send(data);
    }, (err) => {
      res.status(Errors(err).code).send(Errors(err));
    });
  },
};

export default UserCtrl;
