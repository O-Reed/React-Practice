import React from "react";

const LoginForm = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formdata = new FormData(e.target);
        const username = formdata.get("username");
        const password = formdata.get("password");
        fetch("http://localhost:3001/api/login", {
          body: {
            username,
            password,
          },
          method: "POST",
        });
      }}
    >
      <label htmlFor="username">Username</label>
      <br />
      <input
        id="username"
        onChange={(e) => {
          console.log(`Username: ${e.target.value}`);
        }}
        name="username"
      />
      <br />
      <label htmlFor="password">Password</label>
      <br />
      <input
        id="password"
        type="password"
        onChange={(e) => {
          console.log(`Password: ${e.target.value}`);
        }}
        name="pasword"
      />
      <br />
      <button>login</button>
    </form>
  );
};

export default LoginForm;
