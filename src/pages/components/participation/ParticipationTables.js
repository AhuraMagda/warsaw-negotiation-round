import React from "react";
import { Link } from "gatsby";

export default function ParticipationTables() {
  return (
    <>
      <div className="participation__tables participation__tables__scenarios">
        <h2>SCENARIOS</h2>
        <Link>
          SOME SCENARIO
        </Link>
        <Link>
          SOME SCENARIO
        </Link>
        <Link>
          SOME SCENARIO
        </Link>
        <Link>
          SOME SCENARIO
        </Link>
      </div>

      <div className="participation__tables participation__tables__form">
        <h2>PARTICIPATION FORM</h2>
        <Link>
          download form
        </Link>
      </div>

      <div className="participation__tables participation__tables__scenarios">
        <h2>TERMS AND CONDITIONS</h2>
        <Link>
          download terms and conditions
        </Link>
      </div>
    </>
  );
}
