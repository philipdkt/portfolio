import React from 'react';
import {motion} from 'framer-motion'
import dag from '../images/dag.jpeg'; // Adjust the path if necessary
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function About() {
    // Define skills
    const AllSkills = [
        { skill: 'Web Development' },
        { skill: 'Mobile App Development' },
        { skill: 'Data Science' },
        { skill: 'Artificial Intelligence' },
    ];

    return (
        <div id="about" className='px-[10%] flex mt-[10%] gap-32 h-screen items-start'>
            {/* Left Section: Image */}
            <motion.div 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 1.5 } }}
            viewport={{ once: true }}
            className='flex w-[30%] justify-center'>
                <img src={dag} alt='PersonalPhoto' className='w-full h-auto object-cover' />
            </motion.div>

            {/* Right Section: Content */}
            <div className='flex flex-col w-[70%] text-left'>
                {/* About Me Title */}
                <motion.p
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1, transition: { duration:
                    1.5 } }}
                    viewport={{ once: true }}
                 className='text-6xl font-bold tracking-widest'>
                    ABOUT <span className='text-red-500'>ME</span>
                </motion.p>

                {/* Description Section */}
                <motion.div 
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1, transition: { duration: 1.5 } }}
                viewport={{ once: true }}
                className='mt-8 text-3xl'>
                    <p className='text-gray-400 leading-10'>
                        Hello! I'm Philip-Dag Thompson. I'm a web developer, and I'm very passionate and
                    </p>
                    <p className='text-gray-400 leading-10'>
                        dedicated to my work. With 20 years(HEHE) of experience as a professional web
                    </p>
                    <p className='text-gray-400 leading-10'>
                        developer, I have acquired the skills and knowledge necessary to make your
                    </p>
                    <p className='text-gray-400 leading-10'>
                        project a success. I enjoy every step of the design process, from discussion
                    </p>
                    <p className='text-gray-400 leading-10'>
                        and collaboration.
                    </p>
                </motion.div>

                {/* Skills Section */}
                <motion.div 
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1, transition: { duration:
                    1.5 } }}
                    viewport={{ once: true }}
                className='mt-8'>
                    <div className='grid grid-cols-2 gap-4'>
                        {AllSkills.map((skill, index) => (
                            <div key={index} className='flex items-center space-x-2'>
                                {/* Two side-by-side arrows */}
                                <FontAwesomeIcon icon={faAngleRight} className='text-3xl' />
                                <FontAwesomeIcon icon={faAngleRight} className='text-3xl' />
                                <p className='text-3xl font-bold'>{skill.skill}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default About;
