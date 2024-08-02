import React from 'react';
import './About.css';
import Aos from 'aos';


function About() {
    Aos.init();
    return (
        <>
            <section id="about">
                <div className='about'>
                    <div className='about-info'>
                        <p data-aos="fade-left" data-aos-duration="1500" data-aos-delay="300">About me</p>
                        <h2 data-aos="fade-left" data-aos-duration="1500" data-aos-delay="400">DurgaKanth Dikkala</h2>
                        <h3 data-aos="fade-left" data-aos-duration="1500" data-aos-delay="500">Hi, I am <span>MERN Stack<span> Developer</span></span></h3>
                        <p data-aos="fade-left" data-aos-duration="1500" data-aos-delay="600">I'm passionate about creating beautiful, user-friendly web experiences. I have a strong understanding of HTML, CSS and Javascript, and I'm proficient in a variety of front-end frameworks, including React.</p><br></br>
                        <p data-aos="fade-left" data-aos-duration="1500" data-aos-delay="700">I'm also a strong believer in the importance of accessibility and usability. I always strive to create web applications that are accessible to everyone, regardless of their device or ability.</p>
                        <a href="https://drive.google.com/file/d/1zyFZvpx_JGEvSTh1T-BMhfnOn1ydZRhn/view?usp=sharing" target="_blank"><button data-aos="fade-left" data-aos-duration="1500" data-aos-delay="800">Download CV</button></a>
                    </div>
                </div>
            </section>
        </>
    )
}
export default About;
