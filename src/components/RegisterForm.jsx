import { useState } from "react";

const RegisterForm = () => {
  const [formFields, setFormFields] = useState({
    usename: "",
    password: "",
    displayname: "",
  });

  console.log(formFields);

  return (
    <form>
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          value={formFields.username}
          onChange={(e) =>
            setFormFields((currentstate) => ({
              ...currentstate,
              username: e.target.value,
            }))
          }
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          value={formFields.password}
          onChange={(e) =>
            setFormFields((currentstate) => ({
              ...currentstate,
              password: e.target.value,
            }))
          }
        />
      </div>
      <div>
        <label htmlFor="displayname">Display Name</label>
        <input
          id="displayname"
          value={formFields.displayname}
          onChange={(e) =>
            setFormFields((currentstate) => ({
              ...currentstate,
              displayname: e.target.value,
            }))
          }
        />
      </div>
      {/* <button disabled={isDisabled}>Sign Up</button> */}
    </form>
  );
};

export default RegisterForm;
