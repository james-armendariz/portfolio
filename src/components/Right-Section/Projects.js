import React from 'react';

const Projects = () => {
    return (
        <section className="experince sect">
            <h2 className="right-title">Projects</h2>
            <div className="timeline">
                <div className="left-tl-content">
                    <h5 className="tl-title">Data-Driven Circuitry: Utilizing Python for Predictive Modeling and Analysis</h5>
                    <p className="para">Oct. 2023</p>
                </div>
                <div className="right-tl-content">
                    <div className="tl-content">
                        <h5 className="tl-title-2">Student Developer, Applications of AI</h5>
                        <br></br>
                        <p className="para">
                        This project integrates circuitry with Python to collect and 
                        analyze real-time data, utilizing libraries such as Pandas, 
                        Matplotlib, and regression models for predictive insights. Data 
                        captured from circuitry components was processed and formatted into 
                        Google Sheets, where regression models generated forecasts based on 
                        the observed trends. This experience built foundational skills in data 
                        manipulation, predictive modeling, and visualization, showcasing the 
                        potential of Python in hardware-based data applications.
                        </p>
                    </div>
                </div>
            </div>
            <div className="timeline">
                <div className="left-tl-content">
                    <h5 className="tl-title">Interactive Digital Portfolio</h5>
                    <p className="para">Oct. 2024</p>
                </div>
                <div className="right-tl-content">
                    <div className="tl-content">
                        <h5 className="tl-title-2">Student Developer, Personal Project</h5>
                        <br></br>
                        <p className="para">
                        To create an engaging, interactive portfolio, I transitioned 
                        from traditional HTML to React, learning its component-based structure 
                        to enhance both functionality and maintainability. In the process, I learned 
                        fundamental JavaScript, allowing me to implement dynamic animations and interactive 
                        elements that brought my portfolio to life. This project expanded my understanding of
                         front-end development, equipping me with skills in React and JavaScript that I can now 
                         apply to more advanced web projects.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Projects;