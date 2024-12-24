import React from 'react';
import { IoDocumentOutline } from 'react-icons/io5';
import { FaRegFolderOpen } from 'react-icons/fa';
import { LuHardDrive } from 'react-icons/lu';
import { MdOutlineContactMail } from 'react-icons/md';

const FourStep = () => {
  return (
    <div className="w-full p-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-500">4 Steps to Success</h1>
        <h1 className="text-4xl font-bold">with Insphile</h1>
      </div>
      <div className="text-center mb-8">
        <p className="text-lg">
          Experience the Insphile Follow approach and discover the difference it
          can make in achieving your recruitment and career objectives. From
          consultation to execution and beyond, we’re here to support you at
          every stage of your journey.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1 p-4 w-full ms-52">
          <div className="grid grid-rows-4 gap-4">
            <div className="row-span-1 border-2 p-4 shadow-lg rounded-s text-center text-slate-600">
              <h2 className="text-lg font-bold">Consultation</h2>
              <p className="text-base">
                Schedule a consultation with one of our experienced recruitment
                specialists
              </p>
            </div>
            <div className="row-span-1  text-white">
              <h2 className="text-lg font-bold">Strategy Development</h2>
              <p className="text-base">
                Based on our consultation and assessment of your requirements,
                we'll develop a comprehensive strategy designed to achieve your
                desired outcomes.
              </p>
            </div>
            <div className="row-span-1 border-2 p-4 shadow-lg rounded-s text-center text-slate-600">
              <h2 className="text-lg font-bold">Execution</h2>
              <p className="text-base">
                Once the strategy is in place, our team will execute the plan
                with precision and professionalism.
              </p>
            </div>
            <div className="row-span-1  text-white">
              <h2 className="text-lg font-bold">Follow-up </h2>
              <p className="text-base">
                Our commitment to your success doesn't end once the placement is
                made. We believe in building long-term partnerships with our
                clients and candidates.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1  p-4 w-1/2 ms-40">
          <div className="grid grid-cols-3">
            <div className="col-span-1 ">
              <div className="row-span-1  w-full h-48 "></div>
              <div className="row-span-1  w-full  h-48 text-xl text-slate-500">Step 2
              <p className="row-span-1  w-full  h-48 text-xs text-slate-500 ms-7 ">Just Think</p>
              </div>
              <div className="row-span-1  w-full  h-48"></div>
              <div className="row-span-1  w-full  h-48 text-xl text-slate-500">Step 4
              <p className="row-span-1  w-full  h-48 text-xs text-slate-500 ms-5 ">All done</p>
              </div>
              
            </div>
            <div className="col-span-1">
              <div className="row-span-1  w-full h-48 flex justify-center">
                <IoDocumentOutline className="text-lg text-blue-500" />
                <div className="row-span-1  w-min h-40 mt-5  -ms-3 flex justify-center border border-blue-500"></div>
              </div>
              <div className="row-span-1  w-full h-48 flex justify-center">
                <FaRegFolderOpen className="text-lg text-blue-500" />
                <div className="row-span-1  w-min h-40 mt-5  -ms-3 flex justify-center border border-blue-500"></div>
              </div>
              <div className="row-span-1  w-full h-48 flex justify-center">
             
                <LuHardDrive className="text-lg text-blue-500" />
                <div className="row-span-1  w-min h-40 mt-5  -ms-3 flex justify-center border border-blue-500"></div>
              </div>
              <div className="row-span-1  w-full h-48 flex justify-center">
          
                <MdOutlineContactMail className="text-lg text-blue-500" />

              </div>
            </div>
            <div className="col-span-1">
              <div className="row-span-1  w-full text-xl text-slate-500 h-48">Step 1
              <p className="row-span-1  w-full  h-48 text-xs text-slate-500 -ms-7 ">Just Start</p>
              </div>
              <div className="row-span-1 w-full  h-48"></div>
              <div className="row-span-1 w-full  text-xl text-slate-500 h-48">Step 3
              <p className="row-span-1  w-full  h-48 text-xs text-slate-500 ms-7 ">Do It</p>
              </div>
              <div className="row-span-1  w-full  h-48"></div>
            </div>
          </div>
        </div>
        <div className="col-span-1  p-4 w-full -ms-44">
          <div className="col-span-1  p-4 w-full -ms-5">
            <div className="grid grid-rows-4 gap-4">
              <div className="row-span-1  text-white">
                <h2 className="text-lg font-bold"></h2>
                <p className="text-base">
                  Schedule a consultation with one of our experienced
                  recruitment specialists
                </p>
              </div>
              <div className="row-span-1 border-2 p-4 shadow-lg rounded-s text-center text-slate-600">
                <h2 className="text-lg font-bold">Strategy Development</h2>
                <p className="text-base">
                  Based on our consultation and assessment of your requirements,
                  we'll develop a comprehensive strategy designed to achieve
                  your desired outcomes.
                </p>
              </div>
              <div className="row-span-1  text-white">
                <h2 className="text-lg font-bold">Execution</h2>
                <p className="text-base">
                  Once the strategy is in place, our team will execute the plan
                  with precision and professionalism.
                </p>
              </div>
              <div className="row-span-1 border-2 p-4 shadow-lg rounded-s justify-center items-center text-center text-slate-600">
                <h2 className="text-lg font-bold">Follow-up </h2>
                <p className="text-base">
                  Our commitment to your success doesn't end once the placement
                  is made. We believe in building long-term partnerships with
                  our clients and candidates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourStep;
