import React from "react";
import { Link as RouterLink } from "react-router-dom";

import { Header } from "../../global/ui/Header/Header";
import { Link } from "../../global/ui/Link/Link";

export const HomePage = () => {
  return (
    <>
      <Header title="Hello" />
      <p>
        My name is Sean Donnellan, welcome to my portfolio website. I am
        currently searching for my next front end software engineering role in
        the Boston, MA area. Please take a moment to examine my{" "}
        <RouterLink to="/portfolio">portfolio</RouterLink>, read more{" "}
        <RouterLink to="/about">about me</RouterLink>, and I invite you to{" "}
        <RouterLink to={"/contact"}>contact me</RouterLink> if you are
        interested in speaking about employment opportunities.
      </p>
      <p>
        This website was built with React, Redux, SASS, and more. Feel free to
        visit my{" "}
        <Link
          href="https://github.com/seandonn-boston/seandonnio"
          target={"_blank"}
        >
          Github repo
        </Link>{" "}
        to take a look under the hood at the code powering this website.
      </p>
    </>
  );
};
