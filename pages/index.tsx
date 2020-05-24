import * as React from "react";
import Layout from "../components/layout";
import Links from "../components/links";

export default () => {
  return (
    <Layout title="David Barsky">
      <h2>Hi, I’m David Barsky.</h2>
      <p>
        I work at Amazon. I've been working on the{" "}
        <a href="https://github.com/tokio-rs/tracing">
          <a>Tracing</a>
        </a>{" "}
        library.
      </p>
      <p>
        I graduated from Brandeis University, where I studied computer science
        and history.
      </p>
      <Links />
    </Layout>
  );
};
