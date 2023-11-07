import React from "react";
import Layout from "./components/Layout";
import examplePhoto from "../images/squirrel.jpg";
import img1 from "../images/about-us-images/aboutus-students.jpg";
import img2 from "../images/about-us-images/aboutus-negocjator.png";
import img3 from "../images/about-us-images/aboutus-participants.jpg";
import img4 from "../images/about-us-images/aboutus-venues.jpg";

import ComponentHeader from "./components/ComponentHeader";

function Aboutus() {
  return (
    <Layout>
      <ComponentHeader>
        FIND OUT MORE ABOUT THE WARSAW NEGOTIATION ROUND
      </ComponentHeader>
      <main className="about-us">
        <article className="about-us__article">
          <img src={img1} />
          <div className="about-us__article__text">
            <h3>FOR STUDENTS FROM STUDENTS</h3>
            <p>
              The Warsaw Negotiation Round is a prestigious international
              negotiation tournament for students who are outstanding
              representatives of the world's top business and law schools.
              Respected foreign experts from renowned institutions such as
              Harvard Business School and Oxford University give lectures and
              evaluate the negotiation styles of participants throughout the
              event. The tournament is preceded by a conference hosting esteemed
              world-class negotiation experts.
            </p>
          </div>
        </article>
        <article className="about-us__article">
          <div className="about-us__article__text">
            <h3>SKN NEGOCJATOR</h3>
            <p>
              SKN Negocjator is an association with over twenty years of
              tradition, operating at the Warsaw School of Economics. Its goal
              is to disseminate the art of negotiation and knowledge of its
              techniques. The association focuses on the holistic development of
              communication competence.
            </p>
            <p>
              Warsaw Negotiation Round is entirely created by committed students
              belonging to SKN Negocjator. Successful implementation of the
              tournament requires the involvement of about 40 people. Project
              members work in key operational departments, including participant
              contact, expert contact, venues, corporate communications,
              logistics, case scenario development, promotion and
              administration.
            </p>
          </div>
          <img src={img2} />
        </article>

        <article className="about-us__article">
          <img src={img3} />
          <div className="about-us__article__text">
            <h3>PARTICIPANTS & EXPERTS </h3>
            <p>
              The Warsaw Negotiation Round (WNR) tournament is proud to welcome
              participants from the most respected business and law schools
              around the world. In past editions, we have had the honor of
              hosting representatives from all continents, (with the exception
              of Antarctica). This has given the competition a unique level of
              international exposure.
            </p>
            <p>
              World-class experts in the field of negotiation honor us with
              their presence every year. During the finals, they form an
              esteemed panel of judges, contributing to the importance and
              prestige of the event. is attended by students from the world's
              top business and law schools. The tournament had participants
              coming from every continent in the world (except Antarctica)!
              Participants are judged by prestigious experts during the
              tournament.
            </p>
          </div>
        </article>

        <article className="about-us__article">
          <div className="about-us__article__text">
            <h3>VENUES</h3>
            <p>
              The Warsaw Negotiation Round is an opportunity for our guests to
              get to know Poland, visit Warsaw and integrate with each other.
              The negotiation rounds take place in the most prestigious venues
              in Warsaw, such as the Senate of the Republic of Poland, the
              Warsaw Stock Exchange, the Palace of Culture and Science and the
              Warsaw School of Economics.
            </p>
          </div>
          <img src={img4} />
        </article>
      </main>
    </Layout>
  );
}

export default Aboutus;
