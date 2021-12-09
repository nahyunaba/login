"use strict";
class UserStorage {
  static #users = {
    id: ["jinxiong", "xuanhua", "naxian"],
    psword: ["jin", "xuan", "na"],
    name: ["a", "b", "c"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((a, b) => {
      if (users.hasOwnProperty(b)) {
        a[b] = users[b];
      }
      return a;
    }, {});

    return newUsers;
  }

  static getUserInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(id); //=>[id,psword,name]

    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
  }

  static save(userInfo) {
    const users = this.#users;
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    return {sucess: true};
  }
}
module.exports = UserStorage;
