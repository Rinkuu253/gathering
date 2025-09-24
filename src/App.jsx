import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./page/mainPage";
import NotFound from "./page/notFound";
import { dateRules } from "./page/dateRules";
import Dashboard from "./page/dashboard";
import DateRedirectMiddleware from "./page/middleware";
import GroupPage from "./page/group";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/gathering/:kelompok"
          element={
            <DateRedirectMiddleware rules={dateRules}>
              <Dashboard />
            </DateRedirectMiddleware>
          }
        />
        <Route
          path="/main/:kelompok"
          element={
            <DateRedirectMiddleware rules={dateRules}>
              <MainPage />
            </DateRedirectMiddleware>
          }
        />
        <Route
          path="/group/:kelompok"
          element={
            <DateRedirectMiddleware rules={dateRules}>
              <GroupPage />
            </DateRedirectMiddleware>
          }
        />
        <Route path="/notfound/:kelompok" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
