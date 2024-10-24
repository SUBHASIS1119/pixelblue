import React, { useState } from "react";
import Navbar from "../ui/shared/navbar";
import Footer from "../ui/shared/Footer";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import axios from "axios";
import { COMPANY_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setSingleCompany } from "@/redux/companySlice";
import { useNavigate } from "react-router-dom";

const CompanyCreate = () => {
  const [companyName, setCompanyName] = useState();
  const navigate= useNavigate();
  const dispatch = useDispatch();
  const registerCompany = async () => {
    try {
      const res = await axios.post(
        `${COMPANY_API_END_POINT}/register`,
        { companyName },
        {
          headers: {
            conteny: "application/json",
          },
          withCredentials: true,
        }
      );
      if (res?.data?.success) {
        dispatch(setSingleCompany(res.data.company));
        toast.success(res.data.message);
        const companyId= res?.data?.company?._id;
         navigate(`/admin/companies/${companyId}`)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  

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
      <div className="max-w-xl mx-auto h-[50vh] ">
        <div className="my-10">
          <h1 className="font-bold text-2xl text-black">
            Register Your Company Here
          </h1>
        </div>
        <div className="flex gap-8">
          <Input
            type="text"
            className="my-2 w-1/2 border border-gray-500"
            placeholder="enter your company name"
            onChange={(e) => setCompanyName(e.target.value)}
          />
          <Button
            onClick={registerCompany}
            className="bg-black text-white my-2 hover:bg-gray-700"
          >
            Register
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CompanyCreate;
