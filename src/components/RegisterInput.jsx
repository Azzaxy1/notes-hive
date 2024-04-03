// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import useInput from "../hooks/useInput";

const RegisterInput = ({ register }) => {
  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const [confirmPassword, onConfirmPasswordChange] = useInput("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Password and Confirm Password must be same");
    } else {
      register({ name, email, password });
    }
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col">
      <h1 className="mb-4 text-3xl font-semibold text-center text-lightMode">
        Register
      </h1>
      <input
        className="px-2 py-3 mb-3 text-base border-none rounded-sm outline-secondary"
        type="text"
        placeholder="Username"
        value={name}
        onChange={onNameChange}
        required
      />
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
      <input
        className="px-2 py-3 mb-3 text-base border-none rounded-sm outline-secondary"
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={onConfirmPasswordChange}
        required
      />
      <button
        type="submit"
        className="py-2 text-lg bg-[#1a80af] hover:bg-[#378eb6] text-white border-none rounded-lg cursor-pointer"
      >
        Register
      </button>
    </form>
  );
};

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
