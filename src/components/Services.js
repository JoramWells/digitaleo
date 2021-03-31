import React from "react";
import { Typography, Row, Button } from "antd";

const { Title, Text } = Typography;

export default function Services(props) {
  return (
    <div style={{ backgroundColor: "teal" }}>
      <Title
        level={2}
        style={{
          textAlign: "center",
          fontFamily: "Stylish,sans-serif",
          color: "#E75480",
        }}
      >
        Services
      </Title>
      <Row justify="space-around">
        <Text style={{ fontFamily: "Montserrat,sans-serif", color: "white" }}>
          Services that we offer
          <br />
          Networking
          <br />
          CCTV installation
          <br />
          Computer Repair
          <br />
          Printer Repair
          <br />
          All these at amazingly affordable prices
        </Text>
      </Row>
      <Row justify="space-around" style={{ margin: "2rem" }}>
        <Button>Learn more</Button>
      </Row>

      <Row
        justify="space-around"
        align="middle"
        style={{ padding: "2rem", margin: "2rem" }}
      >
        {props.renderServices}
      </Row>
    </div>
  );
}
