/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { css } from "emotion";

import SocialLink from "./SocialLink";

import { breakpoints } from "../theme";

const anchorStyle = css`
  margin-right: 24px;
  @media (max-width: ${breakpoints.small}) {
    margin: 0 12px;
  }
`;

function ContactInfo() {
  return (
    <React.Fragment>
      <p
        className={css`
          margin-bottom: 30px;
        `}
      >
        I’m available for freelance and currently seeking a full time position.
        If you're interested, feel free to send me an email or fill out the
        provided form.
      </p>
      <div
        className={css`
          font-weight: 500;
          font-size: 1.1rem;
        `}
      >
        Email
      </div>
      <a
        className={css`
          display: inline-block;
          margin-bottom: 30px;
        `}
        href="mailto:topdev1232022@gmail.com"
      >
        topdev1232022@gmail.com
      </a>
      <br />
      <div className={css`display: flex`}>
        <div>
          {/* <SocialLink
            className={anchorStyle}
            type="LinkedIn"
            href="https://www.linkedin.com/in/noah-sim-392a9a241"
            width="32px"
            height="32px"
          /> */}
          <SocialLink
            className={anchorStyle}
            type="Github"
            href="https://github.com/talented0312"
            width="32px"
            height="32px"
          />
          <SocialLink
            className={anchorStyle}
            type="CodePen"
            href="https://codepen.io/jiangsim"
            width="32px"
            height="32px"
          />
        </div>
        <div>
          <img src="https://www.google.com/maps/vt/data=fxD-TOSy7azouu…oGE765MOTFoOrcD9ttvRO2H_RFrutEnjhge6GBbTwq5OhG4Uw" alt="Map of Kharkiv" style={{width: "300px"}}/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ContactInfo;
