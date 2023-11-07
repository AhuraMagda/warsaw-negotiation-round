import React from "react";
import Layout from "./components/Layout";
import ComponentHeader from "./components/ComponentHeader";
import ParticipationSteps from "./components/participation/ParticipationSteps";
import ParticipationTables from "./components/participation/ParticipationTables";
import "./scss/participations.css";

function Participation() {
  return (
    <Layout>
      <ComponentHeader>HOW TO PARTICIPATE</ComponentHeader>
      <main className="participation">
        <ParticipationSteps />
        <ParticipationTables />
      </main>
    </Layout>
  );
}

export default Participation;
