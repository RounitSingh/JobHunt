// // List.js
// import React from 'react';
// import JobLists from '../Component/Jobs/JobLists';
// import Nav from '../Component/Nav';
// import Footer from '../Component/Footer';

// const JobsPage = () => {
//   return (
//     <>
//       <Nav/>
//       <div className='j-page-main'></div>
//       <h1>Job Listing</h1>
//       <JobLists />
//       <Footer/>
     
//     </>
//   );
// }

// export default JobsPage;
import React from 'react';
import JobLists from '../Component/Jobs/JobLists';
import Nav from '../Component/Nav';
import Footer from '../Component/Footer';
import "./JobsPage.css";
import FilterAccordion from '../Component/JobFilter/FilterAccordion';

const JobsPage = () => {
  return (
    <div>
      <Nav />
      <div className="j-page-main">
        {/* Search Section */}
        <section className="search-section">
          <input
            type="text"
            placeholder="Search Jobs "
            className="search-bar"
          />
          <button className="search-btn">Search</button>
        </section>

        {/* Layout Section */}
        <div className="jobs-layout">
          {/* Left Filter Section */}
          <aside className="filter-section">
          <div className='fil-div'>
            <div className='filter-title-div'><h2>Filters</h2></div>
            </div>  
            <FilterAccordion></FilterAccordion>
          </aside>

          {/* Right Job Cards Section */}
          <section className="jobs-section">
            {/* Top Info Divs */}
            <div className="jobs-info">
              <div className="card-nav">Saved</div>
              <div className="card-nav">Applied</div>
              <div className="card-nav">Recommended</div>
            </div>

            {/* Job Cards */}
            <JobLists />
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JobsPage;

