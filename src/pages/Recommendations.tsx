import React from 'react';
import './Recommendations.css';
import chrisProfilePic from '../images/chris.jpg'; // Adjust the path based on your directory structure

const Recommendations: React.FC = () => {
  return (
    <div className='timeline-container'>
      <div className="recommendation-card">
        <div className="recommendation-header">
          <img src={chrisProfilePic} alt="Reference Person" className="profile-pic" />
          <div>
            <h3>Mahesh Babu</h3>
            <p>CEO</p>
            <p className="date">2025-01-01</p>
          </div>
        </div>
        <div className="recommendation-body">
          <p>✨ "It is with great pleasure that I write this reference for Chakravarthi, who worked with us as a software developer. Their performance was consistently excellent."</p>
          <p>During their time with us,Chakravarthi  demonstrated strong technical expertise, a passion for problem-solving, a willingness to learn, and a collaborative spirit that greatly contributed to our team's success. They played a pivotal role in developing and maintaining key features of our software, consistently delivering high-quality code while meeting project deadlines."</p>
          <p>💼 "Chakravarthi also showed exceptional teamwork and communication skills, effectively collaborating with cross-functional teams, including product managers, designers, and QA. Their professionalism, positive attitude, and dedication to their work made them an asset to the team."</p>
          <p>🌟 "I have no doubt that Chakravarthi will be a valuable addition to any organization, and I wholeheartedly recommend them for any future opportunities."</p>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
