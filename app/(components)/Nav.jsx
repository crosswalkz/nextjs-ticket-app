import { faHome, faTicket  } from "@fortawesome/free-solid-svg-icons";
// import { fa-upload as fasFaCoffee } from '@fortawesome/pro-solid-svg-icons'
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center bg-stone-500 px-2 rounded-lg space-x-5">
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className="icon" />
        </Link>
        <Link href="/TicketPage/new">
          <FontAwesomeIcon icon={faTicket} className="icon" />
        </Link>
        <Link href="/Dropzone">
          <FontAwesomeIcon icon={faCloudArrowUp} className="icon" />
        </Link>
      </div>
      <div>
        <p className=" text-default-text">test@gmail.com</p>
      </div>
    </nav>
  );
};

export default Nav;
