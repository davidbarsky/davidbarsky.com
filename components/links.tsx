import * as React from "react";

type Site = {
  url: string;
  display: string;
};

function Link(site: Site) {
  return (
    <>
      <a href={site.url}>{site.display}</a>
    </>
  );
}

const Links = () => {
  let twitter = {
    url: "https://twitter.com/endsofthreads",
    display: "Twitter"
  };
  let instagram = { url: "https://instagram.com/thramp", display: "Instagram" };
  let github = { url: "https://github.com/davidbarsky", display: "GitHub" };
  let linkedin = {
    url: "https://linkedin.com/in/davidbarsky",
    display: "LinkedIn"
  };

  return (
    <p>
      You can find me on elsewhere on {Link(twitter)}, {Link(instagram)},{" "}
      {Link(github)}, and {Link(linkedin)}.
    </p>
  );
};

export default Links;
