import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserRoute from "./Routes/UserRoutes/UserRoute";
import AdminRoute from "./Routes/AdminRoutes/AdminRoute";
import ProviderRoute from "./Routes/ProviderRoutes/ProviderRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<UserRoute />} />
        <Route path="/admin/*" element={<AdminRoute />} />
        <Route path="/Provider/*" element={<ProviderRoute />} />
      </Routes>
    </Router>
  );
}

export default App;
