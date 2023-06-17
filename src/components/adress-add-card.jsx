import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Checkbox, Form, Input } from "antd";
import "../app/login.css";
import "../app/address-add-card.css";
import ToggleButton from "../components/toggle-button";
import { CheckOutlined } from "@ant-design/icons";

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 1101px;
  height: 548px;
  margin-left: 19px;
  margin-top: 21px;
  margin-right: 21px;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const FormElement = styled(motion.div)`
  position: relative;
`;
const Icon = styled(motion.div)`
  background-image: url("/images/iconIyiziShip.png");
  background-repeat: no-repeat;
  height: 88px;
  width: 248px;
  margin-bottom: 36px;
`;
const Label = styled(motion.div)`
  position: absolute;
  left: 13px;
  top: -13px;
  background-color: #fff;
  color: #007fff;
  z-index: 1;
`;
const Flex = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const RecordButton = styled(motion.div)`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #fff;
  background: #007fff;
  border-radius: 10px;
  width: 102px;
  height: 40px;
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: 0.02em;
`;
const Row = styled(motion.div)`
  display: flex;
  flex-direction: row;
`;
const AdresAdd = () => (
  <Container>
    <Form
      name="basic"
      labelCol={{
        span: 24,
      }}
      wrapperCol={{
        span: 24,
      }}
      initialValues={{
        remember: true,
      }}
      autoComplete="off"
    >
      <Flex>
        <Form.Item
          name="title"
          className="mn-w"
          style={{
            width: '50%',
            height: '50px',
            marginLeft: '20px',
            marginTop: '68px',
            marginBottom: '40px'
          }}
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <FormElement>
            <Label>Adres Başlığı</Label>
            <Input placeholder="Adınız Soyadınız" />
          </FormElement>
        </Form.Item>

        <Flex>
        <Form.Item
          name="line-1"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          style={{
            marginBottom: '40px',
            width: '95%',
            height: '50px',
            marginLeft: '20px'
          }}
        >
          <Label>Adres Satırı 1</Label>
          <Input style={{ width: '100%' }} className="wide" placeholder="Adresiniz" />
        </Form.Item>
        </Flex>
        <Row>
          <Form.Item
            name="country"
            className="mn-w"
            style={{
                width:"44%",
                marginLeft: '20px',
                marginBottom: '40px'
            }}
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Label>Ülke 1</Label>
            <Input placeholder="Turkey" />
          </Form.Item>
          <Form.Item
            name="country"
            className="mn-w"
            style={{
                width:"44.50%",
                marginLeft:"70px",
            }}
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Label>Posta Kodu</Label>
            <Input placeholder="Posta Kodunuz" />
          </Form.Item>
        </Row>
        <Row>
          <Form.Item
            name="town"
            className="mr"
            style={{
              width: "100%",
              marginLeft: '20px'
            }}
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <FormElement>
              <Label>Semt/Eyalet</Label>
              <Input className="input-row" placeholder="Semt/Eyalet" />
            </FormElement>
          </Form.Item>
          <Form.Item
            name="neighborhood"
            className="mr"
            style={{
              width: "100%",
            }}
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <FormElement>
              <Label>İlçe</Label>
              <Input placeholder="İlçe" />
            </FormElement>
          </Form.Item>
          <Form.Item
            name="city"
            className=""
            style={{
              width: "100%",
              marginRight: "35px"
            }}
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <FormElement>
              <Label>Şehir</Label>
              <Input placeholder="Şehir" />
            </FormElement>
          </Form.Item>
        </Row>
      </Flex>
      <Form.Item className="flex-end" style={{ marginRight: "33px", marginTop: "40px" }}>
        <RecordButton>
          <CheckOutlined style={{ marginRight: "12px" }} />
          Kaydet
        </RecordButton>
      </Form.Item>
    </Form>
  </Container>
);

export default AdresAdd;
