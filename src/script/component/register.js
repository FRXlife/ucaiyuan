import React from 'react'
import ReactDOM from 'react-dom'

import { Link } from 'react-router'
import Toast from '../../component_dev/toast/src'
class Register extends React.Component {
  constructor(props){
    super(props)
    this.resgisterBtn=this.resgisterBtn.bind(this);
  }

resgisterBtn () {
  console.log(this);
  let Username = this.refs.username.value;
  let password = this.refs.password.value;
  if(Username == "" || password == ""){
    Toast.show('请输入手机号');
  }else{
    $.ajax({
      type:"get",
      url:"http://datainfo.duapp.com/shopdata/userinfo.php",
      data:{
        status:"register",
        Username:Username,
        password:password
      },
      success:function(data){
        console.log(data);
        window.history.go(-1);
      }
    })
  }
}

  render () {
    return (
      <div className="register">
        <header className="resgisterHeader">
          <Link to="/my">
            <i></i>
          </Link>
          <p> 注册 </p>
        </header>
        <div className="registerContent">
          <ul >
          <li className="username">
            <input type="text" ref="username" placeholder = "请输入手机号"/>
            <i id="delete">  X </i>
          </li>
          <li className="captcha">
            <input   ref="yanzheng" placeholder = "请输入验证码"/>
            <div id="yan">发送验证码</div>
          </li>
            <li className="password">
              <input  type="password" ref="password"  placeholder = "请输入密码(不少于6位)"/>
            </li>
          </ul>
          <div className="btn">
          <span className="fa-btn" onClick={this.resgisterBtn}>验证手机快捷登录</span>
            <span className="login-btn">
                <Link to="/login">
                  已有账号，快捷登录
                </Link>
            </span>
          </div>
        </div>
      </div>

    )
  }

}

export default Register
