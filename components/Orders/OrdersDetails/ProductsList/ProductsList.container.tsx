import ProductsListView from "./ProductsList.view";

export default function ProductsList() {
  const listProducts = [
    {
      name: "Product 1",
      price: 200,
      image: "https://i.pravatar.cc/150",
    },
    {
      name: "Product 2",
      price: 400,
      image: "https://i.pravatar.cc/150",
    },
  ];

  return <ProductsListView listProducts={listProducts} />;
}
