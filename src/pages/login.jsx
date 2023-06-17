import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Form, Input, Button } from "antd";
import "../app/login.css";
import ToggleButton from "../components/toggle-button";

const toggleData = [
  {
    isActive: true,
    buttonName: "Giriş Yap",
    url: "login",
  },
  {
    isActive: false,
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

const onFinish = (values) => {
  const apiUrl = "https://api.iyziship.com/task/login";

  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      task: "enable",
    },
    body: JSON.stringify(values),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log("Bir hata oluştu:", error);
    });
};


const Login = () => {
  const [form] = Form.useForm();

  return (
  <Container>
    <Icon></Icon>
    <ToggleButton buttonData={toggleData} />
    <Form
      name="login"
      labelCol={{
        span: 24,
      }}
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
      form={form}
      onFinish={onFinish}
    >
      <Flex>
        <Form.Item
          name="E-posta"
          className="mn-w"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <FormElement>
            <Label>E-Posta</Label>
            <Input placeholder="batuhan.kirma@iyziship.com" />
          </FormElement>
        </Form.Item>

        <Form.Item
          name="password"
          className="mn-w"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Label>Şifre</Label>
          <Input.Password placeholder="••••••••" />
        </Form.Item>
      </Flex>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Giriş Yap
        </Button>
      </Form.Item>
    </Form>
  </Container>
  );
};


export default Login;
