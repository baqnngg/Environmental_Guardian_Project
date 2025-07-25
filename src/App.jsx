import { useState, useEffect } from "react";
import PlasticSelector from "./components/PlasticSelector";
import ProductList from "./components/ProductList";
import ProductGuide from "./components/ProductGuide";

export default function App() {
  const [data, setData] = useState({});
  const [selectedPlastic, setSelectedPlastic] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch("/data/guides.json")
      .then((res) => res.json())
      .then(setData);
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">♻️ 플라스틱 업사이클링 가이드</h1>
      <PlasticSelector plastics={data} onSelect={setSelectedPlastic} />
      {selectedPlastic && (
        <ProductList
          products={data[selectedPlastic].products}
          onSelect={setSelectedProduct}
        />
      )}
      {selectedProduct && (
        <ProductGuide
          guide={data[selectedPlastic].products[selectedProduct]}
          product={selectedProduct}
        />
      )}
    </div>
  );
}
