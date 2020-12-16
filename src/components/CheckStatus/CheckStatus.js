import React, { useEffect, useState } from "react";

const CheckStatus = (props) => {
  const [status, setStatus] = useState();

  useEffect(() => {});

  const checkStatus = () => {};

  return (
    <div>
      <h1>You are {status}, good job!</h1>
    </div>
  );
};

export default CheckStatus;
