"use strict";
const UserStorage = require("../../models/UserStorage");

const output = {
  index: (req, res) => {
    res.render("home/index");
  },

  login: (req, res) => {
    res.render("home/login");
  },
};

const doing = {
  login: (req, res) => {
    const id = req.body.id,
      psword = req.body.psword;

    const users = UserStorage.getUsers("id", "psword");

    const response = {};
    //내용이 데이타에 있을경우npm
    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id); //순번

      if (users.psword[idx] === psword) {
        return res.json({success: true});
      }
    }

    //내용이 데이타에 없을 경우
    return res.json({
      success: false, //
      msg: "로그인에 실패하였습니다",
    });
  },
};

module.exports = {
  output,
  doing,
};
