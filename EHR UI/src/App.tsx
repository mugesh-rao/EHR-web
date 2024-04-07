import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import AddMachines from "./components/Insurance/RequestInsurance";
import Orders from "./pages/Orders";
import Home from "./pages/Home";
import ManageCategory from "./components/Insurance/ManageCategory";
import Insurance from "./pages/Insurance";
import RequestInsurance from "./components/Insurance/RequestInsurance";
import Patient from "./pages/Patient";
import { Auth } from "./components/Auth/Login";
import AddInsurance from "./components/Insurance/AddInsurance";

function App() {
  return (
    <TooltipProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          {/* User */}
          <Route path="/Request-Insurance" element={<RequestInsurance />} />
          <Route path="/Patient" element={<Patient />} />

          {/* Insurance */}
          <Route path="/Insurance" element={<Insurance />} />
          <Route path="/View-Insurance" element={<Orders />} />
          <Route path="/Add-Insurance" element={<AddInsurance/>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  );
}

export default App;
