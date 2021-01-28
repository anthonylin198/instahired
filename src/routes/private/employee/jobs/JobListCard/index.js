import React, { useState, useEffect } from "react";
import axios from "axios";
import CompanyCard from "./CompanyCard";
import LoadingComponent from "../../../../../components/loading";

const JobListCard = () => {
  const [loading, setLoading] = useState();
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const source = axios.CancelToken.source();
    async function fetchData() {
      try {
        setLoading(true);
        const res = await axios.get("/api/companies");
        setJobs(res.data.data);

        setLoading(false);
      } catch (err) {
        console.log("this is an error", err);
        setLoading(false);
      }
    }
    fetchData();
    return () => source.cancel();
  }, []);

  const jobList = jobs.map((job, i) => {
    return (
      <CompanyCard
        name={job.name}
        description={job.description}
        jobs={job.jobs}
        id={job._id}
        key={i}
      />
    );
  });

  let isLoading;
  if (loading) {
    isLoading = <LoadingComponent />;
  } else {
    isLoading = null;
  }

  return (
    <div>
      <p>Top Startup Jobs</p>
      {isLoading}
      {jobList}
    </div>
  );
};

export default JobListCard;
