import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";

export default function NotFound() {
  return (
    <>
      <SEO title="Page not found" description="The page you're looking for doesn't exist." path="/404" />
      <section className="min-h-[70vh] grid place-items-center container-px">
        <div className="text-center max-w-md">
          <div className="font-mono text-xs uppercase tracking-[0.22em] text-accent">Error 404</div>
          <h1 className="mt-4 font-display text-6xl md:text-7xl text-white">Not here.</h1>
          <p className="mt-5 text-white/60">
            The page you tried to open doesn't exist, or it never did. Probably the latter.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/" className="btn-primary">Go home</Link>
            <Link to="/contact" className="btn-ghost">Tell me what you were looking for</Link>
          </div>
        </div>
      </section>
    </>
  );
}
