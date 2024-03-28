import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-5 font-sans text-center bg-primary">
      <p className="text-sm text-white md:text-xl">
        © 2024, Made with 🔥🌾 by{" "}
        <Link
          to="https://github.com/Azzaxy1"
          className="font-medium text-white hover:text-slate-800"
        >
          Abdurrohman Azis
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
