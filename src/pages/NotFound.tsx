import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="pt-32 pb-20 px-6 min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-7xl md:text-9xl font-serif-display mb-4 text-pampai-gradient">404</h1>
        <p className="mb-8 text-xl text-ink-muted">Página no encontrada / Page not found</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full bg-pampai-gradient text-white px-7 py-3 text-sm font-medium hover:opacity-90"
        >
          ← Volver al inicio / Back home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
