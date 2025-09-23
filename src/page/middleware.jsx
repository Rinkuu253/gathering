import { Navigate, useLocation, useParams } from "react-router-dom";

export default function DateRedirectMiddleware({ rules, children }) {
  const now = Date.now();
  const params = useParams();
  const location = useLocation();

  for (const rule of rules) {
    if (now >= rule.start && now <= rule.end) {
      let target = rule.redirectTo;

      Object.entries(params).forEach(([key, value]) => {
        target = target.replace(`:${key}`, value);
      });

      if (location.pathname !== target) {
        return <Navigate to={target} replace />;
      }
      return children;
    }
  }

  // ❌ no matching rule → redirect to NotFound
  return <Navigate to={`/notfound/${params.kelompok}`} replace />;
}
