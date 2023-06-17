import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Checkbox, Form, Input } from "antd";
import "../app/login.css";
import Sidebar from "../components/sidebar";
import AdresAdd from "../components/adress-add-card";

const Container = styled(motion.div)`
  display: flex;
  flex-direction: row;
`;

const AdressList = () => {
  return (
    <Container>
      <Sidebar select={"2"} />

    </Container>
  );
};

export default AdressList;
