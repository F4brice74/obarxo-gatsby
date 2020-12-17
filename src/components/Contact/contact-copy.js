import React, { useState } from "react";
import emailjs from 'emailjs-com';
import * as Yup from 'yup';
import { Formik, Field, Form } from 'formik';


// import material UI
import Grid from '@material-ui/core/Grid';
//import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { TextField } from 'formik-material-ui';

//import local 
import "./contact.scss"
import LogoOrange from "../../assets/img/obarxo-logo-quadri-orange.svg"

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}



const useStyles = makeStyles({
    button: {
        color: 'white',
        backgroundColor: "black",
        '&:hover': {
            backgroundColor: "#ED6F12"
        }
    },

    root: {
        marginLeft: "1em",
        marginRight: "1em",
        marginBottom: "0.5em",
        minWidth: "300px",


        '& label.Mui-focused': {
            color: 'black',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#ED6F12',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'black',
            },
            '&:hover fieldset': {
                borderColor: 'black',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#ED6F12',
            },
        },
    },

});

//const phoneRegex = RegExp(/^(\+(([0-9]){1,2})[-.])?((((([0-9]){2,3})[-.]){1,2}([0-9]{4,10}))|([0-9]{10}))$/);
const phoneRegex = RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
const validationSchema = Yup.object().shape({
    user_name: Yup
        .string()
        .min(2, 'Votre nom ne peut pas comporter qu\'une seule lettre')
        .max(60, 'Votre nom semble trop long')
        .required('Ce champ est requis'),
    user_email: Yup
        .string()
        .email('cet email est invalide')
        .required('Ce champ est requis'),
    user_phone: Yup
        .string('entrez votre numéro de téléphone')
        .matches(phoneRegex, 'numero de téléphone non valide')
        .required('Ce champ est requis'),
});





function Contact() {

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    // const [name, setName] = useState();
    // const [message, setMessage] = useState();
    // const [phone, setPhone] = useState();
    // const [email, setEmail] = useState();


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('obarxo', 'template_test', e.target, 'user_DcivDu3LP2mvc2dCRrJDa')
            .then((result) => {
                //console.log(result);
                setOpen(true);
                // setName('');
                // setEmail('');
                // setMessage('');
                // setPhone('');
                // console.log("bar confirm")
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-end"
            className="container background-light global"
        >
            <Grid item container justify="center" align="center" xs={12} md={12}>
                <Grid>
                    <img
                        data-sal="zoom-in"
                        data-sal-delay="300"
                        data-sal-easing="ease"
                        className="contact-logo"
                        src={LogoOrange}
                        alt="logoObarxo"
                    />

                </Grid>
                <Grid item xs={12} >
                    <p className="contact-titre3">Je veux en savoir plus</p>
                </Grid>
            </Grid>


            <Grid item container direction="column" justify="center" alignItems="center">
                <Formik
                  initialValues={{
                    user_name: '',
                    user_email: '',
                    user_phone: '',
                    user_message: [],
                  }}
                  validationSchema={validationSchema}
                  onSubmit={(values, { resetForm }) => {
                    console.log(values)
                    //alert(JSON.stringify(values, null, 2));
                    emailjs.sendForm('obarxo', 'template_test', values, 'user_DcivDu3LP2mvc2dCRrJDa')
            .then((result) => {
                //console.log(result);
                setOpen(true);
                // setName('');
                // setEmail('');
                // setMessage('');
                // setPhone('');
                // console.log("bar confirm")
            }, (error) => {
                console.log(error.text);
            });
                    resetForm({ values: '' });

                  }}
                
                
                >
                    <Form className="contact-form">
                        <Grid item xs={12} md={3}>
                            <Field
                                className={classes.root}
                                id="user_name"
                                required
                                variant="outlined"
                                label="Votre nom"
                                type="text"
                                name="user_name"
                                component={TextField}
                               //value={name}

                            />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Field
                                className={classes.root}
                                id="user_email"
                                required
                                variant="outlined"
                                label="Votre email"
                                type="email"
                                name="user_email"
                                component={TextField}
                                //value={email}
                            />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Field
                                className={classes.root}
                                id="user_phone"
                                variant="outlined"
                                label="Votre téléphone"
                                required
                                type="phone"
                                name="user_phone"
                                component={TextField}
                               // value={phone}
                            />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Field
                                className={classes.root}
                                id="user_message"
                                variant="outlined"
                                multiline
                                required
                                rows="5"
                                label="Votre message"
                                type="message"
                                name="user_message"
                                component={TextField}
                               // value={message}
                            />
                        </Grid>

                        <Button className={classes.button} variant="contained" color="primary" type="submit" value="Send" >
                            Envoyer</Button>

                        <Grid item xs={12}>
                            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                                <Alert onClose={handleClose} severity="success">
                                    Le message a bien été envoyé. Merci !
                    </Alert>
                            </Snackbar>
                        </Grid>
                    </Form>

                </Formik>




            </Grid>


        </Grid >





    );
}

export default Contact;