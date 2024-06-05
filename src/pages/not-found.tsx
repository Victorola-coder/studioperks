import { Link } from "react-router-dom";
import { SEO } from "../components/global";

export default function NotFound() {
  return (
    <>
      <SEO title="Page not found, pay $404 to access this page" />
      <div className="text-black text-center font-semibold text-xl">
        You are not supposed to see this page due to legal reasons.
        <br /> go to&nbsp;
        <span className="text-vista underline">
          <Link to="/">home</Link>
        </span>
      </div>
    </>
  );
}
