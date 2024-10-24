import { COMPANY_API_END_POINT, JOB_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Navbar from "../ui/shared/navbar";
import Footer from "../ui/shared/Footer";
import { toast } from "sonner";
import { useParams } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { useSelector } from "react-redux";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const CompanyLogo = () => {
  const params = useParams();
  
  const [input, setInput] = useState({
    title: "",
    description: "",
    salary: 10,
    location: "",
    jobType: "",
    experience: 0,
    position: 0,
    //file: null,
    companyId:"",
  });
  

  const [loading, setLoading] = useState(false);
 // const { companies } = useSelector((store) => store.company);
  //event handler
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  //file handler
  const changeFileHandler = (e) => {
    const file = e.target.files?.[0];
    setInput({ ...input, file });
  };

  //selct change handler
  // const selectHandler = (value) => {
  //   // const selectCompany = companies.find(
  //   //   (company) => company?._id === value
  //   // );
  //   setInput({ ...input, companyId:value });
  // };

  // //submit handler
  // const submitHandler = async (e) => {
  //   const formData = new FormData();
  //   e.preventDefault();
  //   if (input.file) {
  //     formData.append("file", input.file);
  //   }
  //   try {
  //     setLoading(true);
  //     const res = await axios.put(
  //       `${COMPANY_API_END_POINT}/update/${params.id}`,
  //       formData,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //         withCredentials: true,
  //       }
  //     );
  //     if (res.data.success) {
  //       toast.success(res.data.message);
  //       //navigate come here
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     toast.error(error.response.data.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  //submit handler 1
  const submitHandler1 = async (e) => {
    e.preventDefault();
    console.log(input);
   
    try {
      setLoading(true);
      const res = await axios.post(`${JOB_API_END_POINT}/post`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
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
      {/* <div className="w-fit mx-auto my-10 ">
        <form onSubmit={submitHandler}>
          <h1 className="font-bold text-xl mb-4">Provide Company Logo</h1>
          <div className="flex gap-8 mt-4">
            <div className="gap-4">
              <Label>Company Logo</Label>
              <Input
                type="file"
                accept="image/*"
                className="rounded-xl mt-3"
                onChange={changeFileHandler}
              />
            </div>

            {loading ? (
              <Button className="w-full my-4">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please Wait
              </Button>
            ) : (
              <Button
                type="submit"
                className="bg-black text-white rounded-xl hover:bg-gray-600 mt-9"
              >
                Update
              </Button>
            )}
          </div>
        </form>
      </div> */}
      {/* company details */}

      <div className="flex items-center w-fit mx-auto my-5 border border-gray-300 shadow-xl">
        <form className="p-8" onSubmit={submitHandler1}>
          <h1 className="text-center  font-bold text-2xl mb-6">
            Enter Company Details
          </h1>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Label>Title</Label>
              <Input
                type="text"
                name="title"
                value={input.title}
                onChange={changeEventHandler}
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>
            <div>
              <Label>Salary</Label>
              <Input
                type="number"
                name="salary"
                value={input.salary}
                onChange={changeEventHandler}
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>
            <div>
              <Label>Location</Label>
              <Input
                type="text"
                name="location"
                value={input.location}
                onChange={changeEventHandler}
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>
            <div>
              <Label>Job Type</Label>
              <Input
                type="text"
                name="jobType"
                value={input.jobType}
                onChange={changeEventHandler}
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>
            <div>
              <Label>Experience</Label>
              <Input
                type="number"
                name="experience"
                value={input.experience}
                onChange={changeEventHandler}
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>
            <div>
              <Label>Job Id</Label>
              <Input
                type="text"
                name="companyId"
                value={input.companyId}
                onChange={changeEventHandler}
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>
            
            <div>
              <Label>Position</Label>
              <Input
                type="number"
                name="position"
                value={input.position}
                onChange={changeEventHandler}
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>
          </div>
          <div>
            <Label>Description</Label>
            <Input
              type="text"
              name="description"
              value={input.description}
              onChange={changeEventHandler}
              className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
            />
          </div>

          {loading ? (
            <Button className="w-full my-4">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please Wait
            </Button>
          ) : (
            <Button
              type="submit"
              className="bg-black text-white rounded-xl hover:bg-gray-600 mt-4 w-full"
            >
              Post New Job
            </Button>
          )}
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default CompanyLogo;
