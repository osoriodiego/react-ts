import { useState } from "react";

interface User {
  name: string;
  email: string;
  uuid: string;
}

export const User = () => {
  const [user, setUser] = useState<User>();

  const login = () => {
    setUser({
      name: "John Doe",
      email: "john@doe.com",
      uuid: "1234-XYZ",
    });
  };

  const reset = () => {
    setUser(undefined);
  };

  return (
    <>
      <div>
        {/* <p>User: {user ? user.name : "..."}</p>
        <p>Email: {user ? user.email : "..."}</p> */}
        <p>User: {user && JSON.stringify(user)}</p>
      </div>
      <div>
        <button onClick={reset} className="btn btn-secondary">clear</button>
        <button onClick={login} className="btn btn-primary">login</button>
      </div>
    </>
  );
};
