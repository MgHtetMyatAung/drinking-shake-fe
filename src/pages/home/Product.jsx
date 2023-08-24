import ProductCard from "./ProductCard";

const Product = ({ title, data }) => {
  return (
    <div className=" container mx-auto mb-[60px]">
      <h3 className="p-head mb-12">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 lg:gap-20">
        {data.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Product;
