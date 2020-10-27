import React from "react";

function ItemsLoading(Component) {
  return function ItemsLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <p style={{ fontSize: "25px" }}>
        We are waiting
      </p>
    );
  };
}
export default ItemsLoading;
