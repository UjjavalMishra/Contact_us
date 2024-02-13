import React from "react";
import Button from "./Button";
import { MdEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
const ButtonGrp = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between w-72">
        <Button text="VIA CALL" icon={<IoCallOutline />} outline={false} />
        <Button text="SUPPORT CHAT" icon={<MdEmail />} outline={false} />
      </div>
      <div className=" mt-3">
        <Button text="VIA EMAIL" icon={<MdEmail />} outline={true} />
      </div>
    </div>
  );
};

export default ButtonGrp;
