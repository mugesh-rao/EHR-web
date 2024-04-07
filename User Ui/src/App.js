import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./Layout/Loader";
import ErrorPage from "./Pages/Errorpage";
import { Provider } from "react-redux";
import store from "./context/store";


const Home = lazy(() => import("./Pages/Home"));
const CheckOut = lazy(() => import("./Components/CheckOut/CheckOut"));
const EqupimentsBuy = lazy(() => import("./Components/CheckOut/EqupimentsBuy"));

const category = lazy(() => import("./Pages/Category"));
const History = lazy(() => import("./Pages/History"));

const Payments = lazy(() => import("./Components/CheckOut/PaymentPage"));
const Account = lazy(() => import("./Pages/Account"));
const chatbot = lazy(() => import("./Components/ChatBot/ChatBot"));


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route exact path="/Checkout" Component={CheckOut} />
            <Route exact path="/history" Component={History} />
            <Route exact path="/payments" Component={Payments} />
            <Route exact path="/chatbot" Component={chatbot} />

            <Route exact path="/insurance/:id" Component={EqupimentsBuy} />

            <Route exact path="/category" Component={category} />
            <Route exact path="/account" Component={Account} />
           

            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
