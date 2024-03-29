import React from 'react'
import './fotter.css'
import ftlogo from '../../assets/color_logo.svg'

const Fotter = () => {
  return (
    <div className='fotter-cnt'>
        <div className="fnt-design">
            <div className="img-ftr">
                <img src={ftlogo} alt="" className="logo-ft" />
            </div>
            <div className="app-img">
             <img src="https://assets-global.website-files.com/62c72bb094e64b5db4bded81/6344810005ca3ed162d4017e_download_ios.svg" alt="play store" className="app-1" />
             <img src="https://assets-global.website-files.com/62c72bb094e64b5db4bded81/63448105e7f14b0ac0937ae1_download_android.svg" alt="play store" className="app-" />

            </div>
            <div className="fty-link-cnt">
                <div className="ftrt-link">
                    <div class="ftralink padding10"><h6>Weight loss plans</h6><a href="/weight-loss-plans/carb-conscious">Discover Carb Conscious</a><a href="/weight-loss-plans/conquer-cravings">Discover Conquer Cravings</a><a href="/weight-loss-plans/sugar-smart">Discover Sugar Smart</a><a href="/weight-loss-plans/better-balance">Discover Better Balance</a><a href="/weight-loss-plans/calorie-command">Discover Calorie Command</a><a href="/weight-loss-plans/keeping-keto">Discover Keeping Keto</a><a href="/weight-loss-plans/references">Scientific References</a></div>
                    <div class="ftralink padding10"><h6>Lists and Guides</h6><a href="/weight-loss-plans/restaurant-guides">Restaurant Guides</a><a href="/weight-loss-plans/zero-bites">Zero BITES Lists</a><a href="/weight-loss-plans/zero-bites">Onboarding</a></div>
                    <div class="ftralink padding10"><h6>Healthi App</h6><a href="/healthi-find-your-plan">Find your Plan</a><a href="/how-it-works">How it Works</a><a href="/healthi-success-stories">Success Stories</a></div>

                    <div class="ftralink padding10"><h6>Community</h6><a href="https://healthiapp.com/blog/">Blog</a><a href="/healthi-coaches">Coaches</a><a href="/members">Member Meetings</a><a href="/podcast-and-social">Podcast</a></div>

                    <div class="ftralink padding10"><h6>Shop</h6><a href="https://shop.healthiapp.com/" target="_blank">Healthi Shop</a></div>

                    <div class="ftralink padding10"><h6>Other Services</h6><a href="/healthicare">HealthiCare</a><a href="/healthi-corporate">Healthi Corporate</a></div>

                    <div class="ftralink padding10"><h6>About us</h6><a href="/healthi-about-us">About us</a><a href="/healthi-team">The Team</a><a href="https://help.healthiapp.com/support/home">Help ⎆</a><a href="/design-system">Design System ⎆</a></div>
                </div>

                <div className="text-block-8-copy">© 2024 SUNSHINE HEALTH STUDIOS INC. ALL RIGHTS RESERVED.</div>

                <div className="social-media-links">
                    <a href="https://www.youtube.com/c/healthiapp">
                        <img src="https://assets-global.website-files.com/62c72bb094e64b5db4bded81/634484f2430dda69f5c7ae3a_Youtube.svg" loading="lazy" alt="" />
                    </a>
                    <a href="https://www.youtube.com/c/healthiapp">
                        <img src="https://assets-global.website-files.com/62c72bb094e64b5db4bded81/634484f6f545c42b98c65256_Instagram.svg" loading="lazy" alt="" />
                    </a>
                    <a href="https://www.youtube.com/c/healthiapp">
                        <img src="https://assets-global.website-files.com/62c72bb094e64b5db4bded81/634484f9ae547df7e73051a2_Facebook.svg" loading="lazy" alt="" />
                    </a>
                    <a href="https://www.youtube.com/c/healthiapp">
                        <img src="https://assets-global.website-files.com/62c72bb094e64b5db4bded81/634484eef545c4b840c65235_Pinterest.svg" loading="lazy" alt="" />
                    </a>
                </div>

                <div className="horizontal-list"><a href="https://healthiapp.com/about/terms-of-service">Terms of Service</a><a href="https://healthiapp.com/about/privacy-policy">Privacy Policy</a></div>


                <div className="d-block m-auto text-center mt-3">
                    <a className='btn_des' href="https://account.healthiapp.com/signup">Sign up to join us</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Fotter