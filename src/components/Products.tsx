import { popularProducts } from "../data";
import { ProductItem } from "../models/Products";
import Product from "./Product";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

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
  const [filteredProducts, setFilteredProducts] = useState([]);

  const getProducts = async () => {
    try {
      const res = await axios.get(
        category
          ? `http://localhost:5000/api/v1/products?category=${category}`
          : `http://localhost:5000/api/v1/products`
      );
    } catch (error) {}
  };

  useEffect(() => {
    getProducts();
  }, [category]);

  return (
    <Container>
      {popularProducts.map((item: ProductItem) => (
        <Product key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Products;
