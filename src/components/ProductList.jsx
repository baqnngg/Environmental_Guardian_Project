export default function ProductList({ products, onSelect }) {
    return (
      <div className="grid grid-cols-2 gap-4 mb-6">
        {Object.keys(products).map((product) => (
          <div
            key={product}
            className="bg-white shadow-md p-4 rounded cursor-pointer hover:bg-gray-100"
            onClick={() => onSelect(product)}
          >
            <h2 className="font-semibold text-lg">{product}</h2>
          </div>
        ))}
      </div>
    );
  }
  