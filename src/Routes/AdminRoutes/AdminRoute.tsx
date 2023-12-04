import {Routes,Route} from "react-router-dom"
import AdminLogin from "../../Pages/Admin/AdminLogin"

export default function AdminRoute() {
  return (
    <Routes>
        <Route path="/login" element={<AdminLogin/>}/>
    </Routes>
  )
}
