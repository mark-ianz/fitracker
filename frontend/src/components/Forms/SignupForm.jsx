import { useState } from "react";
import Button from "../Button";
import useSignup from "../../utils/hooks/useSignup";
import useModalContext from "../../utils/hooks/useModalContext";
import LoginForm from "./LoginForm";
import CloseModalButton from "../CloseModalButton";
import Loading from "../Icons/Loading";

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
      className="relative shadow-md p-6 pt-12 rounded-md flex flex-col items-center justify-center w-10/12 max-w-screen-xsm bg-white z-10"
    >
      <CloseModalButton className={"absolute right-4 top-4"} />
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
      <Button
        className={"w-full mt-10 flex items-center justify-center"}
        buttonType="primary"
        toSubmit={true}
      >
        {loading ? <Loading /> : "Signup"}
      </Button>
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
