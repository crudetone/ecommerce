import { Item } from "../models/CategoryItem";
import { mobile } from "../responsive";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: '30vh' })}
`;

const Info = styled.div`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  color: #fff;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #fff;
  border: none;
  color: #333;
  cursor: pointer;
  padding: 10px;
  text-transform: uppercase;
  font-weight: 600;
`;

const CategoryItem = ({ ...props }: { item: Item }) => {
  const { img, title } = props.item;
  return (
    <Container>
      <Image src={img} />
      <Info>
        <Title>{title}</Title>
        <Button>shop now</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
