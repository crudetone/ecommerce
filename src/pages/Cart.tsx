import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { ProductItem } from "../models/Products";

interface TopButtonProps {
  buttonType?: string;
}

interface SummaryItemProps {
  type?: string;
}

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button<TopButtonProps>`
  background-color: ${(props) =>
    props.buttonType === "filled" ? "#333" : "transparent"};
  border: ${(props) => props.buttonType === "filled" && "none"};
  color: ${(props) => props.buttonType === "filled" && "#fff"};
  cursor: pointer;
  font-weight: 600;
  padding: 10px;
`;

const TopTexts = styled.div`
  ${mobile({ display: 'none' })}
`;

const TopText = styled.span`
  cursor: pointer;
  margin: 0 10px;
  text-decoration: underline;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  ${mobile({ flexDirection: 'column' })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
`;

const ProductName = styled.span``;

const PriceDetail = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
`;

const ProductId = styled.span``;

const ProductColor = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 50%;
  height: 20px;
  width: 20px;
`;

const ProductSize = styled.span``;

const ProductAmountContainer = styled.span`
  align-items: center;
  display: flex;
  margin-bottom: 20px;
`;

const ProductAmount = styled.span`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: '5px 15px' })}
`;

const ProductPrice = styled.span`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: '20px' })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  border-radius: 10px;
  border: 0.5px solid lightgray;
  flex: 1;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const SummaryItem = styled.div<SummaryItemProps>`
  display: flex;
  font-size: ${(props) => props.type === "total" && "24px"};
  font-weight: ${(props) => props.type === "total" && "500"};
  justify-content: space-between;
  margin: 30px 0;
`;

const Button = styled.button`
  background-color: #333;
  color: #fff;
  font-weight: 600;
  padding: 10px;
  width: 100%;
`;

const Cart = () => {
  const cart = useSelector((state: any) => state.cart);

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Your bag</Title>
        <Top>
          <TopButton>Continue shopping</TopButton>
          <TopTexts>
            <TopText>Shopping Bag (2)</TopText>
            <TopText>Your wishlist (0)</TopText>
          </TopTexts>
          <TopButton buttonType="filled">Checkout now</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart?.products?.length ? cart.products.map((product: any) => (
              <Product key={product.id}>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Product: </b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>Id: </b> {product.id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>Size: </b> {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>{product.price * product.quantity}</ProductPrice>
                </PriceDetail>
              </Product>
            )) : null}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice> 
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.9</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <Button>Checkout now</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
