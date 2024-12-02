import React from 'react';
import JobCard from './JobCard';
import useJobStore from '../../Store/useJobStore';


const JobLists = () => {
  const jobs = useJobStore((state) => state.jobs);

  return (
    <div className="job-list">
      {jobs.length > 0 ? (
        jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))
      ) : (
        <p>No job listings available. Please add a job!</p>
      )}
    </div>
  );
};

export default JobLists;

// import React, { useState } from 'react';
// import JobCard from './JobCard';
// import useJobStore from '../../Store/useJobStore';
// import './JobLists.css';

// const JobLists = () => {
//   const jobs = useJobStore((state) => state.jobs);
//   const [currentPage, setCurrentPage] = useState(1);
//   const jobsPerPage = 6; // Number of jobs to display per page

//   // Get current jobs to display
//   const indexOfLastJob = currentPage * jobsPerPage;
//   const indexOfFirstJob = indexOfLastJob - jobsPerPage;
//   const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

//   // Change page handler
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div>
//       <div className="job-list">
//         {currentJobs.length > 0 ? (
//           currentJobs.map((job) => (
//             <JobCard key={job.id} job={job} />
//           ))
//         ) : (
//           <p>No job listings available. Please add a job!</p>
//         )}
//       </div>

//       {/* Pagination */}
//       <div className="pagination">
//         {Array.from({ length: Math.ceil(jobs.length / jobsPerPage) }).map((_, index) => (
//           <button
//             key={index}
//             onClick={() => paginate(index + 1)}
//             className={currentPage === index + 1 ? 'active' : ''}
//           >
//             {index + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default JobLists;
