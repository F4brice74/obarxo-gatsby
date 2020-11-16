import React from "react";



// import material UI
import Grid from '@material-ui/core/Grid';

import "./presta.scss"



function Presta() {


    return (
        <Grid
        item
            container
            direction="column"
            xs={12}
        >
            <Grid className="presta presta-background1" align="right">
               
                    <Grid className="title" 
                        data-sal="slide-right"
                        data-sal-delay="500"
                        data-sal-easing="ease">
                        <div className="presta-title">Privatiser</div>
                        <div className="presta-subtitle1">vos espaces</div>
                    </Grid>         
               
                    <Grid item xs={6} md={12} align="right" className="presta-block-subtitle" 
                        data-sal="slide-right"
                        data-sal-delay="600"
                        data-sal-easing="ease"
                        data-sal-duration="700"
                        >
                        <div className="presta-subtitle2">préparer</div>
                        <span className="presta-dot" />
                        <div className="presta-subtitle2">servir</div>
                        <span className="presta-dot" />
                        <div className="presta-subtitle2">déguster</div>
                    </Grid>
            
                    <Grid item xs={12} md={12} align="center">
                        <div className="player-wrapper">
                        <iframe
                        srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/LGaJ56V-aJQ?autoplay=1><img src=https://i.ytimg.com/vi/LGaJ56V-aJQ/hqdefault.jpg alt='PRIVATISER VOS ESPACES'><span>▶</span></a>"
                        
                        src="https://www.youtube.com/embed/LGaJ56V-aJQ" 
                        loading="lazy"
                        title="Privatiser vos espaces" 
                        width="100%" 
                        height="100%"                       
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen                         
                        />
                        </div>
                    </Grid>
             

            </Grid>

            <Grid className="presta presta-background2" align="left">
               
                    <Grid className="title" 
                        data-sal="slide-left"
                        data-sal-delay="500"
                        data-sal-easing="ease">
                        <div className="presta-title">Créer</div>
                        <div className="presta-subtitle1">l'événement</div>
                    </Grid>
            

               
                    <Grid item xs={6} md={12} align="left" className="presta-block-subtitle2"  
                        data-sal="slide-left"
                        data-sal-delay="600"
                        data-sal-easing="ease"
                        >
                        <div className="presta-subtitle2">rassembler</div>
                        <span className="presta-dot" />
                        <div className="presta-subtitle2">fédérer</div>
                        <span className="presta-dot" />
                        <div className="presta-subtitle2">partager</div>
                    </Grid>
           
                
                    <Grid item xs={12} md={12} align="center">
                        <div className="player-wrapper">
                        <iframe
                        srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/jugRkJRyOFc?autoplay=1><img src=https://i.ytimg.com/vi/jugRkJRyOFc/hqdefault.jpg alt='CREER L'EVENEMENT'><span>▶</span></a>"
                        src="https://www.youtube.com/embed/jugRkJRyOFc" 
                        loading="lazy"
                        title="Créer l'événement"
                        width="100%" 
                        height="100%"                       
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen                      
                        />
                        </div>
                    </Grid>
              
            </Grid>


            <Grid className="presta presta-background3" align="right">
              
                    <Grid className="title" 
                        data-sal="slide-right"
                        data-sal-delay="500"
                        data-sal-easing="ease">
                        <div className="presta-title">Découvrir</div>
                        <div className="presta-subtitle1">l'art du cocktail</div>
                    </Grid>
           

            
                    <Grid item xs={6} md={12} align="right" className="presta-block-subtitle" 
                        data-sal="slide-right"
                        data-sal-delay="600"
                        data-sal-easing="ease"
                        >
                        <div className="presta-subtitle2">Accueillir</div>
                        <span className="presta-dot" />
                        <div className="presta-subtitle2">imaginer</div>
                        <span className="presta-dot" />
                        <div className="presta-subtitle2">reproduire</div>
                    </Grid>
           

                    <Grid item xs={12} md={12} align="center">
                        <div className="player-wrapper">
                        <iframe
                        srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/N4zgF9Fb8nM?autoplay=1><img src=https://i.ytimg.com/vi/N4zgF9Fb8nM/hqdefault.jpg alt='DECOUVRIR L'ART DU COCKTAIL'><span>▶</span></a>"
                       // srcdoc='https://i.ytimg.com/vi/N4zgF9Fb8nM/hqdefault.jpg'
                        src="https://www.youtube.com/embed/N4zgF9Fb8nM" 
                        loading="lazy"
                        title="Découvrir - l'Art du Cocktail"
                        width="100%" 
                        height="100%"                       
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen 
                        />
                        </div>
                    </Grid>
             
            </Grid>
        </Grid>
    );
}

export default Presta;