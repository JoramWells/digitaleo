import React from "react";
import { Avatar, Menu } from "antd";
import unable from "../unable.jpeg";
import Header from "./Header";

export default function Navbar() {
  return (
    <div style={{ backgroundColor: "rgb(40,44,53)", paddingBottom: "0" }}>
      <nav
        className="menu"
        style={{
          backgroundColor: "rgb(40,44,53)",
          position: "sticky",
          top: "0px",
          zIndex: "1px",
        }}
      >
        <div className="menu__logo" style={{ paddingTop: "0.5rem" }}>
          <Avatar src={unable} />
        </div>
        <div>
          <div className="menu__container">
            <div className="menu__left">
              <Menu
                mode="horizontal"
                style={{
                  backgroundColor: "rgb(40,44,53)",
                  zIndex: "1px",
                  borderBottom: "0",
                }}
              >
                <Menu.Item style={{ color: "white" }}>Home</Menu.Item>
                <Menu.Item style={{ color: "white" }}>About us</Menu.Item>
              </Menu>
            </div>
          </div>
        </div>
      </nav>
      <Header />
    </div>
  );
}
