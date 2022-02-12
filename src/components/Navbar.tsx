import { Badge } from "@material-ui/core";
import { Link } from "react-router-dom";
import { mobile } from '../responsive';
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: '50px' })}
`;
const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  ${mobile({ padding: '10px 0' })}
`;

const Left = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
`;

const Language = styled.span`
  cursor: pointer;
  font-size: 14px;
  ${mobile({ display: 'none' })}
`;

const SearchContainer = styled.div`
  align-items: center;
  border: 1px solid lightgray;
  display: flex;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: '50px' })}
`;

const Center = styled.div`
  flex: 2;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: '24px' })}
`;

const Right = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: 'center' })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: '12px', marginLeft: '10px' })}
`;

const LinkItem = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: #333;
`;

const Navbar: React.FC = () => {
  const quantity = useSelector((state: any) => state.cart.quantity);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search..." />
            <Search style={{color: "gray", fontSize: 16}} />
          </SearchContainer>
        </Left>
        <Center>
          <LinkItem to="/">
            <Logo>Devez Shop.</Logo>
          </LinkItem>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
