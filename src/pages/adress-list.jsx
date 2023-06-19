import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import "../app/login.css";
import Sidebar from "../components/sidebar";
import AdresListCard from "../components/adress-list-card";
const Main = styled(motion.div)`
  display: flex;
  width: 100%;
`;
const Container = styled(motion.div)`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-left: 19px;
  margin-top: 21px;
  margin-right: 21px;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;
const CardBoxes = styled(motion.div)`
  display: flex;
  height: 190px;
  margin-left: 80px;
  margin-top: 30px;
`;

const AdressList = () => {
  return (
    <Main>
      <Sidebar select={"2"} />
      <Container>
        <CardBoxes>
            <AdresListCard />
        </CardBoxes>
      </Container>
    </Main>
  );
};

export default AdressList;
