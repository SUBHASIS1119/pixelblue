import React from "react";
import Navbar from "../ui/shared/navbar";
import Footer from "../ui/shared/Footer";
import { useNavigate } from "react-router-dom";
import AdminJobsTable from "./AdminJobsTable";
import { Button } from "../ui/button";
import useGetAllAdminJobs from "@/hoooks/useGetAllAdminJobs";

const AdminJobs = () => {
  useGetAllAdminJobs();
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="text-center ">
        <div className="flex flex-col gap-5 my-8">
          <h1 className="text-5xl font-bold">
            Find Talent Faster &<br />
            <span className="text-[#088178]">Hire Smarter</span>
          </h1>
          <p>
            you're building futures. Every hire has the potential to elevate a
            team, transform a company, and shape success.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto my-10">
        <h1 className="text-start font-bold text-4xl mb-8">All Your <span className="text-[#088178]">Posted Jobs</span></h1>
        <AdminJobsTable />
        <Button
          onClick={() => navigate("/admin/jobs/create")}
          className="bg-black text-white hover:bg-gray-700 my-6 rounded-xl"
        >
          Post New Job
        </Button>
      </div>

      <Footer />
    </div>
  );
};

export default AdminJobs;
