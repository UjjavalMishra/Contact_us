import React from "react";
import ButtonGrp from "./ButtonGrp";
import Form from "./Form";
import { MdHeight } from "react-icons/md";
const Mid = () => {
  return (
    <div className="flex justify-center">
      <div className="flex justify-between w-2/3">
        <div className=" flex flex-col  pt-4 " style={{ width: "60%" }}>
          <ButtonGrp />
          <Form />
        </div>
        <img
          src="http://www.htsolutionsco.com/img/24-7-tech-support.png"
          alt="image"
          style={{ width: "40%" }}
        />
      </div>
    </div>
  );
};
export default Mid;
