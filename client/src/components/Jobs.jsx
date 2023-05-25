import search from '../assets/vector.png'

const Jobs  = () => {
    return(
        <div className="jobs-container">
            <div className="job-content">
                <h1>Search for open Role</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Amet diam ipsum suspendisse gravida. Metus sit habitant amet quam risus eget consequat.</p>
            </div>
            <div className="jobs-list">
                <div class = "filter">
                    <div class = "filter-input">
                        <p>Job title</p>
                        <input type = "text" name = "job-title" placeholder="Search by Job Title"/>
                    </div>
                    <div class = "filter-input">
                        <p>Department</p>
                        <input type = "text" name = "job-title" placeholder="Select Department"/>
                    </div>
                    <div class = "filter-input">
                        <p>Location</p>
                        <input type = "text" name = "job-title" placeholder="Select Loaction"/>
                    </div>
                    <div class = "filter-input">
                        <p></p>
                        <button>
                            <img src = {search} alt = "search icon" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jobs;