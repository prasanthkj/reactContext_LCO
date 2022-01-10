mport React, {useState} from 'react';
import ThemeContext from './Context/ThemeContext';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';


const App = ()=>{
  const [themeHook, setThemeHook] = useState("light");
  return (
    // console.log(themeHook);
    <ThemeContext.Provider value={{data:[themeHook]}}>
      <div>
        <Header/>
        <HeroSection/>
      </div>
    </ThemeContext.Provider>
  )
}

export default App;
