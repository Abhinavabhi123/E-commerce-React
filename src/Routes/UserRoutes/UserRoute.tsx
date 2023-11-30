import { Routes, Route } from "react-router-dom";
import Home from "../../Pages/User/Home";

export default function UserRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
