import PropTypes from "prop-types";
import { GrLocation } from "react-icons/gi";

const Job = ({ job }) => {
  console.log(job);
  const {
    id,
    logo,
    job_title,
    company_name,
    location,
    salary,
    remote_or_onsite,
    job_type,
  } = job;
  return (
    <div className=" space-y-6">
      <div>
        <img src={logo} />
      </div>
      <div className="space-x-3">
        <h3 className="text-2xl font-extrabold">{job_title}</h3>
        <p className="font-semibold text-xl text-[#757575]">{company_name}</p>
      </div>
      <div className=" flex gap-5 ">
        <p className="text-[9873ff] px-5 py-2 font-extrabold border rounded ">
          {remote_or_onsite}
        </p>
        <p className="text-[7E90FE] px-5 py-2 font-extrabold border rounded ">
          {job_type}
        </p>
      </div>
      <div>
        <div className="flex items-center gap-2">
          <GrLocation></GrLocation>
          <p>{location}</p>
        </div>
        <div>
          <p>{salary}</p>
        </div>
      </div>
    </div>
  );
};

Job.propTypes = {
  job: PropTypes.object,
};

export default Job;
