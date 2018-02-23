import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { Page, Row, Column } from 'hedron';

import ColorBar from '../components/colorbar';
import ProfileImage from '../img/mdf-live.jpg';

const ProfileImageWrapper = styled.div`
  border: none;
  border-bottom: 1px solid #e0e0e0;
  background-image: url(${ProfileImage});
  background-size: cover;
  background-position: 20% 22%;
  height: 280px;
  @media (min-width: 768px) {
    background-position: 60% center;
    border: none;
    height: 470px;
  }
  @media (min-width: 1400px) {
    border: none;
  }
`;

export default class About extends React.Component {
  render() {
    return (
      <Row alignItems="flex-end">
        <Column xs={12} sm={12} smShift={0} md={6} lg={5} lgShift={1}>
          <ProfileImageWrapper />
        </Column>
        <Column xs={12} sm={12} smShift={0} md={6} lg={5}>
          <h2>About</h2>
          <ColorBar color="#D74A41" />
          <p>
            <strong>Hi. I'm Todd, a web developer and musician based in Richmond, VA.</strong>
          </p>
          <p>
            I've always had a passion for computers and music, in the sense that they are both very
            creative fields that are constantly evolving. The rush from just starting with an idea, and then putting
            in the work from inception to completion is one of the best feelings out there. It makes sense that
            life would eventually lead me towards web development.
          </p>
          <p style={{ marginBottom: 0 }}>
            I aim to balance the technical aspects of creating software while always being mindful
            of what the experience is like from user's point of view. Currently I am an audio
            engineer doing sound design and mixing, raising a child, and learning how to code.
          </p>
        </Column>
      </Row>
    );
  }
}
