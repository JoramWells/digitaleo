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
    <>
      <div
        style={{
          backgroundColor: "rgb(40,44,53)",
          padding: "2rem",
          marginTop: "3rem",
        }}
      >
        <Row justify="space-around" align="middle">
          <Col>
            <Title level={4} style={{ color: "white" }}>
              Products
            </Title>
            <Text style={{ color: "white" }}>
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
              Nairobi, Egessa Villa
              <br />
              Email: jorammanoah1@gmail.com
              <br />
              Phone: +25479980846
            </Text>
          </Col>
          <Col>
            <Title level={4} style={{ color: "white", textAlign: "center" }}>
              Quick Links
            </Title>
            <Text style={{ color: "white" }}>
              FAQs <br />
              Blog <br />
              Careers
              <br />
              Donate
            </Text>
          </Col>
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
        </Row>
      </div>

      <Row
        justify="space-around"
        align="middle"
        style={{ backgroundColor: "#1a2228" }}
        padding="5rem"
      >
        <Text level={5} style={{ color: "white", padding: "1rem" }}>
          @2021 Digitaleo Company Ltd. All Rights Reserved |Privacy Policy|Terms
          & Condition
        </Text>
      </Row>
    </>
  );
}
