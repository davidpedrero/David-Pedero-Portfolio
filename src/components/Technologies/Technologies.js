import React from 'react';
import { DiFirebase, DiReact, DiStackoverflow } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider/>
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a wide range of technologies within the web development world.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="5rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            React and Javascript
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="5rem"/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            PostgresSQL and Node.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiStackoverflow size="5rem"/>
        <ListContainer>
          <ListTitle>QA/QC</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Cypress.io and Jira
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
