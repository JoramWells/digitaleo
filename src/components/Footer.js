import React from "react";
import { Row, Col, Typography } from "antd";
import {
  FacebookFilled,
  LinkedinFilled,
  TwitterSquareFilled,
  YoutubeFilled,
} from "@ant-design/icons";

const { Title, Text } = Typography;

export default function Footer() {
  return (
    <div style={{ backgroundColor: "rgb(40,44,53)" }}>
      <div className="curved">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,288L48,282.7C96,277,192,267,288,224C384,181,480,107,576,90.7C672,75,768,117,864,133.3C960,149,1056,139,1152,154.7C1248,171,1344,213,1392,234.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
        <Row justify="space-around" align="middle">
          <Col>
            <Title level={4} style={{ color: "white", textAlign: "center" }}>
              Social Media
            </Title>
            <FacebookFilled
              style={{ fontSize: "2rem", margin: "1rem", color: "#007acc" }}
            />
            <TwitterSquareFilled
              style={{ fontSize: "2rem", margin: "1rem", color: "#00b8e6" }}
            />
            <YoutubeFilled
              style={{ fontSize: "2rem", margin: "1rem", color: "#ff4d4d" }}
            />
            <LinkedinFilled
              style={{ fontSize: "2rem", margin: "1rem", color: "#3366ff" }}
            />
          </Col>
          <Col>
            <Title level={4} style={{ color: "white" }}>
              Products
            </Title>
            <Text style={{ color: "white" }}>
              PC <br />
              laptop
              <br />
              keyboard
              <br />
              Graphic design
              <br />
              Web design
              <br />
              App development
              <br />
              Online courses
              <br />
              Bootcamp
            </Text>
          </Col>
          <Col>
            <Title level={4} style={{ color: "white" }}>
              Address
            </Title>
            <Text style={{ color: "white" }}>
              Egessa Villa
              <br />
              jorammanoah1@gmail.com
              <br />
              +25479980846
            </Text>
          </Col>
        </Row>
      </div>
    </div>
  );
}
