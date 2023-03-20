import React from 'react';
import { FaReact, FaDatabase, FaServer } from 'react-icons/fa';
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
        <FaReact size="6rem"/>
        <br></br>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            React.js, Javascript, HTML and CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaServer size="6rem"/>
        <br></br>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Node.js, Express.js, and REST APIs
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaDatabase size="6rem"/>
        <br></br>
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            Experience with <br/>
            MongoDB, MySQL, and PostgresSQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <br/>
  </Section>
);

export default Technologies;
