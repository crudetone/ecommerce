import { ProductItem } from "../models/Products";
import { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

interface ProductsProps {
  category?: string;
  filters?: any;
  sort?: string;
}

const Products = ({ category, filters, sort }: ProductsProps) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category
            ? `http://localhost:5000/api/v1/products?category=${category}`
            : `http://localhost:5000/api/v1/products`
        );
        setProducts(res.data);
      } catch (error) {
        console.log("error: ", error);
      }
    };

    getProducts();
  }, [category]);

  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item: any) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, category, filters]);

  useEffect(() => {
    switch (sort) {
      case "newest":
        setFilteredProducts((prev: ProductItem[]) =>
          [...prev].sort(
            (a: ProductItem, b: ProductItem) => a.createdAt - b.createdAt
          )
        );
        break;

      case "asc":
        setFilteredProducts((prev: ProductItem[]) =>
          [...prev].sort((a: ProductItem, b: ProductItem) => a.price - b.price)
        );
        break;

      default:
        setFilteredProducts((prev: ProductItem[]) =>
          [...prev].sort((a: ProductItem, b: ProductItem) => b.price - a.price)
        );
        break;
    }
  }, [sort]);

  return (
    <Container>
      {category
        ? filteredProducts.map((item: ProductItem) => (
            <Product key={item.id} item={item} />
          ))
        : products
            .slice(0, 8)
            .map((item: ProductItem) => (
              <Product key={item.id} item={item} />
            ))}
    </Container>
  );
};

export default Products;
