import { useEffect, useState } from "react";
import { getAllProducts } from "../services/products.service";

export const useItems = () => {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getAllProducts()
      .then((res) => {
        setProductsData(res.data.products);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, []);

  return { productsData, loading };
};