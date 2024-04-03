// eslint-disable-next-line no-unused-vars
import React from "react";
import { register } from "../utils/network-data";
import RegisterInput from "../components/RegisterInput";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  const onRegisterHandler = async (user) => {
    const { error } = await register(user);
    if (!error) {
      navigate("/");
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen mx-auto font-sans text-white bg-primary">
      <div className="flex flex-col items-center w-[60%] justify-center py-3 border-dashed rounded-md border-3 md:py-6 border-slate-900 ">
        <article className="w-[85%] rounded-e-xl  shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-secondary p-7">
          <RegisterInput register={onRegisterHandler} />
          <p className="pt-3">
            Already have an account?{" "}
            <Link to="/" className="text-primary">
              Login
            </Link>
          </p>
        </article>
      </div>
    </section>
  );
};

export default RegisterPage;
