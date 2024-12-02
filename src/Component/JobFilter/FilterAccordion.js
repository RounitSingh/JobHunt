import React, { useState } from "react";
import { Accordion } from "./Accordion";
import "./Accordion.css";

const FilterAccordion = () => {
  const [expanded, setExpanded] = useState([]);

  return (
    <div className="example-container">
      <Accordion
        i={0}
        expanded={expanded}
        setExpanded={setExpanded}
        allowMultiple={true}
        title="WORK MODE"
        content={
          <div>
            <label><input type="checkbox" /> Work from Home</label><br />
            <label><input type="checkbox" /> Remote</label><br />
            <label><input type="checkbox" /> Hybrid</label>
          </div>
        }
      />
      <Accordion
        i={1}
        expanded={expanded}
        setExpanded={setExpanded}
        allowMultiple={true}
        title="EXPERIENCE"
        content={<input type="range" min="0" max="20" step="1" />}
      />
      <Accordion
        i={2}
        expanded={expanded}
        setExpanded={setExpanded}
        allowMultiple={true}
        title="JOB LOCATION"
        content={
          <div>
            <label><input type="checkbox" /> Delhi</label><br />
            <label><input type="checkbox" /> Noida</label><br />
            <label><input type="checkbox" /> Mumbai</label><br />
            <label><input type="checkbox" /> Gurgaon</label><br />
            <label><input type="checkbox" /> Bengaluru</label><br />
            <label><input type="checkbox" /> Chennai</label><br />
            <label><input type="checkbox" /> Hyderabad</label><br />
            <label><input type="checkbox" /> Pune</label><br />
            <label><input type="checkbox" /> Mohali</label>
          </div>
        }
      />
      <Accordion
        i={3}
        expanded={expanded}
        setExpanded={setExpanded}
        allowMultiple={true}
        title="SALARY"
        content={
          <div>
            <label><input type="checkbox" /> 0-3 LPA</label><br />
            <label><input type="checkbox" /> 3-6 LPA</label><br />
            <label><input type="checkbox" /> 6-10 LPA</label><br />
            <label><input type="checkbox" /> 10+ LPA</label>
          </div>
        }
      />
      <Accordion
        i={4}
        expanded={expanded}
        setExpanded={setExpanded}
        allowMultiple={true}
        title="EDUCATION"
        content={
          <div>
            <label><input type="checkbox" /> High School</label><br />
            <label><input type="checkbox" /> Bachelor's</label><br />
            <label><input type="checkbox" /> Master's</label><br />
            <label><input type="checkbox" /> PhD</label>
          </div>
        }
      />
    </div>
  );
};

export default FilterAccordion;
