import ProductsListView from "./ProductsList.view";

interface Props {
  removeIcon?: boolean;
  onRemove?: () => void;
}

export default function ProductsList({ removeIcon, onRemove }: Props) {
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

  return (
    <ProductsListView
      onRemove={onRemove}
      removeIcon={removeIcon}
      listProducts={listProducts}
    />
  );
}
