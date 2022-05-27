import * as React from 'react';
import { Typography, Button, Box, Grid } from '@mui/material';
import homeBackground from '../images/homeBackground.webp';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CodeIcon from '@mui/icons-material/Code';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { CardActionArea } from '@mui/material';

const useStyles = makeStyles((theme) => ({
   container: {
      backgroundImage: `url(${homeBackground})`,
      width: '100%',
      margin: 'auto',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: 'auto',
   },

   gridBox: {
      [theme.breakpoints.down('xl')]: {
         display: 'flex',
         justifyContent: 'center',
      },
   },

   overlay: {
      display: 'inline-block',
      marginTop: '22%',
      marginLeft: '8%',
      paddingLeft: '2rem',
      marginBottom: '10rem',
      background: 'rgb(255,255,255, .85)',
      borderRadius: 10,
      height: 'auto',
      width: '32rem',
      [theme.breakpoints.down('xl')]: {
         marginLeft: 0,
         textAlign: 'center',
         paddingLeft: 0,
         paddingTop: '1rem',
      },
      [theme.breakpoints.down('md')]: {
         width: '70%',
         padding: '2rem',
      },
      [theme.breakpoints.down('sm')]: {
         width: '80%',
         padding: '1.5rem',
      },
   },

   subHeader: {
      color: theme.palette.gray.fW500,
      paddingTop: '.7rem',
      [theme.breakpoints.down('md')]: {
         fontSize: 28,
      },
   },
   header: {
      color: theme.palette.third.main,
      paddingBottom: '1.5rem',
      [theme.breakpoints.down('sm')]: {
         paddingRight: '.5rem',
         paddingLeft: '.5rem',
      },
   },

   link: {
      textDecoration: 'none',
   },

   btnJob: {
      '&:hover': {
         backgroundColor: '#80deea',
      },
   },

   container2: {
      width: '100%',
      margin: '4rem auto auto',
      backgroundColor: '#F8F8FF',
      height: 'auto',
      boxSizing: 'border-box',
      [theme.breakpoints.down('xl')]: {
         display: 'flex',
         justifyContent: 'center',
         margin: '3rem auto auto',
      },
      [theme.breakpoints.down('sm')]: {
         paddingRight: '.5rem',
         paddingLeft: '.5rem',
      },
   },
   subContainer2: {
      [theme.breakpoints.down('xl')]: {
         display: 'flex',
         justifyContent: 'center',
      },
   },

   header2Box: {
      paddingLeft: '7rem',
      display: 'inline-block',
      marginTop: '2rem',
      marginBottom: '4rem',
      [theme.breakpoints.down('xl')]: {
         textAlign: 'center',
         paddingLeft: 0,
      },
   },
   header2: {
      display: 'inline-block',
      color: theme.palette.gray.fW500,
      [theme.breakpoints.down('xl')]: {
         textAlign: 'center',
      },
   },
   subHeader2: {
      display: 'inline-block',
      fontSize: '1.2rem',
      maxWidth: 600,
      color: '#424242',
      [theme.breakpoints.down('xl')]: {
         textAlign: 'center',
         width: '100%',
      },
   },
   iconBox: {
      marginBottom: '4rem',
   },

   muiIcon: {
      color: theme.palette.third.fifth,
      textAlign: 'center',
   },
}));

const popularJobs = [
   {
      icon: <DesktopWindowsIcon sx={{ fontSize: 50, mt: 3 }} />,
      title: 'Digital Marketing',
      number: '32 Jobs',
   },
   {
      icon: <BorderColorIcon sx={{ fontSize: 50, mt: 3 }} />,
      title: 'Content Writing',
      number: '14 Jobs',
   },
   {
      icon: <PeopleAltIcon sx={{ fontSize: 50, mt: 3 }} />,
      title: 'HR Management',
      number: '27 Jobs',
   },
   {
      icon: <CodeIcon sx={{ fontSize: 50, mt: 3 }} />,
      title: 'Development',
      number: '35 Jobs',
   },
];

function Home() {
   const classes = useStyles();
   return (
      <Box sx={{ minHeight: '100vh' }}>
         <Box sx={{ height: '100%' }}>
            <Grid maxWidth="xl" container className={classes.container}>
               <Grid item xs={12} className={classes.gridBox}>
                  <Box className={classes.overlay}>
                     <Typography
                        className={classes.subHeader}
                        variant="h4"
                        component="h4"
                        gutterBottom={false}
                        sx={{ fontWeight: 700, fontSize: 32 }}
                     >
                        Looking for a new career?
                     </Typography>
                     <Typography
                        variant="h1"
                        component="h1"
                        lineHeight="1.1"
                        sx={{ fontWeight: 700, mt: 1.5 }}
                        className={classes.header}
                     >
                        IT STARTS HERE
                     </Typography>
                     <Link to={'/jobs'} className={classes.link}>
                        <Button
                           variant="contained"
                           color="btnColor"
                           sx={{
                              fontWeight: 'bold',
                              fontSize: 18,
                              mb: 3.5,
                           }}
                           className={classes.btnJob}
                        >
                           Find Jobs
                        </Button>
                     </Link>
                  </Box>
               </Grid>
            </Grid>
         </Box>

         <Box sx={{ height: '100%' }}>
            <Grid maxWidth="xl" container className={classes.container2}>
               <Box className={classes.header2Box}>
                  <Typography
                     variant="h2"
                     component="h2"
                     gutterBottom={true}
                     className={classes.header2}
                     sx={{ fontWeight: 600 }}
                  >
                     Explore Popular Jobs
                  </Typography>
                  <Typography
                     variant="h6"
                     component="h3"
                     className={classes.subHeader2}
                     sx={{ fontWeight: 500 }}
                  >
                     Get the most exciting jobs around the world and grow your
                     career fast with others
                  </Typography>
               </Box>
               <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  className={classes.iconBox}
               >
                  {popularJobs.map((item, idx) => (
                     <Link to={'/jobs'} className={classes.link} key={idx}>
                        <Card
                           sx={{
                              minWidth: 220,
                              m: 1.5,
                           }}
                        >
                           <CardActionArea className={classes.cards}>
                              <Typography className={classes.muiIcon}>
                                 {item.icon}
                              </Typography>
                              <CardContent>
                                 <Typography
                                    gutterBottom
                                    variant="h4"
                                    component="div"
                                    sx={{
                                       fontSize: '1.2rem',
                                       textAlign: 'center',
                                       mb: 2,
                                       fontWeight: 500,
                                    }}
                                 >
                                    {item.prof}
                                 </Typography>
                                 <Typography
                                    variant="body1"
                                    align="center"
                                    color="#323232"
                                    sx={{ fontWeight: 500, mb: 1 }}
                                 >
                                    {item.number}
                                 </Typography>
                              </CardContent>
                           </CardActionArea>
                        </Card>
                     </Link>
                  ))}
               </Grid>
            </Grid>
         </Box>
      </Box>
   );
}

export default Home;
