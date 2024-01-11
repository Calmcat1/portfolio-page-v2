import {Navigation_bar, Hero_section, Intro_section, Tech_stack_section_1, Tech_stack_section_2, Projects_section, Footer_section, Mobile_Nav, Ellipse_container} from './components';
import './App.css';

function App() {
  return (
    <div className="app">
      <Mobile_Nav />
      <Ellipse_container />
      <div className='main__container'>
        <Navigation_bar />
        <Hero_section />
        <Intro_section />
        <Tech_stack_section_1 />
        <Tech_stack_section_2 />
        <Projects_section />
      </div>
      <Footer_section />
    </div>
  );
}

export default App;
