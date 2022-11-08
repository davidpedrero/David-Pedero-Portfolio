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
      <Button onClick={() => window.open('https://www.codingame.com/work/blog/tech-recruiting/why-you-should-hire-self-taught-developers/', '_blank')}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;