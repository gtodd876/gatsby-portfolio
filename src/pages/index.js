import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { injectGlobal } from 'styled-components';
import ScrollableAnchor from 'react-scrollable-anchor';

import { Page, Row, Column } from 'hedron';

import Hero from '../components/hero';
import Section from '../components/section';
import About from '../components/about';
import Projects from '../components/projects';
import Writing from '../components/writing';
import Footer from '../components/footer';

import BebasNeueBoldWoff2 from '../fonts/bebasneuebold.woff2';
import BebasNeueBoldWoff from '../fonts/bebasneuebold.woff';
import CharterRegularWoff2 from '../fonts/charterregular.woff2';
import CharterRegularWoff from '../fonts/charterregular.woff';
import CharterBoldWoff2 from '../fonts/charterbold.woff2';
import CharterBoldWoff from '../fonts/charterbold.woff';

injectGlobal`
  @font-face {
    font-family: 'bebasneue';
    src: url(${BebasNeueBoldWoff2}) format('woff2'),
         url(${BebasNeueBoldWoff}) format('woff');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'charter';
    src: url(${CharterRegularWoff2}) format('woff2');
    src: url(${CharterRegularWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'charter';
    src: url(${CharterBoldWoff2}) format('woff2');
    src: url(${CharterBoldWoff}) format('woff');
    font-weight: bold;
    font-style: normal;
  }

  a {
    color: #333;
    text-decoration: underline;
    :hover {
      color: #d74a41 !important;
      text-decoration: underline
    }
    :visited {
      color: #333;
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  p+ h2 {
    margin-top: 1.2em;
  }

  p + h3 {
    margin-top: 1.5em;
  }
`;

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Todd Matthews</title>
          <meta name="description" content="Todd Matthews's projects" />
          <meta name="keywords" content="developer, app, interface, code" />
          <meta property="og:description" content="Todd Matthews's projects" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://toddmatthews.me" />
          <meta property="og:title" content="Todd Matthews" />
          <link rel="apple-touch-icon" sizes="57x57" href="/static/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/static/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/static/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/static/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/static/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/static/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/static/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/static/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-icon-180x180.png" />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/static/android-icon-192x192.png"
          />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/static/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="theme-color" content="#ffffff" />
        </Helmet>
        <Hero />
        <ScrollableAnchor id={'about'}>
          <Section>
            <About />
          </Section>
        </ScrollableAnchor>
        <ScrollableAnchor id={'projects'}>
          <Section>
            <Projects />
          </Section>
        </ScrollableAnchor>
        <Section>
          <Writing />
        </Section>
        {/*        ds<Section>
          <Photo />
        </Section>
        <Section>
          <Notes />
        </Section>*/}
        <Footer />
      </div>
    );
  }
}
