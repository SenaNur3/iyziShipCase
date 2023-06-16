import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Checkbox, Form, Input } from "antd";
import "../app/register.css";
import ToggleButton from "../components/toggle-button";

const toggleData = [
  {
    isActive: false,
    buttonName: "Giriş Yap",
    url: "login",
  },
  {
    isActive: true,
    buttonName: "Kayıt Ol",
    url: "register",
  },
];

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
`;

const FormElement = styled(motion.div)`
  position: relative;
`;
const Row = styled(motion.div)`
  display: flex;
  flex-direction: row;
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
const LoginButton = styled(motion.div)`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #fff;
  background: #007fff;
  border-radius: 10px;
  height: 43px;
  width: 100%;
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: 0.02em;
`;
const Register = () => (
  <Container>
    <Icon></Icon>
    <ToggleButton buttonData={toggleData} />
    <Form
      name="basic"
      wrapperCol={{
        span: 24,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      autoComplete="off"
    >
      <Row>
        <Form.Item
          name="name"
          className="mr-5"
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
            <Label>Adınız</Label>
            <Input className="input-row" />
          </FormElement>
        </Form.Item>
        <Form.Item
          name="surname"
          className="ml-5"
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
            <Label>Soyadınız</Label>
            <Input />
          </FormElement>
        </Form.Item>
      </Row>
      <Form.Item
        name="E-posta"
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
          <Label>E-Posta Adresiniz</Label>
          <Input />
        </FormElement>
      </Form.Item>
      <Row>
        <Form.Item
          name="password"
          className="mr-5"

          style={{
            width: "100%",
          }}
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Label>Şifre</Label>
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="password-confirm"
          className="ml-5"

          style={{
            width: "100%",
          }}
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Label>Şifre Tekrarı</Label>
          <Input.Password />
        </Form.Item>
      </Row>
      <Form.Item>
        <LoginButton>Kayıt Ol</LoginButton>
      </Form.Item>
    </Form>
  </Container>
);

export default Register;
