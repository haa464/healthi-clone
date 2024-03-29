import './App.css'
import Hero from './component/Hero/Hero'
import Header from './component/Header/Header'
import Topheader from './component/Topheader/Topheader'
import Weightloss from './component/Weightloss/Weightloss'
import Lifestyle from './component/Lifestyle/Lifestyle'
import Strength from './component/Strength/Strength'
import Pocket from './component/Pocket/Pocket'
import Lastcnt from './component/Lastcnt/Lastcnt'
import Fotter from './component/Fotter/Fotter'
import { useEffect, useState } from 'react'

function App() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <div className="healthiapp_clone">
      <div className={`${isScrolled ? 'top_clone sticked-header' : 'top_clone'}`}>
        <Topheader />
        <Header />
      </div>
      <div className="inner_cnt">
        <Hero />
        <Weightloss />
        <Lifestyle />
        <Strength />
        <Pocket />
        <Lastcnt />
      </div>
      <div className="ft-clone">
        <Fotter />
      </div>
    </div>
    </>
  )
}

export default App
