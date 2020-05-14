import * as React from "react";
import Head from "next/head";

type Props = {
  title?: string;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "This is the default title"
}) => (
    <>
      <Head>
        <title>{title}</title>
        <link rel="stylesheet" href="/_next/static/style.css" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body>{children}</body>
    </>
  );

export default Layout;
