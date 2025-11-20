import { useEffect, useState } from "react";
import BillingContinueButton from "./BillingContinueButton";
import MetricsDashboard from "./MetricsDashboard";

// const mockBilling = { email: "a@b.com", cardNumber: "4242" };
//  const mockCart = undefined
// const mockCart = { total: 50 };

const App = () => {
  const [billingData, setBillingData] = useState({
    email: "",
    cardNumber: "",
  });

  const [cart, setCart] = useState(undefined);
  const [selectedDate, setSelectedDate] = useState("2024-05-01");

  useEffect(() => {
    setTimeout(() => {
      setBillingData({ email: "a@b.com", cardNumber: "4242" });
      setCart({ total: 50 });
    }, 500);
  }, []);
  return (
    <div>
      <button onClick={() => setSelectedDate("2024-05-02")}>Change date</button>

      <MetricsDashboard selectedDate={selectedDate} />
    </div>
  );
  // return <BillingContinueButton billingData={billingData} cart={cart} />;
};

export default App;
