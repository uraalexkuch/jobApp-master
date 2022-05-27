import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Jobs from './pages/Jobs';

import Footer from './components/Footer';
import { theme } from './CustomTheme';
import ScrollToTop from './components/jobFolder/ScrollToTop';
import {
   createTheme,
   responsiveFontSizes,
   ThemeProvider,
} from '@mui/material/styles';

function App() {
   return (
      <ThemeProvider theme={theme}>
         <Router>
            <ScrollToTop />
            <Navbar />
            <Routes>
               <Route exact path="/" element={<Home />} />
               <Route exact path="/jobs" element={<Jobs />} />

            </Routes>
            <Footer />
         </Router>
      </ThemeProvider>
   );
}

export default App;
