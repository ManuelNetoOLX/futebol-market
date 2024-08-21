import PaymentDetailsView from "./PaymentDetails.view";

export default function PaymentDetails() {
  const paymentDetails = {
    items: 598.86,
    shipping: 40.0,
    importCharges: 128.0,
  };

  const calculateTotal = () => {
    return (
      paymentDetails.items +
      paymentDetails.shipping +
      paymentDetails.importCharges
    );
  };

  const paymentDetailsWithTotal = {
    ...paymentDetails,
    totalPrice: calculateTotal(),
  };

  return <PaymentDetailsView paymentDetails={paymentDetailsWithTotal} />;
}
