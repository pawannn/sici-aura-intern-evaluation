import Location from '../assets/Location.png';
import Job from "../assets/job.png";

const Jobcard = (props) => {
    return (
        <div className="job">
            <div className='details'>
                <h2>{props.role}</h2>
                <div style={{display: "flex", gap: "30px"}}>
                    <div style={{display: 'flex', gap: "10px", justifyContent: "center", alignItems: "center"}}>
                    <img src = {Location} alt = "location"/>
                    <p>{props.location}</p>
                    </div>
                    <div style={{display: 'flex', gap: "10px", justifyContent: "center", alignItems: "center"}}>
                    <img src={Job} alt="job"/>
                    <p>{props.minexp} - {props.maxexp} Years</p>
                    </div>
                </div>
            </div>
            <button>View Job</button>
        </div>
    )
}

export default Jobcard