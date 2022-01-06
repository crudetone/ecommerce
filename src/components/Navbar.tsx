import { Search } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
`;

const Left = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
`;

const Language = styled.span`
  cursor: pointer;
  font-size: 14px;
`;

const SearchContainer = styled.div`
  align-items: center;
  border: 1px solid lightgray;
  display: flex;
`;

const Center = styled.div`
  flex: 2;
`;

const Right = styled.div`
  flex: 1;
`;

const Navbar: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            input
            <Search />
          </SearchContainer>
        </Left>
        <Center>center</Center>
        <Right>right</Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
