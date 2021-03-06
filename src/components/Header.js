import React from "react";
import { Typography, Row, Col, Button } from "antd";
const { Title, Text } = Typography;

export default function Header() {
  return (
    <>
      <Row
        style={{ marginTop: "1rem", height: "200px" }}
        justify="space-around"
        align="middle"
      >
        <Col>
          <Title
            level={6}
            style={{
              textAlign: "center",
              fontFamily: "Stylish",
              color: "#ff6666",
            }}
          >
            Digital Leo Interactive
          </Title>
          <Text style={{ color: "#007399", fontFamily: "Montserrat" }}>
            An great solution for enterprise-level software products. Create an
            efficient and enjoyable work experience by using our software
            products.
          </Text>{" "}
          <br />
          <Button
            size="large"
            style={{
              margin: "auto",
              display: "block",
              marginTop: "1rem",
              borderRadius: "500px",
            }}
          >
            LEARN MORE
          </Button>
        </Col>
      </Row>
      <div className="curved">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,96L48,80C96,64,192,32,288,53.3C384,75,480,149,576,149.3C672,149,768,75,864,42.7C960,11,1056,21,1152,37.3C1248,53,1344,75,1392,85.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </>
  );
}
