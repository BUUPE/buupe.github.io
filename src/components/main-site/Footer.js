import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { withStyles } from "@material-ui/styles";

const styles = {
  footer: {
    backgroundColor: "#333",
    borderBottom: "3px solid #f21131",
    textAlign: "center",
  },
  footerIcon: {
    color: "white",
    fontSize: "50px",
    transition: "all .3s linear",
    paddingLeft: "5px",
    paddingRight: "5px",
    "&:hover": {
      color: "#C30000",
      "-webkit-transform": "translateY(-5px)",
      transform: "translateY(-5px)",
      transition: "all .3s linear",
    },
  },
  footerLinks: {
    paddingBottom: "20px",
    paddingTop: "10px",
  },
  footerCopyright: {
    color: "#fff",
    textAlign: "center",
    paddingTop: "10px",
  },
};

const Footer = ({classes}) => (
  <div>
    <div className={classes.footer}>
      <Container>
        <Row>
          <div className="col-lg-4 mb-5 mb-lg-0">
            <p />
          </div>

          <div className="col-lg-4 mb-5 mb-lg-0">
            <div className={classes.footerCopyright}>
              <small>Copyright &copy; BU UPE 2020</small>
            </div>

            <div className={classes.footerLinks}>
              <span>
                <a href="https://github.com/BUUPE/">
                  <FontAwesomeIcon
                    className={classes.footerIcon}
                    icon={faGithub}
                  />
                </a>
              </span>
              <span>
                <a href="https://www.facebook.com/upeatbu/">
                  {" "}
                  <FontAwesomeIcon
                    className={classes.footerIcon}
                    icon={faFacebook}
                  />
                </a>
              </span>
              <span>
                <a href="https://twitter.com/bu_upe">
                  {" "}
                  <FontAwesomeIcon
                    className={classes.footerIcon}
                    icon={faTwitterSquare}
                  />
                </a>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  </div>
);

export default withStyles(styles)(Footer);
