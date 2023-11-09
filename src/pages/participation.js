import React from "react";
import Layout from "../components/Layout";
import PagesHeader from "../components/PagesHeader";
import ParticipationSteps from "../components/participation/ParticipationSteps";
import ParticipationTables from "../components/participation/ParticipationTables";
import "../scss/participations-scss/participations.css";

function Participation({ data }) {
  return (
    <Layout>
      <PagesHeader>HOW TO PARTICIPATE</PagesHeader>
      <main className="participation">
        <ParticipationSteps />
        <ParticipationTables />
      </main>
    </Layout>
  );
}

export default Participation;
