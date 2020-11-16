import React from "react";


// import material UI
import Grid from '@material-ui/core/Grid';

//import local
import iconeDesign from '../../assets/prez/design_icone.png';
import iconeModulable from '../../assets/prez/modulable_icone.png';
import iconePerso from '../../assets/prez/personnalisation_icone.png';

import "./presentation.scss"



function Presentation() {

    return (
        <Grid
            container
            direction="column"
            justify="center"
            className="container background-light"
            alignItems="center"
        >
            <Grid item container justify="center" align="center" xs={12} md={8} lg={7} className="prez-box" >

                <Grid item container xs={12} md={3} lg={3} justify="center" >

                    <div className="prez-block">
                        <Grid item xs={12} md={12} >
                            <img src={iconeDesign} alt="design" className="prez-icone" />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <h2>DESIGN</h2>
                        </Grid>
                        <Grid item xs={12} md={12} className="prez-arg">
                            <p
                                data-sal="slide-down"
                                data-sal-delay="300"
                                data-sal-easing="ease"
                                data-sal-duration="500"
                            >
                                "Elégance et fonctionnalité ont guidé la conception et le design d'<b>O</b><span>BAR</span><b>XO</b>"</p>


                        </Grid>
                    </div>

                </Grid>

                <Grid item container xs={12} md={3} lg={3} justify="center">

                    <div className="prez-block">
                        <Grid item xs={12} md={12} >
                            <img src={iconeModulable} alt="modulable" className="prez-icone" />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <h2>MODULABLE</h2>
                        </Grid>

                        <Grid item xs={12} md={12} className="prez-arg">
                            <p
                                data-sal="slide-down"
                                data-sal-delay="500"
                                data-sal-easing="ease"
                                data-sal-duration="500"
                            >
                                "Mobile et compartimenté, sa modularité fait partie de l'ADN d'<b>O</b><span>BAR</span><b>XO</b> "</p>
                        </Grid>
                    </div>


                </Grid>
                <Grid item container xs={12} md={3} lg={3} justify="center" >

                    <div className="prez-block">
                        <Grid item xs={12} md={12} >
                            <img src={iconePerso} alt="perso" className="prez-icone" />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <h2>UNIQUE</h2>
                        </Grid>
                        <Grid item xs={12} md={12} className="prez-arg">
                            <p
                                data-sal="slide-down"
                                data-sal-delay="700"
                                data-sal-easing="ease"
                                data-sal-duration="500"
                            >
                                "Matière, couleur, technologie, <b>O</b><span>BAR</span><b>XO</b> est entièrement personnalisable"
                                </p>
                        </Grid>
                    </div>


                </Grid>
                <Grid item xs={12}>
                    <p className="prez-title">"Une innovation dans l'univers du bar mobile"</p>
                </Grid>





            </Grid>

        </Grid>
    );
}

export default Presentation;