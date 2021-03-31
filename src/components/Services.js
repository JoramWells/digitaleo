import React from "react";
import { Typography, Row, Col } from "antd";
import ReactPlayer from "react-player/lazy";

const { Text, Title } = Typography;

export default function Services(props) {
  return (
    <div style={{ backgroundColor: "rgb(40,44,53)", paddingTop: "2rem" }}>
      <Title
        level={1}
        style={{
          textAlign: "center",
          fontFamily: "Stylish",
          color: "#E75480",
        }}
      >
        Online courses
      </Title>
      <Row justify="space-around" align="middle">
        <Col>
          <Text style={{ fontFamily: "Montserrat,sans-serif", color: "white" }}>
            We have online courses with video illustrations and detailed code in
            :- <br />
            javascript, python where we teach our students to create modern web
            using new technologies.
            <br />
            We also organize weekly bootcamps and hackerthons
          </Text>
        </Col>
      </Row>
      <Row justify="space-around" align="middle" style={{ padding: "1rem" }}>
        <Col>
          <ReactPlayer
            controls={false}
            light={true}
            fallback={<div>Loading...</div>}
            url="https://youtu.be/ZPGYY9N6dE4"
          />
        </Col>
      </Row>
    </div>
  );
}
