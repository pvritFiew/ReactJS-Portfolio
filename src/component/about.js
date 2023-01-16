import './about.css'
import imgA from '../Image/me1.jpg'
const about = () => {
    return(
        <div className='container'>
            <h1>About Me</h1>
            <div className='Image'>
                <img src={imgA} alt=""/>
            </div>
            <h3>Phoovarit Srimahadthai</h3>
            <p className='infomation'>I'm a student in bachelor of Engineering, Software Engineering at Thammasat University Rangsit Center, 
                I am passionate about improving my coding skills & developing applications & websites, 
                and trying to learn new things in technical skills.
            </p>
            
            <div className='box_container'>

            

            <div className='info_box'>
                <p>
                    <span>Age : </span>
                    20
                </p>
                <p>
                    <span>Email : </span>
                    phoo.varitsth@gmail.com
                </p>
            </div>

            <div className='info_box'>
                <p>
                    <span>Phone : </span>
                    094 - 436 - 4861
                </p>
                <p>
                    <span>Place : </span>
                    Samut songkram, 75000, Thailand
                </p>
            </div>
            </div>
        </div>
    )
}

export default about;