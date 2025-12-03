function JobCard({ type, role, desc, pay, loc }) {
  return (
    <div className="relative bg-white shadow-md rounded-xl">
      <div className="p-4">
        <div className="mb-6">
          <div className="my-2 text-gray-600">{type}</div>
          <h3 className="text-xl font-bold">{role}</h3>
        </div>
        <div className="mb-5">{desc}</div>
        <h3 className="mb-2 text-indigo-500">{pay}</h3>
        <div className="mb-5 border border-gray-100"></div>
        <div className="flex flex-col justify-between mb-4 lg:flex-row">
          <div className="mb-3 text-orange-700">
            <i className="text-lg fa-solid fa-location-dot"></i>
            {loc}
          </div>
          <a
            href="job.html"
            className="h-9 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
