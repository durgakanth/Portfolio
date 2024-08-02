import React from 'react';
import './Project.css';
import Aos from 'aos';


function Project(){
    Aos.init();
    return(
        <>
            <section id="project">
                <div className='project'>
                    <h2 data-aos="fade-right" data-aos-duration="1500" data-aos-delay="500">Projects</h2>
                    <div className='project-cards'>
                        <div className='project-card' data-aos="fade-right" data-aos-duration="1500" data-aos-delay="500">
                            <img src="https://i.ibb.co/dr8L3XC/images.jpg" alt="project-img" />
                            <div>
                                <h4>Personal Portfolio</h4>
                                <a href="#">Live Demo<i className='fa-solid fa-arrow-right-long'></i></a>
                            </div>
                        </div>
                        <div className='project-card' data-aos="fade-left" data-aos-duration="1500" data-aos-delay="500">
                            <img src="https://i.ibb.co/qDDHSVh/Sorting.png" alt="project-img" />
                            <div>
                                <h4>Sorting Visualizer</h4>
                                <a href="https://clementmihailescu.github.io/Sorting-Visualizer/" target='_blank'>Live Demo <i className='fa-solid fa-arrow-right-long'></i></a>
                            </div>
                        </div>
                        <div className='project-card' data-aos="fade-right" data-aos-duration="1500" data-aos-delay="700">
                            <img src="https://i.ibb.co/dgPYqdx/g.png" alt="project-img" />
                            <div>
                                <h4>E-commerce Shopping</h4>
                                <a href="https://github.com/durgakanth/Online-Grocery-Management" target='_blank'>Live Demo <i className='fa-solid fa-arrow-right-long'></i></a>
                            </div>
                        </div>
                        <div className='project-card' data-aos="fade-left" data-aos-duration="1500" data-aos-delay="700">
                            <img src="https://i.ibb.co/7tDgrPz/poweredby.png" alt="project-img" />
                            <div>
                                <h4>YouTube Transcript Summarizer</h4>
                                <a href="https://github.com/durgakanth/Transcript-Summarizer-for-Youtube" target='_blank'>Live Demo <i className='fa-solid fa-arrow-right-long'></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Project;
