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
        My mission is to develop high quality web solutions that enable my clients to establish online presence, increase profitability and continually improve productivity.
      </SectionText>
      <Button onClick={() => window.open('https://drive.google.com/file/d/1bYyHMsuJp0AtkqhPjHXBS2wJxj92LCfY/view?usp=sharing', '_blank')}>View Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;