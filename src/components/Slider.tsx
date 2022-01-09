import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from '../data';

enum ARROW_TYPE {
  LEFT_ARROW = 'LEFT_ARROW',
  RIGHT_ARROW = 'RIGHT_ARROW',
}

interface ArrowProps {
  direction: string;
}

interface WrapperProps {
  sliderIndex: number;
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
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
  height: 100%;
  display: flex;
  transform: translateX(${(props: any) => props.sliderIndex * -100}vw);
`;

const Slide = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  width: 100vw;
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
  background-size: cover;
  background-position: 0 0;
  background-repeat: no-repeat;
  width: 50%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Image = styled.img`
  height: 80%;
`;

const Title = styled.h1`
text-transform: uppercase;
font-size: 70px;
color: #fff;
`;

const Desc = styled.p`
text-transform: uppercase;
margin: 50px 0;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
color: #fff;
`;

const Button = styled.button`
border: 1px solid #fff;
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
color: #fff;
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
  }

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick(ARROW_TYPE.LEFT_ARROW)}>
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
      <Arrow direction="right" onClick={() => handleClick(ARROW_TYPE.RIGHT_ARROW)}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
