import { useState } from "react";
import Button from "./Button";
import Spinner from "./Spinner";
import useSignup from "../utils/hooks/useSignup";
import { useNavigate } from "react-router-dom";
import useModalContext from "../utils/hooks/useModalContext";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { closeModal } = useModalContext();

  const { signup, loading, error } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const credentials = { username, email, password, confirmPassword };

    await signup(credentials);
    closeModal();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border-2 border-black p-8 rounded-lg flex flex-col items-center justify-center w-10/12 max-w-screen-xsm bg-white z-10"
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
          type="password"
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
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          className="input"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <div className="text-sm mt-2 w-full flex flex-row">
        {error && <p className="text-red-400">{error}</p>}
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <Button className={"w-full mt-10"} buttonType="primary" toSubmit={true}>
          Signup
        </Button>
      )}
    </form>
  );
};

export default Signup;
