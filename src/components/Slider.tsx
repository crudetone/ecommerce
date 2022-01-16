import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { sliderItems } from "../data";
import { useState } from "react";
import styled from "styled-components";

enum ARROW_TYPE {
  LEFT_ARROW = "LEFT_ARROW",
  RIGHT_ARROW = "RIGHT_ARROW",
}

interface ArrowProps {
  direction: string;
}

interface WrapperProps {
  sliderIndex: number;
}

const Container = styled.div`
  background-color: #333;
  display: flex;
  height: 100vh;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

const Arrow = styled.div<ArrowProps>`
  align-items: center;
  background-color: #fff7f7;
  border-radius: 50%;
  bottom: 0;
  cursor: pointer;
  display: flex;
  height: 50px;
  justify-content: center;
  left: ${(props: any) => props.direction === "left" && "10px"};
  margin: auto;
  opacity: 0.5;
  position: absolute;
  right: ${(props: any) => props.direction === "right" && "10px"};
  top: 0;
  width: 50px;
  z-index: 2;
`;

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  height: 100%;
  transform: translateX(${(props: any) => props.sliderIndex * -100}vw);
  transition: all 1.5s ease;
`;

const Slide = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  position: relative;
  width: 100vw;
`;

const ImgContainer = styled.div`
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: cover;
  flex: 1;
  width: 100%;
`;

const InfoContainer = styled.div`
  padding: 50px;
  position: absolute;
  right: 100px;
`;

const Image = styled.img`
  /* height: 80%; */
`;

const Title = styled.h1`
  color: #fff;
  font-size: 70px;
  text-transform: uppercase;
`;

const Desc = styled.p`
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  margin: 50px 0;
  text-transform: uppercase;
`;

const Button = styled.button`
  background-color: transparent;
  border: 1px solid #fff;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  padding: 10px;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (arrowType: ARROW_TYPE) => {
    if (arrowType === ARROW_TYPE.LEFT_ARROW) {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
    }
    if (arrowType === ARROW_TYPE.RIGHT_ARROW) {
      setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow
        direction="left"
        onClick={() => handleClick(ARROW_TYPE.LEFT_ARROW)}
      >
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper sliderIndex={slideIndex}>
        {sliderItems.map((item: any, index: number) => (
          <Slide key={index}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>Shop now</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow
        direction="right"
        onClick={() => handleClick(ARROW_TYPE.RIGHT_ARROW)}
      >
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
