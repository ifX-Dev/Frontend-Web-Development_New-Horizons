import BrowseJobs from "../components/BrowseJobs";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Nav from "../components/Nav";

function Home({ navigate, page }) {
  return (
    <>
      <Nav navigate={navigate} page={page} />
      {/* <!-- Hero --> */}
      <Hero />
      {/* <!-- Developers and Employers --> */}
      <section className="py-4">
        <div className="m-auto container-xl lg:container">
          <div className="grid grid-cols-1 gap-4 p-4 rounded-lg md:grid-cols-2">
            <Card
              title="For Developers"
              desc="Browse our React jobs and start your career today"
              bttnText="Browse Jobs"
            />
            <Card
              title="For Employers"
              desc="List your job to find the perfect developer for the role"
              bttnText="Add Job"
              cardColor="bg-indigo-100"
              bttnColor="bg-indigo-500 hover:bg-indigo-600"
            />
          </div>
        </div>
      </section>
      <BrowseJobs />
      <Footer />
    </>
  );
}

export default Home;
