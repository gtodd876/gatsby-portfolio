import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Logo from '../components/projectlogo';

const ProjectWrapper = styled.div`
  padding-bottom: 80px;
  display: flex;
  @media (max-width: 660px) {
    flex-wrap: wrap;
  }
  &:last-of-type {
    padding-bottom: 0px;
  }
`;

const Description = styled.div`
  @media (max-width: 660px) {
    margin-top: 32px;
  }
`;

const Title = styled.h3`
  color: #333;
  font-size: 1.6em;
  font-weight: 700;
  margin: 0 0 16px 0;
`;

const Abstract = styled.div`
  margin-bottom: 16px;
`;

const Project = ({ props }) => ({
  render() {
    let codeLink = (
      <a href={this.props.url} style={{ margin: '0 10px' }}>
        {this.props.blogLink ? 'Read More' : 'See Code'}
      </a>
    );
    let appLink = <a href={this.props.url2}>See It In Action</a>;
    return (
      <ProjectWrapper>
        <Logo>{this.props.logo}</Logo>
        <Description>
          <Title>{this.props.title}</Title>
          <Abstract>{this.props.abstract}</Abstract>
          {codeLink}
          {this.props.url2 && appLink}
        </Description>
      </ProjectWrapper>
    );
  },
});

export default Project;
