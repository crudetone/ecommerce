import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import styled from "styled-components";

const Container = styled.div``;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ margin: "0 20px", display: "flex", flexDirection: "column" })}
`;

const Title = styled.h1`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ margin: "0" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0" })}
`;

const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const category = location.pathname.split('/')[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('newest');

  const handleFilters = (e: any) => {
    const { value, name } = e.target;
    setFilters({ ...filters, [name]: value });
    console.log('filters', filters);
  };

  const handleSort = (e: any) => {
    const { value } = e.target;
    setSort(value);
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters} defaultValue="color">
            <Option value='color' disabled>Color</Option>
            <Option value='white'>White</Option>
            <Option value='black'>Black</Option>
            <Option value='red'>Red</Option>
            <Option value='blue'>Blue</Option>
            <Option value='yellow'>Yellow</Option>
            <Option value='green'>Green</Option>
          </Select>
          <Select name="size" onChange={handleFilters} defaultValue="size">
            <Option value="size" disabled>Size</Option>
            <Option value="xs">XS</Option>
            <Option value="s">S</Option>
            <Option value="m">M</Option>
            <Option value="l">L</Option>
            <Option value="xl">XL</Option>
            <Option value="xxl">XXL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products</FilterText>
          <Select onChange={handleSort} defaultValue="newest">
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products category={category} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
