import * as React from "react";

const Links = () => {
  enum Site {
    Twitter,
    Instagram,
    GitHub,
    LinkedIn
  }

  const link = (name: Site) => {
    switch (name) {
      case Site.Twitter:
        return (
          <a href="https://twitter.com/endsofthreads">Twitter</a>
        );
      case Site.Instagram:
        return (
          <a href="https://instagram.com/thramp">Instagram</a>
        );
      case Site.GitHub:
        return (
          <a href="https://github.com/davidbarsky">GitHub</a>
        );
      case Site.LinkedIn:
        return (
          <a href="https://linkedin.com/in/davidbarsky">LinkedIn</a>
        );
    }
  };

  return (
    <p>
      You can find me on elsewhere on {link(Site.Twitter)},{" "}
      {link(Site.Instagram)}, {link(Site.GitHub)}, and {link(Site.LinkedIn)}.
    </p>
  );
};

export default Links;
