import * as React from "react";
import { FooterStyle, FooterTitle, FooterLink } from "../styles/footer.style";

class Footer extends React.Component<{}> {
  render() {
    return (
      <FooterStyle id="Footer">
        <FooterTitle id="footer-heading">Quick Links</FooterTitle>
        <FooterLink
          href="https://www.youtube.com/playlist?list=PLMeE5U_hEiCYOhDIw6r94mIeuHTSXibAY"
          target="_blank"
          id="youtube-link"
        >
          Youtube
        </FooterLink>
        <FooterLink
          href="https://www.linkedin.com/in/austin-sohn-9bb721230/"
          target="_blank"
          id="linkedin-link"
        >
          LinkedIn
        </FooterLink>
        <FooterLink
          href="https://github.com/austin-sohn"
          target="_blank"
          id="github-link"
        >
          GitHub
        </FooterLink>
      </FooterStyle>
    );
  }
}
export default Footer;
