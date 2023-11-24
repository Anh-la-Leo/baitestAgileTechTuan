import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Logo from "../../imge/logo.png";
import "./signin.css";
function Signin() {
  const [username, setUsername] = useState("");
  const [loggedIn, setLoggedId] = useState(false);
  const [userErr, setUserErr] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    //kiem tra trang thai dang nhap khi duoc tai
    const renderData = localStorage.getItem("getSignin");
    if (renderData) {
      setLoggedId(true);
    } else {
      setLoggedId(false);
    }
  }, []);
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!username) {
      setUserErr(true);
    } else {
      setUserErr(false);
    }
    try {
      const response = await axios.post(
        "https://test-react.agiletech.vn/auth/login",
        {
          username: username,
        }
      );
      if (response.status === 201) {
        setLoggedId(true);
        const xhttp = response.data.accessToken;
        const xhttps = response.data.refreshToken;
        localStorage.setItem("getSignin", xhttp, xhttps);
        navigate("/TableUser");
      } else {
        console.log("dang nhap that bai");
        setLoggedId(false);
      }
    } catch (error) {
      console.error("loi dang nhap", error);
      setLoggedId(false);
    }
  };
  return (
    <>
      <div className="Signin">
        <div className="header_signin">
          <img src={Logo} alt="logo_signin" />
        </div>
        <div className="main_signin">
          <form className="from_signin">
            <h1>Sign in </h1>
            <div className="lab_in">
              <label>Username</label>
              <input
                type="text"
                id="fname"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {userErr && (
                <div className="error">
                  Trường tên đăng nhập không được bỏ trống.
                </div>
              )}
            </div>
            <button
              className="text_btn_signin"
              type="buton"
              onClick={handleLogin}
            >
              <strong>Sign In</strong>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Signin;
