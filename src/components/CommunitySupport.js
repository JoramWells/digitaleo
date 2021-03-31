import React from "react";
import { Typography, Col, Carousel, Row } from "antd";

const { Title, Text } = Typography;

export default function CommunitySupport(props) {
  return (
    <div style={{ backgroundColor: "rgb(40,44,53)", padding: "2rem" }}>
      <Title
        level={2}
        style={{
          textAlign: "center",
          color: "#E75480",
          fontFamily: "Stylish,sans-serif",
        }}
      >
        Community support
      </Title>
      <div className="curved" style={{ textAlign: "center" }}>
        <Row justify="center" align="middle">
          <Col md={16}>
            <Text
              style={{ fontFamily: "Montserrat,sans-serif", color: "white" }}
            >
              As a way of giving back to the community, we offer online free
              courses in software development. Interested people can take online
              courses for free.
              <br />
              We also mentored and encorouged students in primary, secondary and
              colledge to be part of technology, and fosterd the establishment
              of STEM in secondary schools.
            </Text>
          </Col>
        </Row>
        <Row
          justify="space-around"
          align="middle"
          style={{ marginTop: "20px" }}
        >
          <Col>
            <Carousel autoplay style={{ width: "200px" }}>
              {props.renderThings}
            </Carousel>
          </Col>
        </Row>
        <br />
      </div>
    </div>
  );
}
