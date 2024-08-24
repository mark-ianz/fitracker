// Dependencies
import { useState } from "react";

// Components
import Button from "../Button";
import Spinner from "../Spinner";

// Hooks
import useModalContext from "../../utils/hooks/useModalContext";
import useLogin from "../../utils/hooks/useLogin";
import Signup from "./SignupForm";
import CloseModalButton from "../CloseModalButton";

const LoginForm = () => {
  const { login, error, loading } = useLogin();
  const { openModal } = useModalContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      action="/"
      className="shadow-md p-8 pb-6 relative pt-12 rounded-md flex flex-col items-center justify-center w-10/12 max-w-screen-xsm bg-white z-10"
    >
      <CloseModalButton className={"absolute right-4 top-4"} />
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
          type={!showPassword ? "password" : "text"}
          name="password"
          id="password"
          className="input"
        />
      </div>
      <div
        className={`text-sm mt-2 w-full flex flex-row items-center flex-wrap gap-1 ${
          error ? "justify-between" : "justify-end"
        }`}
      >
        {error && <p className="text-red-400">{error}</p>}
        <div className="text-gray-600 flex gap-1 items-center justify-end">
          <p>Show Password</p>
          <input
            type="checkbox"
            name="showPassword"
            onChange={(e) => setShowPassword((s) => !s)}
            className="cursor-pointer"
          />
        </div>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <Button buttonType="primary" className={"w-full mt-10"} toSubmit={true}>
          Login
        </Button>
      )}
      <div className="text-gray-600 items-center text-sm mt-4 flex flex-col">
        <button
          onClick={() => {
            openModal(<Signup />);
          }}
        >
          Doesn't have an account?
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
