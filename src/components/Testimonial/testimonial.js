import React from "react";
import Carousel from 'react-elastic-carousel';

import { consts } from 'react-elastic-carousel';

// import material UI
import Grid from '@material-ui/core/Grid';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

// import local

import "./testimonial.scss"
import Item from "./item";

import YoannDemeersseman from "../../assets/img/YoannDemeersseman.jpg"
import GuillemetWhite from "../../assets/img/guillemet.png"




function Testimonial() {

    return (
        <Grid
            container
            direction="row"
            justify="center"
            className="container background-dark global"
        >
            <Grid item container xs={12} md={10}>
                <Carousel autoPlaySpeed={3500} showArrows={false} className="testimonial-carousel"
                    // renderArrow={({ type, onClick }) => {
                    //     const pointer = type === consts.PREV ? <ArrowBackIosIcon fontSize="large" /> : <ArrowForwardIosIcon fontSize="large" />
                    //     return <button className="carousel-button" onClick={onClick}>{pointer}</button>
                    // }}
                >
                    <Item>
                    <Grid item container>                   
                        <Grid item container xs={12} md={3}>
                            <img src={YoannDemeersseman} className="testimonial-img" alt="Yoann Demeersseman" />
                        </Grid>

                        <Grid item container xs={12} md={9} className="testimonial-content">
                            <Grid item xs={12}>
                                <img src={GuillemetWhite} alt="guillemet" className="testimonial-guill" />
                                <p>Obarxo transporte l’univers de la Mixologie dans une autre dimension, il offre aux barmen un confort de travail unique pour transmettre sa passion et son savoir-faire du cocktail avec esthétismes.<br /> On dit qu’un cocktail se déguste d’abord avec les yeux, mais avant d’être filtré dans le verre de service avec précision, le barman doit théâtralisé son exécution tel un artiste. <br />Obarxo apporte cette magie à l’univers du bar, à l’art de la Mixologie, à la dégustation des cocktails at aux moments de partage.</p>
                            </Grid>
                            <Grid item xs={12}>
                                <h2>Yoann Demeersseman</h2>
                                <p>Mixologiste - <a href="https://cocktailier.fr/" target="blank">https://cocktailier.fr/</a></p>
                                
                            </Grid>
                        </Grid>
                        </Grid>
                    </Item>
                    <Item></Item>
                   

                </Carousel>
            </Grid>

        </Grid>
    );
}

export default Testimonial;