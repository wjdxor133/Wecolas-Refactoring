import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import LogoTextImg from "../../images/logo_text.png";
import "./Signup.scss";

class Signup extends React.Component {
  state = {
    email: "",
    telephone: "",
    username: "",
    password: "",
  };

  gotoLogin = () => {
    return this.props.history.push("/");
  };

  SignUpChecked = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () =>
      console.log(this.state)
    );
  };

  SignUpStart = () => {
    fetch("http://10.58.5.168:8000/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: this.state.email,
        telephone: this.state.telephone,
        username: this.state.username,
        password: this.state.password,
      }),
    });
    toast.success(
      "회원가입 성공!",
      { position: "bottom-center" },
      { autoClose: 1500 }
    );
    setTimeout(this.gotoLogin, 3500);
  };

  render() {
    return (
      <div className="Signup">
        <div className="SignupBox">
          <div className="signupHeader">
            <img src=" " alt="Logo" />
            <h3>친구들의 사진과 동영상을 보려면 가입하세요.</h3>
            <div className="boxLine">
              <div className="letfLine">
                <hr></hr>
              </div>
              <p>또는</p>
              <div className="rightLine">
                <hr></hr>
              </div>
            </div>
          </div>
          <div className="signupContent">
            <input
              className="userId"
              type="text"
              placeholder="이메일 주소"
              name="email"
              onChange={this.SignUpChecked}
            />
            <input
              className="myName"
              type="text"
              placeholder="핸드폰 번호"
              name="telephone"
              onChange={this.SignUpChecked}
            />
            <input
              className="userName"
              type="text"
              placeholder="사용자 이름"
              name="username"
              onChange={this.SignUpChecked}
            />
            <input
              className="userPw"
              type="password"
              placeholder="비밀번호"
              name="password"
              onChange={this.SignUpChecked}
            />
            <button
              className="loginBtn"
              type="button"
              onClick={this.SignUpStart}
            >
              가입
            </button>
            <ToastContainer />
            <p>
              가입하면 Instagram의 <b>약관</b>, <b>데이터 정책</b>및{" "}
              <b>쿠키 정책</b>에 동의하게 됩니다.
            </p>
          </div>
        </div>
        <div className="toLogin">
          <p>계정이 있으신가요?</p>
          <a className="LoginBtn" href="/Login">
            로그인
          </a>
        </div>
      </div>
    );
  }
}
export default Signup;
