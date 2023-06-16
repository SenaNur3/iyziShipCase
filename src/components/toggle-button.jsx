import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import "../app/toggle-button.css";
import Link from "next/link";

const Container = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 52px;
  width: 370px;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(175, 175, 175, 0.3);
  border-radius: 8px;
  margin-bottom: 32px;
`;

const ToggleBtn = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 177px;
  height: 41px;
  border-radius: 5px;
  color: #007fff;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  cursor: pointer;
  margin: 5px;
`;
const ToggleButton = ({ buttonData }) => {
  const [data, setData] = useState(buttonData);

  return (
    <Container>
      {data?.map((item) => (
        <Link key={item.url} href={item.url}>
          <ToggleBtn className={item.isActive ? "active-toggle" : "toggle"}>
            {item.buttonName}
          </ToggleBtn>
        </Link>
      ))}
    </Container>
  );
};

export default ToggleButton;
