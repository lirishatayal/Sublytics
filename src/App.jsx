import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SubscriptionProvider } from "./context/SubscriptionContext";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import Subscriptions from "./pages/Subscriptions";

export default function App() {
  return (
    <SubscriptionProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="subscriptions" element={<Subscriptions />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SubscriptionProvider>
  );
}
