/* eslint-disable react/no-unknown-property */

import { FaCaretDown } from "react-icons/fa";

import { Dropdown } from "antd";
import { useNavigate } from "react-router-dom";
import { serverDomain } from "../constant/serverDomain";
import axios from "axios";
import { useState } from "react";
import { authToken } from "../constant/AuthToken";

const items = [
  {
    key: "1",
    type: "group",
    label: "Group title",
    children: [
      {
        key: "HVAC",
        label: "HVAC",
      },
      {
        key: "1-2",
        label: "2nd menu item",
      },
    ],
  },
];

export default function AddProject() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: "Khan",
    email: "khannn@gmail.com",
    phoneNumber: "977736363",
    clientName: "Khan name",
    clientInfo: "client info",
    date: "12/12/2025",
    service: "HVAC",
  });

  const handleAddProject = async () => {
    try {
      const res = await axios.post(`${serverDomain}/project/create`, formData,{
        headers: {
          Authorization: authToken,
        },
      });
      console.log(res);
      if (res.status === 201) {
        navigate("/dashboard");
      }
      
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // console.log(formData);

  return (
    <>
      <div className="lg:ms-[18%] lg:w-[82%] flex justify-center items-center  w-full min-h-[100vh]  sm:p-10 p-4 bg-[#F4F6F8] ">
        <div className=" sm:w-[700px] w-[450px] bg-white py-6 sm:px-10 p-4 rounded-xl">
          <h1 className=" selectBOQHeading inline  text-3xl font-semibold">
            Add Project
          </h1>
          <div className=" w-full block my-5">
            <label className="text-lg font-medium w-full my-1 block">
              Company Name
            </label>
            <input
              onChange={handleChange}
              name="companyName"
              value={formData.companyName}
              placeholder="Enter Company Name"
              type="text"
              className="p-4 focus:outline-none w-full bg-[#F4F6F8] rounded-lg"
            />
          </div>

          <div className=" w-full block my-5">
            <label className="text-lg font-medium w-full my-1 block">
              Client Name
            </label>
            <input
              onChange={handleChange}
              name="clientName"
              value={formData.clientName}
              placeholder="Enter Client Name"
              type="text"
              className="p-4 focus:outline-none w-full bg-[#F4F6F8] rounded-lg"
            />
          </div>
          <div className=" w-full block my-5">
            <label className="text-lg font-medium w-full my-1 block">
              Company Info
            </label>
            <input
              onChange={handleChange}
              name="clientInfo"
              value={formData.clientInfo}
              placeholder="Enter Company Info"
              type="text"
              className="p-4 focus:outline-none w-full bg-[#F4F6F8] rounded-lg"
            />
          </div>
          <div className=" w-full flex flex-row md:flex-nowrap flex-wrap gap-4 my-5">
            <div className=" md:w-[33%] w-full">
              <label className="text-lg font-medium w-full my-1 block">
                Email
              </label>
              <input
                onChange={handleChange}
                name="email"
                value={formData.email}
                placeholder="Enter Email"
                type="text"
                className="p-4 focus:outline-none w-full bg-[#F4F6F8] rounded-lg"
              />
            </div>
            <div className=" md:w-[33%] w-full">
              <label className="text-lg font-medium w-full my-1 block">
                Phone Number
              </label>
              <input
                placeholder="Enter Phone Number"
                type="text"
                className="p-4 focus:outline-none w-full bg-[#F4F6F8] rounded-lg"
                onChange={handleChange}
                name="phoneNumber"
                value={formData.phoneNumber}
              />
            </div>
            <div className=" md:w-[33%] w-full">
              <label className="text-lg font-medium w-full my-1 block">
                Date Added
              </label>
              <input
                placeholder="Enter Date"
                type="text"
                className="p-4 focus:outline-none w-full bg-[#F4F6F8] rounded-lg"
                onChange={handleChange}
                name="date"
                value={formData.date}
              />
            </div>
          </div>
          <div className=" w-full block my-5">
            <label className="text-lg font-medium w-full my-1 block">
              Select service
            </label>
            <Dropdown
              menu={{
                items,
                selectable: true,
                onClick: (e) => {
                  setFormData({ ...formData, service: e.key });
                },
               

              }}
              trigger={["click"]}
            >
              <div className="p-4 cursor-pointer focus:outline-none w-full flex flex-row justify-between items-center text-[#A1A1A1] bg-[#F4F6F8] rounded-lg">
                Select
                <FaCaretDown className="text-[#306BFF] text-xl" />
              </div>
            </Dropdown>
          </div>
          <button
            onClick={handleAddProject}
            className=" w-full text-lg font-semibold p-4 text-center text-white rounded-lg bg-gradient-to-r from-[#053BD3] to-[#03EAEA] mt-5"
          >
            Add Project
          </button>
        </div>
      </div>
    </>
  );
}
