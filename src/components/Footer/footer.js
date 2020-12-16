import React from "react";
import { Link } from "gatsby"


// import material UI
import Grid from '@material-ui/core/Grid';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailIcon from '@material-ui/icons/Mail';

// import local
import "./footer.scss"
import footerLogoWhite from "../../assets/img/obarxo-logo-quadri-orange-blanc.svg"


function Footer() {

    return (
        <Grid
            container
            direction="row"
            className="container background-dark"
            justify="center"
            alignItems="center"
        >
            <Grid item container xs={12} className="footer-block">
                <Grid item xs={12} md={4} align="center">
                <Link smooth to="/"><img className="footer-logo" src={footerLogoWhite} alt="logoObarxo" /></Link>
                </Grid>

                <Grid item xs={12} md={4} align="center" className="footer-separator" >
                    <a href="https://www.facebook.com/OBarXo" target="blank">
                        <FacebookIcon className="footer-icon" style={{ fontSize: 60 }} />
                    </a>
                    <a href="https://www.linkedin.com/in/easymodule/" target="blank">
                        <LinkedInIcon className="footer-icon" style={{ fontSize: 60 }} />
                    </a>
                    <a href="https://www.instagram.com/obarxo" target="blank">
                        <InstagramIcon className="footer-icon" style={{ fontSize: 60 }} />
                    </a>
                    <a href="mailto:mickael@obarxo.com" target="blank">
                        <MailIcon className="footer-icon" style={{ fontSize: 60 }} />
                    </a>
                </Grid>


                <Grid item xs={12} md={4} align="center">
                    <p className="footer-tel">
                        France : <a href="tel:+33615422011">+33 (0)6 15 42 20 11</a>
                    </p>
                    <p className="footer-tel">
                        Suisse : <a href="tel:+41763991120">+41 (0)76 399 11 20</a>
                    </p>


                </Grid>


            </Grid>
            <Grid item xs={12} align="center" className="footer-right">
                <p className="footer-bottom">Tous droits réservés OBARXO/2020</p>
                <p className="footer-bottom"><a href="/mentions" >Mentions légales</a></p>
            </Grid>
            <Grid item xs={12} align="center"><p className="footer-bottom">PHOTOS : <a href="http://studiodgc.com/" target="blank">Dominique GAY</a></p>
                <p className="footer-bottom"><span className="footer-dot" />VIDEOS : <a href="mailto:allan.wattier@gmail.com" target="blank">Allan Wattier</a></p>
                <p className="footer-bottom"><span className="footer-dot" />
                REALISATION WEB : <a href="https://fabrice-web.fr" target="blank">fabrice-web.fr</a> </p>

            </Grid>
        </Grid>
    );
}

export default Footer;