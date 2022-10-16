import { Routes, Route } from "react-router-dom";
import { Grommet } from "grommet";

import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/Home";
import { OortDashboardPage } from "./pages/OortDashboard";
import { ProtectedLayout } from "./components/ProtectedLayout";
import { NonsecuredLayout } from "./components/NonsecuredLayout";
import { ErrorPage } from "./pages/ErrorPage";

export default function App() {
  const theme = {
    global: {
      font: {
        family: 'Roboto',
        size: '18px',
        height: '20px',
      },
    },
  };

  return (
    <Grommet theme={theme} full>
      <Routes>
        <Route element={<NonsecuredLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route path="/secure" element={<ProtectedLayout />}>
          <Route path="oort" element={<OortDashboardPage />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Grommet>
  )
}
