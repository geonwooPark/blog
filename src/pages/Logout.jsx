import React from "react";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Logout({ setIsAuth }) {
  const navigate = useNavigate();

  const logout = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/");
    });
  };

  return (
    <div>
      <p>로그아웃</p>
      <button onClick={logout}>로그아웃</button>
    </div>
  );
}
