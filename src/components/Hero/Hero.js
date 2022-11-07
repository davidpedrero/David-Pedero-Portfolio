import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main centerssss>
        Welcome to <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        My mission is to help aspiring and established developers take their development skills to the next level
      </SectionText>
      <Button onClick={() => window.location = 'https:google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;