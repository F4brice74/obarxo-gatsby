import React from "react";

// import material UI
import Grid from '@material-ui/core/Grid';
import { SRLWrapper } from "simple-react-lightbox";
import Images from "../Utils/gallery";

// import local
import "./gallery.scss"

const options = {
    settings: {
        autoplaySpeed: 3000,
        disableKeyboardControls: false,
        disablePanzoom: false,
        disableWheelControls: false,
        hideControlsAfter: 3000,
        lightboxTransitionSpeed: 0.6,
        lightboxTransitionTimingFunction: 'linear',
        overlayColor: 'rgba(0, 0, 0, 0.9)',
        slideAnimationType: 'fade',
        slideSpringValues: [300, 200],
        slideTransitionSpeed: 0.6,
        slideTransitionTimingFunction: 'linear'
      },
    thumbnails: {
      showThumbnails: false,
      thumbnailsAlignment: 'center',
      thumbnailsContainerBackgroundColor: 'transparent',
      thumbnailsContainerPadding: '0',
      thumbnailsGap: '1px',
      thumbnailsOpacity: 0.4,
      thumbnailsPosition: 'bottom',
      thumbnailsSize: ['100px', '80px']
    },
    buttons: {
        backgroundColor: 'rgba(30,30,36,0.8)',
        iconColor: 'rgba(255, 255, 255, 0.8)',
        iconPadding: '5px',
        showAutoplayButton: true,
        showCloseButton: true,
        showDownloadButton: false,
        showFullscreenButton: true,
        showNextButton: true,
        showPrevButton: true,
        showThumbnailsButton: true,
        size: '40px'
      }
  }


function Gallery() {
    //console.log(Images)
    return (
        <Grid
            container
            direction="row"
            justify="center"
            className="container"
           
        >
            <Grid item container xs={12} justify="center" >
                <SRLWrapper options={options}>
                    {Images.map(image => (                        
                        <a href={image.src} data-attribute="SRL" key={image.thumbnail}>
                            <img className="gallery-item" src={image.thumbnail}  alt="OBARXO" />
                        </a>
                    ))}
                </SRLWrapper>
            </Grid>

        </Grid>
    );
}

export default Gallery;