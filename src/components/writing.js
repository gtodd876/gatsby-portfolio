import React from 'react';
import styled from 'styled-components';
import { Page, Row, Column } from 'hedron';

import ColorBar from '../components/colorbar';
import Project from '../components/project';
import BlogLogo from '../img/blogLogo';

export default class Writing extends React.Component {
  render() {
    return (
      <Row>
        <Column xs={12} sm={12} md={12} lg={3} lgShift={1}>
          <h2>Writing</h2>
          <ColorBar color="#066287" />
        </Column>
        <Column sm={12} md={9} lg={7}>
          <Project
            logo={BlogLogo()}
            url="https://gtodd876.github.io"
            blogLink
            title="Tech Blog"
            abstract="My developer journey musings"
          />
        </Column>
      </Row>
    );
  }
}
