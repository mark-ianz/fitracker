// Dependencies
import { useState } from "react";

// Components
import Button from "./Buttons/Button";
import Spinner from "./Spinner";

// Hooks
import useModalContext from "../utils/hooks/useModalContext";
import useLogin from "../utils/hooks/useLogin";

const LoginForm = () => {
  const { login, error, loading } = useLogin();
  const { closeModal } = useModalContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const credentials = { email, password };
    await login(credentials);
    closeModal();
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      action="/"
      className="border-2 border-black p-8 rounded-lg flex flex-col items-center justify-center w-10/12 max-w-screen-xsm bg-white z-10"
    >
      <h1 className="text-3xl mb-10">Login</h1>
      <div className="flex flex-col w-full mb-6">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="input"
          onChange={handleEmailChange}
          value={email}
        />
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="password">Password</label>
        <input
          onChange={handlePasswordChange}
          value={password}
          type="password"
          name="password"
          id="password"
          className="input"
        />
      </div>
      <div className="text-sm mt-2 w-full flex flex-row">
        {error && <p className="text-red-400">{error}</p>}
        <a href="/forgot" className="text-gray-400 items-end ml-auto">
          Forgot Password?
        </a>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <Button buttonType="primary" className={"w-full mt-10"} toSubmit={true}>Login</Button>
      )}
    </form>
  );
};

export default LoginForm;
