import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Checkbox, Form, Input } from "antd";
import "../app/login.css"
import ToggleButton from "../components/toggle-button"

const toggleData = [{
    isActive: true,
    buttonName:"Giriş Yap",
    url:""
},
{
    isActive: false,
    buttonName:"Kayıt Ol",
    url:""
}

]

const Container = styled(motion.div)`
  display: flex;
  flex-direction:  column;
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
 margin-bottom:36px;
`;
const Label = styled(motion.div)`
position: absolute;
left: 13px;
top: -13px;
background-color: #fff;
color: #007FFF;
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
  width: 360px;
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: 0.02em;
`;
const Login = () => (
  <Container>
    <Icon ></Icon>
    <ToggleButton buttonData={toggleData}/>
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      autoComplete="off"
    >
      <Form.Item
        name="username"
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

      <Form.Item
       
      >
        <LoginButton>
          Giriş Yap
        </LoginButton>
      </Form.Item>
    </Form>
  </Container>
);

export default Login;
