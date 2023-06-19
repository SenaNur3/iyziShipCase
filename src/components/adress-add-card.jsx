import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Form, Input } from "antd";
import "../app/login.css";
import "../app/address-add-card.css";
import { CheckOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

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
const RecordButton = styled(motion.button)`
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

const AdresAdd = () => {
  const [form] = Form.useForm();
  const [myToken, setToken] = useState([]);

  const router = useRouter();

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

  const add = (values) => {
    const apiUrl = "https://api.iyziship.com/task/address/add";

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        task: "enable",
        'Authorization': `Bearer ${myToken}`,
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
      <Form
        name="basic"
        labelCol={{
          span: 24,
        }}
        wrapperCol={{
          span: 24,
        }}
        defaultValue={{
          remember: true,
        }}
        autoComplete="off"
        form={form}
        onFinish={add}
      >
        <Flex>
          <Form.Item
            name="address_description"
            className="mn-w"
            style={{
              width: "50%",
              height: "50px",
              marginLeft: "20px",
              marginTop: "68px",
              marginBottom: "40px",
            }}
          >
            <FormElement>
              <Label>Adres Başlığı</Label>
              <Input
                            rules={[{ required: true, min: 6 }]}

                placeholder="Adınız Soyadınız"
              />
            </FormElement>
          </Form.Item>

          <Flex>
            <Form.Item
              name="address1"
              style={{
                marginBottom: "40px",
                width: "95%",
                height: "50px",
                marginLeft: "20px",
              }}
            >
              <FormElement>
                <Label>Adres Satırı 1</Label>
                <Input
                  style={{ width: "100%" }}
                  rules={[{ required: true, min: 6 }]}

                  className="wide"
                  placeholder="Adresiniz"
                />
              </FormElement>
            </Form.Item>
          </Flex>
          <Row>
            <Form.Item
              name="country"
              className="mn-w"
              rules={[{ required: true, max: 2 }]}

              style={{
                width: "44%",
                marginLeft: "20px",
                marginBottom: "40px",
              }}
            >
              <FormElement>
                <Label>Ülke 1</Label>
                <Input placeholder="Turkey" />
              </FormElement>
            </Form.Item>
          </Row>
          <Row>
            <Form.Item
              name="town"
              className="mr"
              rules={[{ required: true }]}
              style={{
                width: "100%",
                marginLeft: "20px",
              }}
            >
              <FormElement>
                <Label>Semt/Eyalet</Label>
                <Input
                  className="input-row"
                  placeholder="Semt/Eyalet"
                />
              </FormElement>
            </Form.Item>

            <Form.Item
              name="state"
              className="mr"
              rules={[{ required: true }]}
              style={{
                width: "100%",
              }}
            >
              <FormElement>
                <Label>İlçe</Label>
                <Input  />
              </FormElement>
            </Form.Item>



            <Form.Item
              name="city"
              className=""
              rules={[{ required: true }]}

              style={{
                width: "100%",
                marginRight: "35px",
              }}
            >
              <FormElement>
                <Label>Şehir</Label>
                <Input placeholder="Şehir" />
              </FormElement>
            </Form.Item>

            <Form.Item
              name="postal_code"
              className=""

              style={{
                width: "100%",
                marginRight: "35px",
              }}
            >
              <FormElement>
                <Label>Posta Kodu</Label>
                <Input placeholder="Posta Kodu" />
              </FormElement>
            </Form.Item>
          </Row>
        </Flex>
        <Form.Item
          className="flex-end"
          style={{ marginRight: "33px", marginTop: "40px" }}
        >
          <RecordButton type="primary" htmlType="submit">
            <CheckOutlined style={{ marginRight: "12px" }} />
            Kaydet
          </RecordButton>
        </Form.Item>
      </Form>
    </Container>
  );
};

export default AdresAdd;
