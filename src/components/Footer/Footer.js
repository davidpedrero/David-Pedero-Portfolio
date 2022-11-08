import React from 'react';
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:347-622-3789'>(347)-622-3789</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:pedrero888@gmail.com'>Pedrero888@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Stay Inspired. Never Stop Creating.</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons target="_blank" href='https://github.com/davidpedrero'>
            <AiFillGithub size="3rem"/>
          </SocialIcons>
          <SocialIcons target="_blank" href='https://www.linkedin.com/in/davidpedrero/'>
            <AiFillLinkedin size="3rem"/>
          </SocialIcons>
          <SocialIcons target="_blank" href='https://www.facebook.com/david.pedrero.7/'>
            <AiFillFacebook size="3rem"/>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
