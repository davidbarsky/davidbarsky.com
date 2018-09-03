import React from 'react'
import styled from "styled-components"

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 900;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.body`
  padding: 4rem;
  font-family: -apple-system,system-ui,BlinkMacSystemFont;
  font-weight: 400;
  font-size: 1.6rem;
  max-width: 70vw;
  background: #fefefe;
  line-height: 1.2;
  color: #000207;
`;

const Lists = styled.div`
  margin: 0;
  padding: 0rem;
  display: block;
`;

const Member = styled("ol")`
  margin: 0;
  padding: 0rem;
  &::before{
    content: "— "
  }
`;

export default () => <>
  <Wrapper>
    <Title>
      <Intro />
    </Title>
    <Body />
    <Links />
  </Wrapper>
</>

const Intro = () => {
  return <h2>Hi, I’m David Barsky.</h2>;
};

const Body = () => {
  return (
    <article>
      <p>I am engineer in Alexa AI organization at Amazon, where I work on
        test infrastructure for natural language models.
      </p>
      <p>
        I graduated from <a href="brandeis.edu">Brandeis University</a>, where I studied
        computer science and history.
      </p>
      <p>
        You can find me elsewhere on:
      </p>
    </article>
  )
}

const Links = () => {
  return (
    <Lists>
      <Member>
        <a href="https://twitter.com/thramp">Twitter</a>
      </Member>
      <Member>
        <a href="https://instagram.com/thramp">Instagram</a>
      </Member>
      <Member>
        <a href="https://github.com/davidbarsky">GitHub</a>
      </Member>
      <Member>
        <a href="https://linkedin.com/in/davidbarsky">LinkedIn</a>
      </Member >
    </Lists >
  );
}
