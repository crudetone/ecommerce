import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";
import { ChangeEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import styled from "styled-components";
import { publicRequest } from "../requestMethods";
import { ProductItem } from "../models/Products";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  padding: 50px;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  height: 60vh;
  object-fit: cover;
  width: 100%;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0;
`;

const Price = styled.span`
  font-size: 40px;
  font-weight: 100;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
  width: 50%;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  align-items: center;
  display: flex;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 50%;
  cursor: pointer;
  height: 20px;
  margin: 0 5px;
  width: 20px;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 50%;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  align-items: center;
  display: flex;
  font-weight: 700;
`;

const Amount = styled.span`
  align-items: center;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  height: 30px;
  justify-content: center;
  margin: 0 5px;
  width: 30px;
`;

const Button = styled.button`
  background-color: #fff;
  border: 2px solid teal;
  cursor: pointer;
  padding: 15px;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const Product = () => {
  const id = useParams().id;
  const [product, setProduct] = useState<ProductItem | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [color, setColor] = useState<string>('');
  const [size, setSize] = useState<string>('');

  const handleQuantity = (type: string) => {
    switch (type) {
      case "inc":
        setQuantity(quantity + 1);
        break;

      case "dec":
        if (quantity > 1) {
          setQuantity(quantity - 1);
        }
        break;

      default:
        break;
    }
  };

  const handleAddToCart = () => {
    
  }

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res: any = await publicRequest.get(`products/product/${id}`);
        setProduct(res.data);
        console.log("res.data: ", res.data);
      } catch (error) {
        console.log("error: ", error);
      }
    };

    getProducts();
  }, [id]);

  return (
    <Container>
      <Navbar />
      {JSON.stringify(product)}
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={product?.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product?.title}</Title>
          <Desc>{product?.desc}</Desc>
          <Price>$ {product?.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product?.color?.map((color: string, idx: number) => (
                <FilterColor color={color} key={idx} onClick={() => setColor(color)} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(event: any) => setSize(event.target.value)}>
                {product?.size?.map((size: string, idx: number) => (
                  <FilterSizeOption key={idx}>{size}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")} />
            </AmountContainer>
            <Button onClick={handleAddToCart}>Add To Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
