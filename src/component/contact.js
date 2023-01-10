import React from 'react'
import {AiFillGithub , AiFillLinkedin, } from 'react-icons/ai'
import { IoCall, IoMail } from "react-icons/io5";
import {GiPositionMarker } from "react-icons/gi";
import './contact.css'

const contact = () => {
    const openWeb = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };

    return(
        <div className="container_3">
            <h2>Contact Info</h2>
            <div className="box">
                <div className='row'>
                    <div className='contact'>
                       <IoCall size="30px" />
                    </div>
                    <div className='contact'>
                        <p>+66 94 - 436 - 4861</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='contact'>
                        <IoMail size="30px"/>
                    </div>
                    <div className='contact'>
                        <p>phoovarit.sri@dome.tu.ac.th</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='contact'>
                       <GiPositionMarker size="30px"/>
                    </div>
                    <div className='contact'>
                       <p>SamutSongkram, Thailand 75000</p> 
                    </div>
                </div>
            </div>
            <div className="icon_box">
                <AiFillGithub size="50px" title='GitHub' onClick={() => openWeb('https://github.com/pvritFiew')} 
                onMouseOver={({target})=>target.style.color="rgb(186, 51, 186)"}
                onMouseOut={({target})=>target.style.color="black"}
                />
                <AiFillLinkedin size="50px" title='Linkedin' onClick={() => openWeb('https://www.linkedin.com/in/phoovarit-srimahadthai-452510250/')}
                onMouseOver={({target})=>target.style.color="rgb(79, 173, 251)"}
                onMouseOut={({target})=>target.style.color="black"}
                />

            </div>
            
        </div>
    )
}

export default contact;