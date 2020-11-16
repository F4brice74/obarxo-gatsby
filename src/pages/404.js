import React from 'react';
//import './error.scss';
import Grid from '@material-ui/core/Grid';
import Layout from "../components/layout";


const ErrorPage = () => {
  return (
    <Layout>
    <Grid
      container
      direction="column"
      className="errorTitle"
      justify="center"
      alignItems="center"
    >
    <Grid item xs={12} className="error-content" align="center">
      <h4>Désolé, mais la page demandée n'existe pas.</h4>
      <p>nous vous invitons à revenir à <a href="/" >Accueil</a></p>
    </Grid>       
    </Grid>    
    </Layout>
    

  );
};


export default ErrorPage;
