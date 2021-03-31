import React from "react";
import { Col, Row, Typography, Card } from "antd";

const { Text, Title } = Typography;

export default function About() {
  return (
    <>
      <Title
        level={1}
        style={{
          textAlign: "center",
          fontFamily: "Stylish",
          color: "#E75480",
        }}
      >
        About us
      </Title>
      <Row justify="space-around" align="middle">
        <Col md={12}>
          <Text style={{ fontFamily: "Montserrat,sans-serif" }}>
            DigitaLeao Interactive is a Software company that deals in
            development of interactive mobile and web app applications. <br />{" "}
            We also do CCTV installation and data recovery. We are a main branch
            of other small companies; VicTech, Sylcate, LukJuds, that deal in
            design, printer repair, pc repair and t-shirt printing respectively.
          </Text>
        </Col>
      </Row>

      <Row justify="space-around" align="middle" style={{ height: "450px" }}>
        <Col>
          <Title level={3} style={{ fontFamily: "Stylish,sans-serif" }}>
            Software Development
          </Title>
          <Card>
            <Text fontFamily={{ fontFamily: "Montserrat, sans-serif" }}>
              Web development
            </Text>
            <br />
            Custom Software Development
            <br />
            Mobile Application Design and Development
            <br />
            Data Storage and Recovery
            <br />
            Software as a Service applications
          </Card>
        </Col>
        <Col>
          <Title level={3}>Others</Title>
          <Card>
            Computer Sales and Repair <br />
            ICT employee training
            <br />
            CCTV installation <br />
            Networking
            <br />
            Digital Marketing
          </Card>
        </Col>
      </Row>
    </>
  );
}
