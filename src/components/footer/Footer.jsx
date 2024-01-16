import "./footer.css";
import fbImg from "../../img/socials/fb.svg";
import instImg from "../../img/socials/inst.svg";
import twImg from "../../img/socials/tw.svg";
import inImg from "../../img/socials/in.svg";

const Footer = () => {
  return (
    <header className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__nav social">
            <div className="footer__title">Fashion</div>
            <div className="footer__desc">
              Complete your style with awesome <br />
              clothes from us
            </div>
            <div className="footer__social">
              <ul className="footer__social-list">
                <li>
                  <a href="#!">
                    <img src={fbImg} alt="Facebook" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <img src={instImg} alt="Instagram" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <img src={twImg} alt="Twitter" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <img src={inImg} alt="LinkedIn" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer__nav">
            <ul className="footer__nav-list">
              <li>
                <a href="#!" className="light">
                  Company
                </a>
              </li>
              <li>
                <a href="#!">About</a>
              </li>
              <li>
                <a href="#!">Contact us</a>
              </li>
              <li>
                <a href="#!">Support</a>
              </li>
              <li>
                <a href="#!">Careers</a>
              </li>
            </ul>
          </div>
          <div className="footer__nav">
            <ul className="footer__nav-list">
              <li>
                <a href="#!" className="light">
                  Quick Link
                </a>
              </li>
              <li>
                <a href="#!">Share Location</a>
              </li>
              <li>
                <a href="#!">Orders Tracking</a>
              </li>
              <li>
                <a href="#!">Size Guide</a>
              </li>
              <li>
                <a href="#!">FAQs</a>
              </li>
            </ul>
          </div>
          <div className="footer__nav">
            <ul className="footer__nav-list">
              <li>
                <a href="#!" className="light">
                  Legal
                </a>
              </li>
              <li>
                <a href="#!">Terms & conditions</a>
              </li>
              <li>
                <a href="#!">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Footer;
