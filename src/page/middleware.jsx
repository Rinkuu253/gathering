import { Navigate, useLocation, useParams } from "react-router-dom";

export default function DateRedirectMiddleware({ rules, children }) {
  const now = Date.now();
  const params = useParams();
  const location = useLocation();

  for (const rule of rules) {
    if (now >= rule.start && now <= rule.end) {
      let target = rule.redirectTo;

      // replace dynamic params (:kelompok)
      Object.entries(params).forEach(([key, value]) => {
        target = target.replace(`:${key}`, value);
      });

      // avoid infinite loop
      if (location.pathname !== target) {
        return <Navigate to={target} replace />;
      }
    }
  }

  // kalau ga ada rule yang cocok, render halaman aslinya
  return (
    <>
      <Navigate to={`/notfound/${params.kelompok}`} />
    </>
  );
}
