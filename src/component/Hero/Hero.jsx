import React from 'react'
import './hero.css'
import Hero1 from '../../assets/hero_1.png'
import Hero2 from '../../assets/hero_2.png'
import Img1 from '../../assets/1_brabd.png'
import Img2 from '../../assets/2_brabd.png'
import Img3 from '../../assets/3_brabd.png'
import Img4 from '../../assets/4_brabd.png'



const Hero = () => {
  return (
    <div className='hero_desing'>
        <div className="hero-cnt">
            <div >
                <div className="row">
                    <div className="col-lg-4">
                        <img className='imghero_1' src={Hero1} alt="Lose weight the Healthi way" />
                    </div>
                    <div className="col-lg-8">
                        <div className="sec_part">
                            <div className="awards_img">
                                <img width={305} src={Hero2} alt="awards" />
                            </div>
                            <div className="title_header">
                                <h1 className='title_h1'>Lose weight the Healthi way</h1>
                                <p className='par_p'>6 Science Based plans, the easiest to use app, and a supportive community - reach your goals and transform your health.</p>
                            </div>
                            <div className="btn_hero">
                                <a className='btn_des' href="https://account.healthiapp.com/signup">Get started for free!</a>
                            </div>
                            <div className="branding-img">
                                <h3>Featured in:</h3>
                                <div className="img_brangin d-flex">
                                    <div className="logo_img">
                                        <img className='img_1' src={Img1} alt="" />
                                    </div>
                                    <div className="logo_img">
                                        <img className='image-fliter' src={Img2} alt="" />
                                    </div>
                                    <div className="logo_img">
                                        <img className='img_1' src={Img3} alt="" />
                                    </div>
                                    <div className="logo_img">
                                        <img className='img_1' src={Img4} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero