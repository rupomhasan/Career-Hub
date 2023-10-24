import { useEffect, useState } from "react";
import "../../../public/jobs.json";
import Job from "../Job/Job";
const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`jobs.json`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      <h3 className="text-center font-extrabold text-5xl">
        Featured Jobs : {jobs.length}
      </h3>
      <p>
        Explore thousends of job opportunities with all the informaion you
        need.Its your future.
      </p>
      <div>
        {jobs.map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
