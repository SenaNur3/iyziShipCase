import React, { useState , useEffect} from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import "../app/toggle-button.css";
import Link from "next/link";
import "../app/sidebar.css";
import {
  LogoutOutlined,
  EnvironmentFilled,
  UnorderedListOutlined,
  LeftOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useRouter } from 'next/router'

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem(
    "",
    "grp",
     null,
    [
      getItem(
        (<a href="/adress-add" rel="noopener noreferrer">
        Yeni Adres Oluştur
      </a>),
        "1",
        <EnvironmentFilled style={{ fontSize: "14px", marginLeft: "48px" }} />
      ),
      getItem(
        (<a href="/adress-list" rel="noopener noreferrer">
        Adresleri Listele
      </a>),
        "2",
        <UnorderedListOutlined
          style={{ fontSize: "14px", marginLeft: "48px" }}
        />
      ),
    ],
    "group"
  ),
];

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 299px;
  height: 1107px;
  background-color: #ffffff;
  box-shadow: 1px 0px 1px #dedede;
  height: 700px;
`;
const Up = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justfy-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 120px;
`;
const IconMenu = styled(motion.div)`
  background-image: url("/images/menulogo.png");
  height: 67px;
  width: 174px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-left: 18px;
  margin-top: 20px;
`;
const Menuborder = styled(motion.div)`
  position: absolute;
  width: 5px;
  height: 44px;
  left: 0px;
  top: 233px;
  background: #107be6;
  border-radius: 0px 5px 5px 0px;
`;
const Down = styled(motion.div)`
display: flex;
flex-direction: row;
align-items: center;
justify-content:center;
font-family: Open Sans;
font-size: 12px;
font-weight: 600;
line-height: 20px;
letter-spacing: 0px;
text-align: left;
margin-top:300px;

`;
const Sidebar = (props) => {
 const router = useRouter();

  const onClick = (e) => {
  };

  const logOut = () => {
  const apiUrl = "https://api.iyziship.com/task/logout";

  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      task: "enable",
    }
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      router.push({
        pathname: '/login',
      })
    })
    .catch((error) => {
      console.log("Bir hata oluştu:", error);
      router.push({
        pathname: '/login',
      })
    });
  };
  
  return (
    <Container>
      <Up>
        <LeftOutlined
          style={{ marginTop: "37px", padding: "9px", marginLeft: "46px" }}
        />
        <IconMenu />
      </Up>
      <Menuborder className={ props.select == 2 ? "top-2" : ""} />
      <Menu
        onClick={onClick}
        style={{
          width: 256,
        }}
        defaultSelectedKeys={[props.select]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      ></Menu>
      <Down>
        <div onClick={logOut} style={{color:"#7C7C7A", cursor: "pointer"}}>
        <LogoutOutlined style={{marginRight: "19px",fontSize:"15px",color:"#7C7C7A" }}/> Çıkış
        </div>
     
      </Down>
   
    </Container>
  );
};

export default Sidebar;
