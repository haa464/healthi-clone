import React from 'react'

const Strength = () => {
  return (
    <div className='stregth_cnt'>
        <div className="headder-stgth">
            <h2 className='text-center'>Strength in numbers</h2>
        </div>
        <div className="cnt-strgth">
            <div className="row">
                <div className="col-lg-4">
                    <div className="strght-box">
                        <img src="https://assets-global.website-files.com/62c72bb094e64b5db4bded81/6467c1685a178810791a5098_Food_compressed.webp" alt="" />
                        <h4 className='count_h4 color-1'>11,60,000</h4>
                        <p className='count_p color-1'>Foods tracked this year</p>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="strght-box">
                        <img src="https://assets-global.website-files.com/62c72bb094e64b5db4bded81/6467c16c5a178810791a5464_Rating_compressed-p-500.webp" alt="" />
                        <h4 className='count_h4 color-2'>1,58,000</h4>
                        <p className='count_p color-2'>Foods tracked this year</p>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="strght-box">
                        <img src="https://assets-global.website-files.com/62c72bb094e64b5db4bded81/6467c1712e70575069ffe117_Scale_compressed-p-500.webp" alt="" />
                        <h4 className='count_h4 color-3'>40,000</h4>
                        <p className='count_p color-3'>Foods tracked this year</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="d-block m-auto text-center mt-10">
        <a className='btn_des' href="https://account.healthiapp.com/signup">Sign up to join us</a>
        </div>

        <div className="second_desing">
            <div className="sec-img">
                <img src="https://assets-global.website-files.com/62c72bb094e64b5db4bded81/62d816c217f57f19baa78502_Success%20story-p-500.png" alt="img-1" />
            </div>
            <div className="ther-img">
                <img src="https://assets-global.website-files.com/62c72bb094e64b5db4bded81/644c30da6c26133ec10c242f_Success%20story%20images2-p-1080.png" alt="" />
            </div>
        </div>

        <div className="d-block m-auto text-center mt-10">
        <a className='btn_des' href="https://account.healthiapp.com/signup">Become a Success Story</a>
        </div>
    </div>
  )
}

export default Strength