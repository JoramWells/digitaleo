import React from "react";
import Carousel from "react-multi-carousel";
import { Typography } from "antd";

const { Title } = Typography;

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Products(props) {
  return (
    <>
      <Title
        level={2}
        style={{
          textAlign: "center",
          fontFamily: "Stylish,sans-serif",
          color: "#E75480",
        }}
      >
        Our products
      </Title>
      <Title level={5} style={{ textAlign: "center" }}>
        Some of the products that we sale
      </Title>

      <div style={{ margin: "5rem" }}>
        <Carousel autoPlay={true} infinite={true} responsive={responsive}>
          {props.renderCarousel}
        </Carousel>
      </div>
    </>
  );
}
