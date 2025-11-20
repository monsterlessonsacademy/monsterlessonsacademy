import { useEffect, useState } from "react";

const BillingContinueButton = ({ billingData, cart }) => {
  const [valid, setValid] = useState(false);

  useEffect(() => {
    const ready = billingData.email && billingData.cardNumber && cart.total > 0;
    setValid(ready);
  }, []);

  return <button disabled={!valid}>Continue</button>;
};

export default BillingContinueButton;
