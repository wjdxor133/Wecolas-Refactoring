import React from "react";
// import img from "../../images/logo_text.png";
import { withRouter } from "react-router-dom";
import "./Login.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      id: "",
      password: "",
      idChecked: false,
      pwChecked: false,
    };
  }

  // 아이디 값 체크
  idInputCheck = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    if (event.target.name === "id" && event.target.value.includes("@")) {
      this.setState({ idChecked: true }, () =>
        console.log(this.state.idChecked)
      );
    } else {
      this.setState({ idChecked: false });
    }
  };

  // 비밀번호 값 체크
  pwInputCheck = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    if (event.target.name === "password" && event.target.value.length >= 5) {
      this.setState(
        {
          [event.target.name]: event.target.value,
          pwChecked: true,
        },
        () => console.log(this.state.pwChecked)
      );
    } else {
      this.setState({ pwChecked: false });
    }
  };

  // 전송하기
  handleSubmit = () => {
    fetch("http://10.58.5.168:8000/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: this.state.id,
        password: this.state.password,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("확인", response);
        if (response.Authorization) {
          localStorage.setItem("token", response.Authorization);
          toast.success(
            "로그인 성공!",
            { position: "bottom-center" },
            { autoClose: 1500 }
          );
          setTimeout(this.gotoMain, 3500);
        } else {
          toast.error("로그인 실패!", { position: "bottom-center" });
        }
      });
  };

  gotoMain = () => {
    this.props.history.push("/Main");
  };

  render() {
    return (
      <div className="Login">
        <ToastContainer />
        <div className="login-form">
          <img src=" " alt="Logo" />
          <input
            className="userId"
            name="id"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={this.idInputCheck}
          />
          <input
            className="userPw"
            name="password"
            type="password"
            placeholder="비밀번호"
            onChange={this.pwInputCheck}
          />
          <button
            className="loginBtn"
            type="button"
            style={
              this.state.idChecked && this.state.pwChecked
                ? { backgroundColor: "#83ccfb" }
                : { backgroundColor: "#b2dffc" }
            }
            onClick={this.handleSubmit}
          >
            로그인
          </button>
        </div>
        <div className="signIn">
          <p>
            계정이 없으신가요?
            <a href="/Main">가입하기</a>
          </p>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
