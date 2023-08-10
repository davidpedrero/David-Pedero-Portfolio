import Link from "next/link";
import React from "react";
import {
  AiFillFacebook,
  AiFillGithub,
  // AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link
        href="/"
        style={{
          display: "flex",
          alignItems: "center",
          color: "white",
          marginBottom: "20px",
        }}
      >
        <DiCssdeck size="3rem" />
        David Pedrero
      </Link>
    </Div1>
    <Div2>
      <li>
        <NavLink href="#projects">Projects</NavLink>
      </li>
      <li>
        <NavLink href="#tech">Technologies</NavLink>
      </li>
      <li>
        <NavLink href="#about">About</NavLink>
      </li>
    </Div2>
    <Div3>
      <SocialIcons target="_blank" href="https://github.com/davidpedrero">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons
        target="_blank"
        href="https://www.linkedin.com/in/davidpedrero/"
      >
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons
        target="_blank"
        href="https://www.facebook.com/david.pedrero.7/"
      >
        <AiFillFacebook size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
