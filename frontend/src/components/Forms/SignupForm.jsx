import { useState } from "react";
import Button from "../Button";
import Spinner from "../Spinner";
import useSignup from "../../utils/hooks/useSignup";
import useModalContext from "../../utils/hooks/useModalContext";
import LoginForm from "./LoginForm";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { openModal } = useModalContext();

  const { signup, loading, error } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const credentials = { username, email, password, confirmPassword };

    await signup(credentials);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="shadow-md p-6 rounded-md flex flex-col items-center justify-center w-10/12 max-w-screen-xsm bg-white z-10"
    >
      <h1 className="text-3xl mb-10">Signup</h1>
      <div className="flex flex-col w-full mb-6">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          className="input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="flex flex-col w-full mb-6">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col w-full mb-6">
        <label htmlFor="password">Password</label>
        <input
          type={!showPassword ? "password" : "text"}
          name="password"
          id="password"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type={!showPassword ? "password" : "text"}
          name="confirmPassword"
          id="confirmPassword"
          className="input"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <div className="text-sm mt-2 w-full flex flex-row items-start">
        {error && <p className="text-red-400 max-w-[65%]">{error}</p>}
        <div className="ml-auto text-gray-600 flex gap-1 items-center justify-center">
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
        <Button className={"w-full mt-10"} buttonType="primary" toSubmit={true}>
          Signup
        </Button>
      )}
      <button
        className="text-gray-600 items-center text-sm mt-4"
        onClick={() => {
          openModal(<LoginForm />);
        }}
      >
        Already have an account?
      </button>
    </form>
  );
};

export default Signup;
