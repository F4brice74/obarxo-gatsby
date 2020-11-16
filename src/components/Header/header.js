import React from "react";


// import material UI
import Grid from '@material-ui/core/Grid';

//import local 
import "./header.scss"
import headerLogoWhite from "../../assets/img/obarxo-logo-quadri-orange-blanc.svg"


function Header() {

    return (
        <Grid
            container
            className="container"
        >
            <Grid item container xs={12} className="header-background" justify="flex-start" align="left"
                alignItems="center"
            >
                <Grid item className="header-block" xs={10} md={4} lg={4}>

                    <div>
                        <img
                            data-sal="slide-left"
                            data-sal-delay="20"
                            data-sal-easing="ease"
                            data-sal-once="true"
                            className="header-logo"
                            src={headerLogoWhite}
                            alt="headerlogo"
                        />
                    </div>

                </Grid>


            </Grid>
        </Grid>
    );
}

export default Header;