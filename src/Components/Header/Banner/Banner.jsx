import img from '../../../assets/Group 12.jpg'
import './Banner.css'
const Banner = () => {

    return (
        <div className='banner'>
            <div className="right">
                <p className='off'>Sale up to 70% off</p>
                <h1>New Collection For Fall</h1>
                <p>Discover all the new arrivals of ready-to-wear collection.</p>
                <button>SHOP NOW</button>
            </div>
            <div className="left">
                <img src={img} alt="" />
            </div>

        </div>
    )
}

export default Banner;