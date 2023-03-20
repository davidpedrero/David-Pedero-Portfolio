import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main centerssss>
        Welcome to
        <br/>
        my Portfolio
      </SectionTitle>
      <SectionText>
        Hi, my name is David Pedrero and I am a completely self-taught web developer.
        <br/><br/>
        My mission is to develop high quality web solutions that enable my clients to establish online presence, increase profitability and continually improve productivity.
      </SectionText>
      <Button onClick={() => window.open('https://drive.google.com/file/d/1uKzZQaYzUp6_kxiXfSb04Szlej_nxYpn/view?usp=sharing', '_blank')}>View Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;