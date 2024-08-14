import DeliveryDetailsView from "./DeliveryDetails.view";

export default function DeliveryDetails() {
  const deliveryDetails = {
    code: "123456",
    address: "Rua dos Bobos, 0",
    shipping: "Correios",
    dateShipping: "2021-09-01",
  };
  return <DeliveryDetailsView deliveryDetails={deliveryDetails} />;
}
