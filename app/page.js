import React from "react";
import TicketCard from "./(components)/TicketCard";

function dashboard() {

  let arr =[1,2,3,4]
  return (
    <div className="flex flex-col p-5">
      <div className="lg:grid grid-cols-2 xl:grid-cols-4">
        {arr.map((ele)=> (
          <TicketCard key={ele} id = {ele} />
        ))}


      
        {/* arr.map((ele) => (
          <TicketCard id={ele}/>
        )) */}
        {/* <TicketCard id={1}/>
        <TicketCard id={2}/>
        <TicketCard id={3}/>
        <TicketCard id={4}/> */}
      </div>
    </div>
  );
}

export default dashboard;
