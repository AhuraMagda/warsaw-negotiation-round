import React from "react";
import scenario1 from "../../files/scenarios/WNR-2019-1989-sad-Polish-reality.pdf"
import scenario2 from "../../files/scenarios/WNR-2020-Restoring-the-glory.pdf"
import scenario3 from "../../files/scenarios/WNR-2022-Hot-Seat-The-Greek-Questioners-Side.pdf"
import scenario4 from "../../files/scenarios/WNR-2022-In-the-MetaVerse-of-Madness.pdf"
import scenario5 from "../../files/scenarios/WNR-2023-A-velvet-Marriage-or-a-Velvet-Divorce.pdf"
import scenario6 from "../../files/scenarios/WNR-2023-The-Endgame.pdf"
import terms from "../../files/WNR-Terms-and-Conditions-2024.pdf"

export default function ParticipationTables() {
  return (
    <>
      <div className="participation__tables participation__tables__form">
        <h2>PARTICIPATION FORM</h2>
        <p>Complete the application form to participate in the tournament</p>
        <a href="https://docs.google.com/forms/d/16jmCTSy2CG1sgLbSzmWD2ewAIZHo6PtzGydDZS4rdPQ/viewform?edit_requested=true" target="_blank" rel="noreferrer">Proceed to the survey</a>
      </div>

      <div className="participation__tables participation__tables__scenarios">
        <h2>SCENARIOS</h2>
        <p>Examples of scripts from last year's editions written by members of SKN Negotiator.</p>
        <a href={scenario6} download="WNR-2023-The-Endgame.pdf">WNR 2023 - The Endgame</a>
        <a href={scenario5} download="WNR-2023-A-velvet-Marriage-or-a-Velvet-Divorce.pdf">WNR 2023 - A Velvet Marriage or a Velvet Divorce</a>
        <a href={scenario4} download="WNR-2022-In-the-MetaVerse-of-Madness.pdf">WNR 2022 - In the MetaVerse of Madness</a>
        <a href={scenario3} download="WNR-2022-Hot-Seat-The-Greek-Questioners-Side.pdf">WNR 2022 - Hot Seat</a>
        <a href={scenario2} download="WNR-2020-Restoring-the-glory.pdf">WNR 2020 - Restoring the Glory</a>
        <a href={scenario1} download="WNR-2019-1989-sad-Polish-reality.pdf">WNR 2019 - 1989 Sad Polish Reality</a>
      </div>

      <div className="participation__tables participation__tables__scenarios">
        <h2>TERMS AND CONDITIONS</h2>
        <p>Terms and conditions valid during WNR 2024</p>
        <a href={terms} download="WNR-Terms-and-Conditions-2024.pdf">Terms and Conditions</a>
      </div>
    </>
  );
}
