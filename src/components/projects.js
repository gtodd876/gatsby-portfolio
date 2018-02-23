import React from 'react';
import styled from 'styled-components';
import { Page, Row, Column } from 'hedron';

import ColorBar from '../components/colorbar';

import Project from '../components/project';

import PivotCardsLogo from '../img/pivotCardsLogo';
import TapifyLogo from '../img/tapifyLogo';
import NodeChatLogo from '../img/nodeChatLogo';

const Projects = () => ({
  render() {
    return (
      <Row>
        <Column xs={12} sm={12} md={12} lg={3} lgShift={1}>
          <h2>Projects</h2>
          <ColorBar color="#FCD149" />
        </Column>
        <Column sm={12} md={9} lg={7}>
          <Project
            logo={TapifyLogo()}
            url="https://github.com/gtodd876/tapify-react-app"
            url2="https://warm-escarpment-43459.herokuapp.com/"
            title="Tapify"
            abstract="A tap tempo playlist creator powered by the Spotify API."
          />
          <Project
            logo={PivotCardsLogo()}
            url="https://github.com/gtodd876/goodday"
            title="Pivot Cards"
            abstract="An easy to use, drap and drop agile solution powered by the Pivotal Tracker API."
          />
          <Project
            logo={NodeChatLogo()}
            url="https://github.com/gtodd876/node-chat-app"
            url2="https://damp-plains-92843.herokuapp.com/"
            title="Node Chat"
            abstract="A chat application that allows you to share your location."
          />
        </Column>
      </Row>
    );
  },
});

export default Projects;
