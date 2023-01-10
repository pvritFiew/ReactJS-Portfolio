import './skill.css'
import python from '../Image/python.png'
import java from '../Image/java.png'
import c_lang from '../Image/c_lang.png'
import javascritp from '../Image/javascript.png'
import ReactJS from '../Image/ReactJS.png'
import sql from '../Image/sql.png'
import github from '../Image/github.png'

const skill = () => {
    return(
        <div className='bg'>
        <div className="container">
            <h2>Skill & 
                <span> Ability</span>
            </h2>

            <div className='box'>
                <div className='skill_container'>
                    <div className='skill'>
                        <img src={python} alt=""/>
                        <span>Python</span>
                    </div>
                </div>
                
                <div className='skill_container'>
                    <div className='skill'>
                        <img src={java} alt=""/>
                        <span>Java</span>
                    </div>
                </div>
                
                <div className='skill_container'>
                    <div className='skill'>
                        <img src={javascritp} alt=""/>
                        <span>Javascript</span>
                    </div>
                </div>
                <div className='skill_container'>
                    <div className='skill'>
                        <img src={c_lang} alt=""/>
                        <span>C</span>
                    </div>
                </div>
                <div className='skill_container'>
                    <div className='skill'>
                        <img src={sql} alt=""/>
                        <span>SQL</span>
                    </div>
                </div>
                <div className='skill_container'>
                    <div className='skill'>
                        <img src={ReactJS} alt=""/>
                        <span>ReactJS</span>
                    </div>
                </div>
                <div className='skill_container'>
                    <div className='skill'>
                        <img src={github} alt=""/>
                        <span>Github</span>
                    </div>
                </div>
                <div className='skill_container'>
                    <div className='skill'>
                        <img src='https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png' alt=''/>
                        <span>NodeJS</span>
                    </div>
                </div>
                
            </div>
            
        </div>
        </div>
    )
}

export default skill;