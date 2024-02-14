"use client";

import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

function Deleteblock() {
  return (
    <div>
      <FontAwesomeIcon
        icon={faX}
        className="text-red-500 hover:cursor-pointer hover:text-red-200"
      />
    </div>
  );
}

export default Deleteblock;
