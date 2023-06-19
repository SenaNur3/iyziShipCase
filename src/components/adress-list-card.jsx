import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Checkbox, Form, message } from "antd";
import "../app/login.css";
import "../app/address-add-card.css";
import { CopyOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import {CopyToClipboard} from 'react-copy-to-clipboard';

const BorderedCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 287px;
  height: auto;
  border: 1px solid #007fff;
  border-radius: 10px;
`;

const Item = styled(motion.div)`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

const BoxItems = styled(motion.div)`
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

const AdresListCard = () => {
  const router = useRouter();
  const [myToken, setToken] = useState([]);
  const [list, setList] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("user_information"));
    if (items) {
      console.log("here");
      setToken(items.access_token);
      console.log("items", myToken);
    } else {
      router.push({
        pathname: "/login",
      });
    }
  }, []);

  useEffect(() => {
    console.log("token: ", myToken);

    if (myToken.length) {
      const apiUrl = "https://api.iyziship.com/task/address";
      fetch(apiUrl, {
        method: "GET",
        headers: {
          task: "enable",
          task: "enable",

          Authorization: `Bearer ${myToken}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setList(data?.data);
          console.log(data?.data);
        })
        .catch((error) => {
          console.log("Bir hata oluştu:", error);
        });
    }
  }, [myToken]);

  const isCopy = () => {
    messageApi.open({
      type: 'success',
      content: 'Kopyalandı.',
    });
  };

  return (
    <BorderedCard>
        {contextHolder}
      {list?.map((item, index) => (
        <BoxItems
          key={index}
          className={list?.length == index + 1 ? "last-item" : ""}
        >
          <Item>
            <BoxTitle>Başlık</BoxTitle>
            <BoxResult>{item?.address_description}</BoxResult>
            <div />
          </Item>
          <Item>
            <BoxTitle>Adres</BoxTitle>
            <BoxResult className="not-copy">{item?.address1}</BoxResult>
            <CopyToClipboard text={item?.address1}>
              <CopyOutlined className="icon-customize-copy"  onClick={isCopy} />
            </CopyToClipboard>
          </Item>
          <Item>
            <BoxTitle>Posta Kodu</BoxTitle>
            <BoxResult>{item?.postal_code}</BoxResult>
            <CopyToClipboard text={item?.postal_code}>
              <CopyOutlined className="icon-customize-copy" onClick={isCopy} />
            </CopyToClipboard>
          </Item>
          <Item>
            <BoxTitle>Semt</BoxTitle>
            <BoxResult>{item?.state}</BoxResult>
            <CopyToClipboard text={item?.state}>
              <CopyOutlined className="icon-customize-copy" onClick={isCopy} />
            </CopyToClipboard>
          </Item>
          <Item>
            <BoxTitle>Şehir</BoxTitle>
            <BoxResult>{item?.city}</BoxResult>
            <CopyToClipboard text={item?.state}>
              <CopyOutlined className="icon-customize-copy" onClick={isCopy} />
            </CopyToClipboard>
          </Item>
        </BoxItems>
      ))}
    </BorderedCard>
  );
};

export default AdresListCard;
