import React from "react";
import SimpleReactLightbox from "simple-react-lightbox";




// import material UI
import Grid from '@material-ui/core/Grid';
import Gallery from './gallery.js'

// import local 
import "./story.scss"
import Mickael from '../../assets/story/mickaelHEBERT.jpeg';
import LogoOrange from "../../assets/img/obarxo-logo-quadri-orange.svg"
import Guillemet from "../../assets/img/guillemet-noir.png"

function Story() {

    return (
        <Grid
            container
            direction="row"
            justify="center"
            className="container background-light global"
        >

            <Grid item container xs={8} md={3}>
                <Grid item container xs={12} md={12} alignItems="flex-end" className="story-box-mika">

                    <Grid item xs={6}
                        data-sal="slide-down"
                        data-sal-delay="100"
                        data-sal-easing="ease"
                        data-sal-duration="800">                       
                            <img className="story-image" src={Mickael} alt="MickaelHebert" />
                    </Grid>


                    <Grid item xs={6}
                    data-sal="slide-up"
                    data-sal-delay="100"
                    data-sal-easing="ease"
                    data-sal-duration="800">                   
                        <img className="story-logo" src={LogoOrange} alt="logoObarxo" />
                        <p>Mickaël HEBERT</p>
                        <p>CEO & Designer</p>                       
                    </Grid>
                </Grid>
                <Grid
                    data-sal="fade"
                    data-sal-delay="200"
                    data-sal-easing="ease"
                    data-sal-duration="500"
                >               
                <img src={Guillemet} alt="guillemet" className="story-guillemet" />
                    <p>Mickaël HEBERT a créé le concept de bar mobile tout-en-un après une expérience de quinze ans pour un groupe international de vins et spiritueux et six ans à la tête d'Easy Module, une entreprise spécialisée dans la location de mobilier design, premium. <br />Imaginé il y a 6 ans dans le plus grand secret avec des acteurs de la restauration, de la mixologie, OBARXO art of bar se position comme le bar mobile incontournable de lieux ou de maisons de renommée à la recherche d'esthétisme et d'innovation.</p>
                </Grid>



            </Grid>
            <Grid item container xs={8} md={5} className="gallery-container" align="center" >
                <SimpleReactLightbox >
                    <Gallery />   
                </SimpleReactLightbox>



            </Grid>

        </Grid>
    );
}

export default Story;