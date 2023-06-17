import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Checkbox, Form, Input } from "antd";
import "../app/login.css";
import "../app/address-add-card.css";
import { CopyOutlined } from "@ant-design/icons";


const BorderedCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 287px;
  height: auto;
  border: 1px solid #007fff;
  border-radius: 10px;
`;

const BoxItems = styled(motion.div)`
  display: flex;
  flex-direction: row;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 15px;
`;

const BoxTitle = styled(motion.div)`
  font-weight: bold;
  font-size: 10px;
  color: #333333;
  display: flex;
  align-items: start;
  width: 100%;
`;

const BoxResult = styled(motion.div)`
  font-weight: 200;
  font-size: 10px;
  color: #333333;
  display: flex;
  align-items: self-end;
  justify-content: flex-end;
  width: 100%;
  text-align: right;
  height: 100%;
`;



const AdresListCard = ({data}) => {
  
  useEffect(() => {
    const apiUrl = "https://api.iyziship.com/address/list";

    fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        task: "enable",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log("Bir hata oluştu:", error);
      });

  }, []);

    
  return (
    <BorderedCard>
      {data?.map((item, index) => (
        <BoxItems key={index} className={data?.length == index+1 ? 'last-item' : ""}>
          <BoxTitle>{item?.title}</BoxTitle>
          <BoxResult className={!item?.canCopy ? 'not-copy' : ""}>{item?.result}</BoxResult>
          {item.canCopy && <CopyOutlined className="icon-customize-copy" />}

        </BoxItems>
      ))}
    </BorderedCard>
  );
};


export default AdresListCard;
