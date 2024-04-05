import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import LoginInput from "../components/LoginInput";
import { login } from "../utils/network-data";
import toast from "react-hot-toast";

const LoginPage = ({ loginSuccess }) => {
  const onLoginHandler = async ({ email, password }) => {
    const { error, data } = await login({ email, password });
    if (!error) {
      loginSuccess(data);
      toast.success("Login success");
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen mx-auto font-sans text-white bg-primary">
      <div className="flex flex-col items-center w-[60%] justify-center py-3 border-dashed rounded-md border-3 md:py-6 border-slate-900 ">
        <article className="w-[85%] rounded-e-xl  shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-secondary p-7">
          <LoginInput login={onLoginHandler} />
          <p className="pt-3">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="text-primary">
              Register
            </Link>
          </p>
        </article>
      </div>
    </section>
  );
};

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
