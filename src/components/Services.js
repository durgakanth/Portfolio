import React from 'react';
import './Services.css';
import Aos from 'aos';


function Services(){
    Aos.init();
    return(
        <>
         <section id="services">
            <div className='services'>
                <h2 data-aos="fade-right" data-aos-duration="1500" data-aos-delay="100">Education</h2>
                <div className='services-cards'>
                    <div className='services-card' data-aos="fade-right" data-aos-duration="1500" data-aos-delay="100">
                    {/* <i className='fa-solid fa-code' id="icon"></i> */}
                    <i class="fa-solid fa-user-graduate" id="icon"></i>
                    <h3>GMRIT (2021-2025)</h3>
                    <p>Rajam</p>
                    <p>BTech</p>
                    <p>Information Technology</p>
                    <p>JNTU-GV</p>
                    
                    {/* <a href="#">
                        Read More <i className='fa-solid fa-arrow-right-long'></i>
                    </a> */}
                </div>
                <div className='services-card' data-aos="fade" data-aos-duration="1500" data-aos-delay="500">
                    <i class="fa-solid fa-computer" id="icon"></i>
                    <h3>Narayana Junior College(2019-2021)</h3>
                    <p>Vishakapatnam</p>
                    <p>Intermediate</p>
                    <p>MPC</p>
                    <p>BIEAP</p>
                    
                    {/* <a href="#">
                        Read More <i className='fa-solid fa-arrow-right-long'></i>
                    </a> */}
                </div>
                <div className='services-card' data-aos="fade-left" data-aos-duration="1500" data-aos-delay="100">
                <i className='fa-solid fa-code' id="icon"></i>
                    <h3>Sri Sarada Vidya Niketan(2018-2019)</h3>
                    <p>Sompeta</p>
                    <p>Metriculation</p>
                    <p>SSC</p>
                    
                    
                    {/* <a href="#">
                        Read More <i className='fa-solid fa-arrow-right-long'></i>
                    </a> */}
                </div>
                </div>
            </div>
         </section>
        </>
    )
}
export default Services;
