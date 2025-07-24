import "./App.css";
import RecruitmentSearch from "./components/recruitmentsearch/RecruitmentSearch";
import Navbar from "./components/navbar/Navbar";
import Collaborations from "./components/collaborations/Collaborations";
import JobsListing from "./components/jobslisting/JobsListing";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <div className="grid grid-cols-12 lg:grid-cols-12 min-h-screen">
        <div className="col-span-1" />
        <div className="col-span-12 lg:col-span-10">
          <Navbar />
          <RecruitmentSearch />
          <Collaborations />
          <JobsListing />
          <Footer />
        </div>
        <div className="col-span-1" />
      </div>
    </>
  );
}

export default App;
