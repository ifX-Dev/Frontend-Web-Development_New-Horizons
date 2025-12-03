import JobCard from "./JobCard";
import {jobs} from "../constants";

function BrowseJobs() {
  return (
    <>
      {/* <!-- Browse Jobs --> */}
      <section className="px-4 py-10 bg-blue-50">
        <div className="m-auto container-xl lg:container">
          <h2 className="mb-6 text-3xl font-bold text-center text-indigo-500">
            Browse Jobs
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {jobs.slice(0, 3).map((job) => (
              <JobCard key={job.id} {...job} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default BrowseJobs;
