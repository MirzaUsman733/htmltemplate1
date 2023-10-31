import 'bootstrap/dist/js/bootstrap.bundle';
import Navbar from 'components/Navbar';
import './App.scss';
import HeroSection from 'components/HeroSection';
import Courses from 'components/Courses';
import Portfolio from 'components/Portfolio';
import LifeCoach from 'components/LifeCoach';
import Leader from 'components/Leader';
import Development from 'components/Development';
import Flexibility from './components/Flexibility';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <Courses/>
      <Portfolio/>
      <LifeCoach/>
      <Leader/>
      <Development/>
      <Flexibility/>
    </>
  );
}

export default App;
