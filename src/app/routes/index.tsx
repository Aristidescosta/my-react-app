import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "../pages";

export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
				<Route path="*" element={<Navigate to="/pagina-inicial"/>} />
				<Route path="/pagina-inicial" element={<Dashboard />} />
			</Routes>
    </BrowserRouter>
  );
};
