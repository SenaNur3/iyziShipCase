import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import "../app/toggle-button.css";

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
const ToglleButton = ({ buttonData }) => {
  const [data, setData] = useState(buttonData);
  const handleOnClick = (value) => {
  
    buttonData.map((item)=> {item.isActive = false})
    buttonData.map((item)=> {if(item.buttonName==value.buttonName){
        item.isActive=true
    }})
    value.isActive = true 
    setData(buttonData)
    console.log(data)
  };
  return (
    <Container>
      {data?.map((item) => (
        <ToggleBtn className={item.isActive ? "active-toggle " : "" } onClick={()=>handleOnClick(item)}>
          {item.buttonName}
        </ToggleBtn>
      ))}
    </Container>
  );
};

export default ToglleButton;
