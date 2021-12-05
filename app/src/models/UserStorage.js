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
}
module.exports = UserStorage;
