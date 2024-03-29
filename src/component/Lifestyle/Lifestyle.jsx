import React from 'react'

const Lifestyle = () => {
  return (
    <div className='lefe-place'>
        <h2 className='text-center'>Healthi lifestyle</h2>
        <div className="life_design">

            <div className="row">
                <div className="col-lg-4">
                    <div className="life_box">
                        <img src="https://assets-global.website-files.com/62c72bb094e64b5db4bded81/6467bfc140fd2c17e72c510c_Image%201-p-500.webp" alt="classic-img" />
                        <p className='text-left'>Studies show that 88% of people who track their food consistently, see weight loss results in just 7 days!</p>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="life_box">
                        <img src="https://assets-global.website-files.com/62c72bb094e64b5db4bded81/6467bfc56d3e323f8f514f3e_Image%202.webp" alt="classic-img" />
                        <p className='text-left'>With the right tools and some encouragement, we can all be a success story!</p>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="life_box">
                        <img src="https://assets-global.website-files.com/62c72bb094e64b5db4bded81/6467bfc90d640f6658392304_Image%203.webp" alt="classic-img" />
                        <p className='text-left'>Find the support you need with our members and coaches. Join a community of thousand of users looking for a healthier life.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="d-block m-auto text-center mt-10">
        <a className='btn_des' href="https://account.healthiapp.com/signup">Sign up to join us</a>
        </div>
    </div>
  )
}

export default Lifestyle