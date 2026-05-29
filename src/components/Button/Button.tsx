import { Link } from "react-router";

export default function Button() {
  return (
    <Link to="/contact">
      <button className="cursor-pointer text-t5 text-snackly-blue font-bold bg-white px-7.5 py-3.75 rounded-2xl">
        Contactez-nous
      </button>
    </Link>
  );
}
