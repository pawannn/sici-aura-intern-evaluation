import image1 from '../../assets/introduction/image1.png'
import image2 from '../../assets/introduction/image2.png'
import image3 from '../../assets/introduction/image3.png'
import image4 from '../../assets/introduction/image4.png'
import image5 from '../../assets/introduction/image5.png'
import image6 from '../../assets/introduction/image6.png'

const Introimage = () => {
    return(
        <div className="introimage-container">
            <img src = {image2} alt = "image2" className='image2'/>
            <img src = {image3} alt = "image3" className='image3'/>
            <img src = {image1} alt = "image1" className='image1'/>
            <img src = {image4} alt = "image4" className='image4'/>
            <img src = {image5} alt = "image5" className='image5'/>
            <img src = {image6} alt = "image6" className='image6'/>
        </div>
    )
}

export default Introimage