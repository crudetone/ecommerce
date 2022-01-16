import { ProductItem } from "../models/Products";
import styled from "styled-components";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";

const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(256,256,256,0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.5s ease;
`;


const Container = styled.div`
  flex: 1;
  height: 350px;
  margin: 5px;
  min-width: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info}{
    opacity: 1;
  }
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
width: 40px;
border-radius: 50%;
height: 40px;
background-color: #fff;
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
transition: all 0.5s ease;
cursor: pointer;

&:hover {
  background-color: #e9f5f5;
  transform: scale(1.1);
}
`;

const Product = ({ ...props }: { item: ProductItem }) => {
  const { img } = props.item;
  return (
    <Container>
      <Circle />
      <Image src={img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
