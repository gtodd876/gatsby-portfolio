import React from 'react';
import styled from 'styled-components';
import { Page, Row, Column } from 'hedron';

const FooterSection = styled.div`
  color: #666;
  background: #222;
  height: 200px;
  padding-top: 55px;
  text-align: center;
  font-size: 0.9em;
  line-height: 1.4em;
  font-family: 'bebasneue';
`;

const FooterText = styled.div`
  margin: 20px auto 0 auto;
`;

const FooterLink = styled.a`
  color: #666 !important;
`;

export default class Footer extends React.Component {
  render() {
    return (
      <FooterSection>
        <FooterText>
          This page is open source, Check it out on{' '}
          <FooterLink href="https://github.com/gtodd876">Github</FooterLink>.
          <br />© 2018 Todd Matthews
        </FooterText>
      </FooterSection>
    );
  }
}
