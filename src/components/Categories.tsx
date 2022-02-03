import { categories } from "../data";
import { Item } from "../models/CategoryItem";
import { mobile } from '../responsive';
import CategoryItem from "./CategoryItem";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  ${mobile({ flexDirection: 'column', padding: '0' })}
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item: Item, index: number) => (
        <CategoryItem key={index} item={item} />
      ))}
    </Container>
  );
};

export default Categories;
