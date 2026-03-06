import { Routes, Route } from "react-router-dom";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import FlightResults from "./components/FlightResults";
import SeatSelection from "./components/SeatSelection";
import PaymentPageWrapper from "./pages/PaymentPageWrapper";
import BookingConfirmation from "./components/BookingConfirmation";
import Layout from "./components/Layout";
import PageTracker from "./components/PageTracker";
import OffersPage from "@/pages/OffersPage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import DestinationsPage from "./pages/DestinationsPage";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <PageTracker user={{
          userID: "",
          loginStatus: "",
          loyaltyTier: "",
          customerType: ""
        }} device={{
          deviceType: "",
          os: "",
          browser: "",
          screenResolution: ""
        }} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/offers" element={<OffersPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/flight-results" element={
            <Layout pageTitle="Flight Results Page">
              <FlightResults />
            </Layout>
          } />
          <Route path="/seat-selection" element={
            <Layout pageTitle="Seat Selection Page">
              <SeatSelection />
            </Layout>
          } />
          <Route path="/payment" element={<PaymentPageWrapper />} />
          <Route path="/booking-confirmation" element={<BookingConfirmation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
