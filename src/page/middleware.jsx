import { Navigate, useLocation, useParams } from "react-router-dom";

export default function DateRedirectMiddleware({ rules, children }) {
  const now = Date.now();
  const params = useParams();
  const location = useLocation();

  // Cari rule yang cocok dengan waktu SEKARANG
  const activeRules = rules.filter(
    (rule) => now >= rule.start && now <= rule.end
  );

  if (activeRules.length > 0) {
    // cek apakah path sekarang termasuk salah satu rule yang aktif
    const matchedRule = activeRules.find((rule) => {
      let target = rule.redirectTo;
      Object.entries(params).forEach(([key, value]) => {
        target = target.replace(`:${key}`, value);
      });
      return location.pathname.startsWith(target);
    });

    if (matchedRule) {
      // ✅ user sudah di halaman yang valid → biarkan
      return children;
    }

    // ❌ user belum di salah satu rule yang valid → redirect ke rule pertama
    let target = activeRules[0].redirectTo;
    Object.entries(params).forEach(([key, value]) => {
      target = target.replace(`:${key}`, value);
    });

    return <Navigate to={target} replace />;
  }

  // ❌ no matching rule → redirect ke NotFound
  return <Navigate to={`/notfound/${params.kelompok}`} replace />;
}
