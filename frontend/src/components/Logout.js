import React, { useEffect } from "react";
import axiosInstance from "../services/axios";
import { useHistory } from "react-router-dom";

export default function SignUp() {
  const history = useHistory();

  useEffect(() => {
    axiosInstance.post("user/logout/blacklist", {
      refresh_token: sessionStorage.getItem("refresh_token"),
    });
    sessionStorage.removeItem("access_token");
    sessionStorage.removeItem("refresh_token");
    axiosInstance.defaults.headers["Authorization"] = null;
    history.push("/login");
  });
  return <div>Logout</div>;
}
