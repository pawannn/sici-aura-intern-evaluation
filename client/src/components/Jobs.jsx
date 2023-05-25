import { useEffect, useState } from 'react';
import search from '../assets/vector.png'
import Jobcard from './Jobcard';

const Jobs  = () => {
    const [jobs, setJobs] = useState(null);
    const fetchJobs = async () => {
        const jobsData = await fetch('/jobs');
        setJobs(await jobsData.json());
    }

    useEffect(() => {
        fetchJobs();
    }, []);

    return(
        <div className="jobs-container">
            <div className="job-content">
                <h1>Search for open Role</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Amet diam ipsum suspendisse gravida. Metus sit habitant amet quam risus eget consequat.</p>
            </div>
            <div className="jobs-list">
                <div className = "filter">
                    <div className = "filter-input">
                        <p>Job title</p>
                        <input type = "text" name = "job-title" placeholder="Search by Job Title"/>
                    </div>
                    <div className = "filter-input">
                        <p>Department</p>
                        <input type = "text" name = "job-title" placeholder="Select Department"/>
                    </div>
                    <div className = "filter-input">
                        <p>Location</p>
                        <input type = "text" name = "job-title" placeholder="Select Loaction"/>
                    </div>
                    <div className = "filter-input">
                        <p></p>
                        <button>
                            <img src = {search} alt = "search icon" />
                        </button>
                    </div>
                </div>
                {jobs != null ? <>
                    {jobs.map((job, key) => (
                        <div className='job-detail' key = {key}>
                            <Jobcard {...job} />
                        </div>
                    ))}
                </> : <></>}
                {/* <div className='job-detail'>
                    <Jobcard />
                </div>
                <div className='job-detail'>
                    <Jobcard />
                </div>
                <div className='job-detail'>
                    <Jobcard />
                </div> */}
            </div>
        </div>
    )
}

export default Jobs;