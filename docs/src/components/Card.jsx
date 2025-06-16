import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"; // Ensure framer-motion is correctly imported

function Card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference} // Set drag constraints to the parent reference
      className="relative flex-shrink-0 w-[250px] sm:w-[200px] md:w-[220px] lg:w-[250px] h-72 rounded-[20px] bg-zinc-900/90 text-white px-8 py-6 overflow-hidden"
    >
      {/* Card Content */}
      <FaRegFileAlt size={40} className="text-gray-300" />
      <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
      <div className="absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between px-6 py-2 mb-4">
          <h5 className="text-xs">{data.filesize}</h5>
          <span className="w-6 h-6 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? <IoClose size={16} /> : <MdOutlineFileDownload size={20} />}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`w-full py-2 ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            } flex items-center justify-center rounded-b-[20px]`}
          >
            <h3 className="text-xs font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
