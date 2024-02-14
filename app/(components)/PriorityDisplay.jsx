import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";

function Prioritydisplay() {
  return (
    <div className="flex justify-start align-baseline">
      <FontAwesomeIcon
        icon={faFire}
        className="text-blue-400 hover:cursor-pointer hover:text-red-200"
      />
      <FontAwesomeIcon
        icon={faFire}
        className="text-blue-400 hover:cursor-pointer hover:text-red-200"
      />
      <FontAwesomeIcon
        icon={faFire}
        className="text-blue-400 hover:cursor-pointer hover:text-red-200"
      />
      <FontAwesomeIcon
        icon={faFire}
        className="text-blue-400 hover:cursor-pointer hover:text-red-200"
      />
      <FontAwesomeIcon
        icon={faFire}
        className="text-blue-400 hover:cursor-pointer hover:text-red-200"
      />
    </div>
  );
}

export default Prioritydisplay;
