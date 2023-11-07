import React from "react";
import Layout from "./components/Layout";
import ComponentHeader from "./components/ComponentHeader";
import ParticipationSteps from "./components/participation/ParticipationSteps";
import ParticipationScenarios from "./components/participation/ParticipationScenarios";
import "./scss/participations.css";

function Participation() {
  return (
    <Layout>
      <ComponentHeader>HOW TO PARTICIPATE</ComponentHeader>
      <main className="participation">
        <ParticipationSteps />
        <ParticipationScenarios />
      </main>
    </Layout>
  );
}

export default Participation;
