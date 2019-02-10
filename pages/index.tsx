import "../style.css";
import * as React from "react";
import Layout from "../components/layout";
import Links from "../components/links";

function App() {
  return (
    <Layout title="David Barsky">
      <h2>Hi, I’m David Barsky.</h2>
      <p>
        I'm currently at Amazon, where I work on test infrastructure for natural language models. I also work on <a href="https://github.com/awslabs/aws-lambda-rust-runtime">Rust Runtime for AWS Lambda</a> and contribute to the <a href="https://tokio.rs/">Tokio</a> project.
      </p>
      <p>
        I graduated from Brandeis University, where I studied computer science and history.
      </p>
      <Links />
    </Layout>
  );
}

export default App;
