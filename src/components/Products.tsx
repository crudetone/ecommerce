import { popularProducts } from "../data";
import { ProductItem } from "../models/Products";
import Product from "./Product";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item: ProductItem) => (
        <Product key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Products;
