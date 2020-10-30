import React from "react";
import { CircularProgress } from "@material-ui/core";

function Loading(Component) {
  return function LoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return <CircularProgress />
  };
}
export default Loading;
