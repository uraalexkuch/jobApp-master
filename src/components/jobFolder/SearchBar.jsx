import React, { useContext, useEffect } from 'react';
import {
   Select,
   MenuItem,
   FormControl,
   InputLabel,
   OutlinedInput,
   Box,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { JobsContext } from './JobsContext';
import SearchIcon from '@mui/icons-material/Search';

const useStyles = makeStyles((theme) => ({
   container: {
      width: 'max(85%)',
      margin: 'auto',
      display: 'flex',
      gap: '1rem',
      [theme.breakpoints.down('lg')]: {
         width: 'max(90%)',
      },
   },

   inputStyle: {
      position: 'relative',
   },

   formControl1: {
      width: 'clamp(15rem, 30%, 20rem)',
   },
   formControl2: {
      width: '50%',
   },

   searchIcon: {
      position: 'absolute',
      right: '5%',
      top: '15%',
      color: theme.palette.third.main,
   },
}));



function SearchBar() {
   const {
      jobs,
      setJobs,
      data,
      setData,
      searchText,
      setSearchText,
      category,
      setCategory,
      categoryRegion,
      setCategoryRegion,
      categoryLabelRegion,
      categoryLabel,
      setCategoryLabelRegion,
      setPageNumber,
   } = useContext(JobsContext);




   const handleSearch = (e) => {
      setSearchText(e.target.value);
   };

   const handleKeyDown = (e) => {
      //const reg = /[a-zA-Z0-9]/g;
      if (e.key === 'Enter') {
         setJobs(
            jobs.filter(
               (job) =>
                  job.prof
                     .toLowerCase()
                     .includes(searchText.toLocaleLowerCase()) ||
                  job.vacopis
                     .toLowerCase()
                     .includes(searchText.toLocaleLowerCase()) ||
                  job.region
                     .toLowerCase()
                     .includes(searchText.toLocaleLowerCase())
            )
         );
         setPageNumber(0);
      }
      if (searchText === '' ) {
         category === 0
            ? setJobs(data)
            : setJobs(
                 data.filter((job) =>
                    job.otrasl.toLowerCase().includes(category.toLowerCase())
                 )
              );
      }
      if (searchText === '' ) {
         categoryRegion === 0
             ? setJobs(data)
             : setJobs(
             data.filter((job) =>
                 job.region.toLowerCase().includes(categoryRegion.toLowerCase())

             )
             );
         console.log(categoryRegion.toLowerCase())
      }
   };

   const handleCategory = (e) => {
      setCategory(e.target.value);
      setJobs(data);
   };
   const handleCategoryRegion = (e) => {
      setCategoryRegion(e.target.value);
      console.log(e.target.value)
      setJobs(data);
   };
   const classes = useStyles();

   useEffect(() => {
      if (category !== 0) {
         setJobs(
            jobs.filter((job) =>
               job.otrasl.toLowerCase().includes(category.toLocaleLowerCase())
            )
         );
         setPageNumber(0);
      } else setJobs(data);
   }, [category]);
   useEffect(() => {
      if (categoryRegion!== 0) {
         setJobs(
             jobs.filter((job) =>
                 job.region.toLowerCase().includes(categoryRegion.toLocaleLowerCase())
             )
         );
         setPageNumber(0);
      } else setJobs(data);
   }, [categoryRegion]);
   useEffect(() => {
      console.log('working');
   }, [jobs]);

   console.log(  category)
   console.log(  data)

   console.log(  categoryLabelRegion)
   return (
      <>
         <Box className={classes.container} sx={{ mt: 10 }}>
            <FormControl size="small" className={classes.formControl2}>
               <InputLabel htmlFor="jobs" className={classes.inputLabel}>
                 Пошук за назвою
               </InputLabel>
               <OutlinedInput
                   label="Search for Jobs"
                   variant="outlined"
                   onChange={handleSearch}
                   onKeyPress={handleKeyDown}
                   placeholder="Введіть назву"
                   value={searchText}
                   sx={{ borderRadius: 5, position: 'relative' }}
               />{' '}
               <SearchIcon
                   className={classes.searchIcon}
                   sx={{
                      fontSize: 25,
                   }}
               />
            </FormControl>
            <FormControl size="small" className={classes.formControl1}>
               <InputLabel htmlFor="categories">Регіон</InputLabel>

               <Select
                  labelId="demo-simple-select-label"
                  label="categoryRegion"
                  variant="outlined"
                  sx={{ borderRadius: 5 }}
                  className={classes.inputStyle}
                  onChange={handleCategoryRegion }
                  value={categoryRegion}
               >
                  <MenuItem value={0}>{'Всі'}</MenuItem>

                {categoryLabelRegion .map((item, idx) => (
                     <MenuItem key={idx} value={item}>
                        {item}
                     </MenuItem>
                  ))}
               </Select>
            </FormControl>
            <FormControl size="small" className={classes.formControl1}>
               <InputLabel htmlFor="categories">Галузь</InputLabel>

               <Select
                   labelId="demo-simple-select-label"
                   label="category"
                   variant="outlined"
                   sx={{ borderRadius: 5 }}
                   className={classes.inputStyle}
                   onChange={handleCategory}
                   value={category}
               >
                  <MenuItem value={0}>{'Всі'}</MenuItem>

                  {categoryLabel.map((item, idx) => (
                      <MenuItem key={idx} value={item}>
                         {item}
                      </MenuItem>
                  ))}
               </Select>
            </FormControl>

         </Box>
      </>
   );
}

export default SearchBar;
