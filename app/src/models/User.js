"use stirct";
const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  login() {
    const client = this.body;
    const {id, psword} = UserStorage.getUserInfo(client.id);
    //id 가 일치 하는 경우
    if (id) {
      if (id === client.id && psword === client.psword) {
        return {success: true};
      }
      //id 가 있고 비번이 일치하지 않을 경우
      return {success: false, msg: "비밀번호가 틀렸습니다"};
    }
    //id 가 일치하지 않을때
    return {success: false, msg: " 존재하지 않는 아이디 입니다"};
  }

  register() {
    const client = this.body;
    UserStorage.save(client);
  }
}
module.exports = User;
