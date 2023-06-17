import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Form, Input, Button } from "antd";
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

const PassContainer = styled(motion.div)`
  position: relative;
`;
const MainPass = styled(motion.div)`
  display: flex;
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
const ButtonLogin = styled(motion.Button)`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #fff;
  background: #007fff;
  border-radius: 10px;
  border-color: transparent;
  height: 43px;
  width: 100%;
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: 0.02em;
  cursor: pointer;
`;
const Register = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    const apiUrl = "https://api.iyziship.com/task/register";

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

  return (
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
        form={form}
        onFinish={onFinish}
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
          name="email"
          style={{
            width: "100%",
          }}
          rules={[
            {
              required: true,
              type: "email",
            },
          ]}
        >
          <FormElement>
            <Label>E-Posta Adresiniz</Label>
            <Input />
          </FormElement>
        </Form.Item>

        <MainPass>
          <PassContainer>
            <Label>Şifre</Label>

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
              hasFeedback
            >
              <Input.Password />
            </Form.Item>
          </PassContainer>

          <PassContainer>
            <Label>Şifre Tekrarı</Label>

            <Form.Item
              name="password_confirmation"
              className="ml-5"
              style={{
                width: "100%",
              }}
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The new password that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
          </PassContainer>
        </MainPass>

        <Form.Item>
          <ButtonLogin type="primary" htmlType="submit">
            Kayıt Ol
          </ButtonLogin>
        </Form.Item>
      </Form>
    </Container>
  );
};

export default Register;
