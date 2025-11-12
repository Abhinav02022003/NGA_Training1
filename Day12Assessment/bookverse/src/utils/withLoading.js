import React, { useState } from "react";

const withLoading = (WrappedComponent) => {
  return function WithLoadingComponent(props) {
    const [isLoading, setLoading] = useState(false);

    return (
      <WrappedComponent
        {...props}
        isLoading={isLoading}
        setLoading={setLoading}
      />
    );
  };
};

export default withLoading;
