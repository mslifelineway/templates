import React from "react";
import { About, Contact, Header, Services } from "../components";
import Layout from "../components/Layout";

const Dashboard = () => {
  return (
    <Layout>
      <Header />
      <About />
      <Services />
      <Contact />
    </Layout>
  );
};

export default Dashboard;
