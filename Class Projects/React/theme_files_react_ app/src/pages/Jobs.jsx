import JobCard from "../components/JobCard";
import Nav from "../components/Nav";
import { jobs } from "../constants";

export default function Jobs({navigate}) {
  return (
    <>
      <Nav navigate={navigate} />
      <section className="py-4 bg-blue-50">
      <div className="container px-4 mx-auto">
        <div className="relative">
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            placeholder="Filter jobs..."
          />
        </div>
      </div>
    </section>
    <section class="px-4 py-10 bg-blue-50">
      <div class="m-auto container-xl lg:container">
        <h2 class="mb-6 text-3xl font-bold text-center text-indigo-500">
          Browse Jobs
        </h2>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
          {jobs.map((job) => (
              <JobCard key={job.id} {...job} />
            ))}
        </div>
      </div>
    </section>
    </>
  );
}
