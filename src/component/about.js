import './about.css'
const about = () => {
    return(
        <div className='container'>
            <h1>About Me</h1>
            <h3>Phoovarit Srimahadthai</h3>
            <p className='infomation'>I'm student in bachelor of Engineering, Software Engineering in Thammasat University Rangsit Center, 
               I am passionate about improving my coding skills & developing applications & websites, 
               and trying to learning new things in technical skill.
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