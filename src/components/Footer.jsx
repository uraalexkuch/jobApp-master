import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const useStyles = makeStyles((theme) => ({
   container: {
      backgroundColor: theme.palette.secondary.main,
      padding: '.7rem 0',
      position: 'relative',
      bottom: '0',
      width: '100%',
   },

   box: {
      display: 'flex',
      justifyContent: 'center',
      margin: 'auto',
   },
   icon: {
      fontSize: 28,
      margin: 10,
      color: theme.palette.primaryBG.main,
   },

   copyright: {
      display: 'flex',
      justifyContent: 'center',
      color: theme.palette.primaryBG.main,
      fontSize: '1rem',
   },

   span: {
      fontSize: '1rem',
      padding: '0 1rem',
   },
}));

function Footer() {
   const classes = useStyles();
   return (
      <Box className={classes.container}>
         <Grid>
            <Grid item xs={12}>
               <Box className={classes.box}>
                  <FacebookIcon className={classes.icon} />
                  <LinkedInIcon className={classes.icon} />
                  <TwitterIcon className={classes.icon} />
               </Box>
               <Box className={classes.copyright}>
                  <Typography>Copyrights &copy; 2022</Typography>
                  <span className={classes.span}>JOBHUNT</span>
               </Box>
            </Grid>
         </Grid>
      </Box>
   );
}

export default Footer;
