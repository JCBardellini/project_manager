import React from "react";
import Navbar from "../../components/Navbar";

const Login = () => {
  return (
    <div>
      <Navbar />
      <main>
        <section></section>
        <form>
          <label htmlFor="email">email</label>
          <br />
          <input type="text" placeholder="Email" />
          <br />
          <label htmlFor="">password</label>
          <br />
          <input type="password" />
          <br />
        </form>
      </main>
    </div>
  );
};

export default Login;
