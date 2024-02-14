import React from "react";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";
import Link from "next/link";

function Ticketcard(props) {
  return (
    <div className="flex flex-col bg-card bg-card-hover rounded-md shadow-lg p-3 m-2 ">
      <div className="flex mb-3">
        <PriorityDisplay />
        <div className="ml-auto">
          <DeleteBlock />
        </div>
      </div>
      <Link href={`TicketPage/${props.id}`} style={{ display: "contents" }}>
        <h4 className="mb-1">Ticket Title</h4>
        <hr className="h-px  border-0 bg-page mb-2 "></hr>
        <p className="whitespace-pre-wrap">Ticket Discription</p>

        <div className="flex-grow"></div>
        <div className="flex mt-2">
          <div className="flex flex-col">
            <p className="text-xs  my-1">Date and time</p>
            <ProgressDisplay progress={56} />
          </div>
          <div className="ml-auto  flex items-end">
            <StatusDisplay status={"done"} />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Ticketcard;
