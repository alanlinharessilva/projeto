import axios from "axios";
import { useEffect, useState } from "react";
import Table from "../../components/Table";

export default function Home() {
  const [products, setProducts] = useState([]);
  async function getAllProducts() {
    const response = await axios.get("https://fakestoreapi.com/products");
    if (response.data) {
      setProducts(response.data);
    }
    console.log(response);
  }

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <>
      <h1>Pagina Inicial</h1>
      <div>
        <Table products={products} />
      </div>
    </>
  );
}
