import Link from 'next/link';
import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display: "flex", alignItems: "center", color: "white", marginBottom: "20px"}}>
          <DiCssdeck size="3rem"/>
          <Span>David Pedrero</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#accomplishments">
          <NavLink>Accomplishments</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons target="_blank" href='https://github.com/davidpedrero'>
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons target="_blank" href='https://www.linkedin.com/in/davidpedrero/'>
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons target="_blank" href='https://www.facebook.com/david.pedrero.7/'>
        <AiFillFacebook size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
