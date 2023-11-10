import React from 'react';
import './Aboutus.css';
import { Element } from 'react-scroll';
import ImageSlider from '../Imgslider/ImageSlider';
import { SliderData } from '../Imgslider/SliderData';

const Aboutus = () => {

  return (
    <div className='rr'>
      <Element className='about' name='about'>
        <div className='about-us'>
          <h1>About Shanka Educational Academy</h1>
          <p>
            At <strong>Shanka Educational Academy</strong>, we are dedicated to addressing the growing demand for skilled professionals in today's fiercely competitive job market. Our academy stands as a bridge between the aspiring job seekers and their desired career opportunities.
          </p>

          <h2>Introduction:</h2>
          <p>
            In a job market marked by rapid technological advancements and evolving industry needs, job seekers often face challenges in acquiring the skills required by employers. <strong>Shanka Educational Academy</strong> has been meticulously conceived to tackle this issue head-on. We offer high-quality training programs and comprehensive career placement support.
          </p>

          <h2>Our Vision</h2>
          <p>
            <strong>Vision:</strong> Empowering individuals with the knowledge and skills needed for successful careers and lifelong learning.
          </p>

          <h2>Our Mission</h2>
          <p>
            <strong>Mission:</strong> To provide accessible, affordable, and industry-relevant training that paves the way for employment and career advancement.
          </p>

          <h2>Our Values</h2>
          <p>
            <strong>Values:</strong> We are guided by unwavering commitments to excellence, inclusivity, innovation, and relentless improvement in all our endeavors.
          </p>

          <h2>Objectives</h2>
          <p>
            Our objectives include:
          </p>
          <ul>
            <li>Equipping participants with practical skills and knowledge through our training programs.</li>
            <li>Facilitating job placements for graduates through our extensive industry connections.</li>
            <li>Fostering a culture of lifelong learning and career development.</li>
            <li>Contributing to the economic growth of our community by meeting the ever-increasing demand for skilled professionals.</li>
          </ul>

          <h2>Target Audience</h2>
          <p>
            Our academy warmly welcomes a diverse range of individuals, including:
          </p>
          <ul>
            <li>Recent graduates eager to kickstart their careers.</li>
            <li>Career changers who are ready to explore new opportunities.</li>
            <li>Those seeking to upskill or reskill to meet the ever-changing demands of the job market.</li>
          </ul>

          <p>
            At <strong>Shanka Educational Academy</strong>, we are committed to your success, and our mission is to help you thrive in today's competitive job market.
          </p>
        </div>
        <div className='igg'>
          <ImageSlider slides={SliderData} />
        </div>
      </Element>
    </div>
  );
};

export default Aboutus;
