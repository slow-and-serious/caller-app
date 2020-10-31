import axios from "axios";

const baseURL = "http://64.227.53.237/api/v1/";

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    authorization: sessionStorage.getItem("access_token")
      ? "JWT " + sessionStorage.getItem("access_token")
      : null,
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;

    if (typeof error.response === "undefined") {
      console.log("Unknown error");
      return Promise.reject(error);
    }
    if (
      error.response.status === 401 &&
      originalRequest.url === baseURL + "user/token/refresh"
    ) {
      window.location.href = "/login/";
      return Promise.reject(error);
    }

    if (
      error.response.data.code === "token_not_valid" &&
      error.response.status === 401 &&
      error.response.statusText === "Unauthorized"
    ) {
      const refreshToken = sessionStorage.getItem("refresh_token");

      if (refreshToken) {
        const tokenParts = JSON.parse(atob(refreshToken.split(".")[1]));

        // exp date in token is expressed in seconds, while now() returns milliseconds:
        const now = Math.ceil(Date.now() / 1000);
        console.log(refreshToken);

        if (tokenParts.exp > now) {
          return axiosInstance
            .post("user/token/refresh", { refresh: refreshToken })
            .then((response) => {
              sessionStorage.setItem("access_token", response.data.access);
              sessionStorage.setItem("refresh_token", response.data.refresh);

              axiosInstance.defaults.headers["Authorization"] =
                "JWT " + response.data.access;
              originalRequest.headers["Authorization"] =
                "JWT " + response.data.access;
              window.location.reload();

              return axiosInstance(originalRequest);
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          console.log("Refresh token is expired", tokenParts.exp, now);
          window.location.href = "/login";
        }
      } else {
        console.log("Refresh token not available.");
        window.location.href = "/login";
      }
    }

    // specific error handling done elsewhere
    return Promise.reject(error);
  }
);

export default axiosInstance;
