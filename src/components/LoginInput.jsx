import React from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

const LoginInput = ({ login }) => {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  const onSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col">
      <h1 className="mb-4 text-3xl font-semibold text-center text-lightMode">
        Login
      </h1>
      <input
        className="px-2 py-3 mb-3 text-base border-none rounded-sm outline-secondary"
        type="email"
        placeholder="Email"
        value={email}
        onChange={onEmailChange}
        required
      />
      <input
        className="px-2 py-3 mb-3 text-base border-none rounded-sm outline-secondary"
        type="password"
        placeholder="Password"
        value={password}
        onChange={onPasswordChange}
        required
      />
      <button
        type="submit"
        className="py-2 text-lg bg-[#1a80af] hover:bg-[#378eb6] text-white border-none rounded-lg cursor-pointer"
      >
        Login
      </button>
    </form>
  );
};

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
