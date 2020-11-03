import React from "react";
import { LinearProgress } from "@material-ui/core";

function Loading(Component) {
  return function LoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return <LinearProgress />;
  };
}
export default Loading;
