import React from "react";

function Login() {
  const [login, setlogin] = React.useState(false);

  const handleclick = () => {
    login(true);
  };
  return (
    <>
      <button onClick={handleclick}></button>
    </>
  );
}

export default Login;
