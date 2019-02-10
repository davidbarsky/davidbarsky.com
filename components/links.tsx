import * as React from "react";
import Link from "next/link";

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
          <Link href="https://twitter.com/thramp">
            <a>Twitter</a>
          </Link>
        );
      case Site.Instagram:
        return (
          <Link href="https://instagram.com/thramp">
            <a>Instagram</a>
          </Link>
        );
      case Site.GitHub:
        return (
          <Link href="https://github.com/davidbarsky">
            <a>GitHub</a>
          </Link>
        );
      case Site.LinkedIn:
        return (
          <Link href="https://linkedin.com/in/davidbarsky">
            <a>LinkedIn</a>
          </Link>
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
