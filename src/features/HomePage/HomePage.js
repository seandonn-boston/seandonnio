import React from "react";

import { home } from "./HomePage.scss";

import ResumePdf from "../../global/assets/pdf/sean_donnellan_resume.pdf";

export default function HomePage() {
  return (
    <div className={home}>
      <h2>
        Hello, my name is Sean Donnellan, welcome to my portfolio website!
      </h2>
      <p>
        As you can see, this website is under construction still, however I am
        actively looking for work as a Front End Software Engineer in Boston and
        I encourage hiring managers to {/* TODO create a Link component */}
        <a href={ResumePdf} target="_blank">
          take a look at my resume
        </a>{" "}
        and other software engineers to{" "}
        <a href="https://github.com/seandonn-boston/seandonnio" target="_blank">
          peak under the hood in my github account
        </a>
        . I'm actively learning and including many modern frameworks and
        libraries and I will continue advancing my skillset and apply them to
        this website. Check back soon for the latest deployments.
      </p>
    </div>
  );
}
