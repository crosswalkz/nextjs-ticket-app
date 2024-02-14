import React from "react";

function StatusDisplay({ status = "dmEo" }) {
  const get_colour = (status) => {
    let color;
    switch (status.toLowerCase()) {
      case "done":
        color = "bg-green-400";
        return color;
      case "started":
        color = "bg-yellow-500";
        return color;
      case "not started":
        color = "bg-red-500";
        return color;
      default:
        color = "bg-slate-500";
    }
    return color;
  };

  return (
    <span
      className={`inline rounded-full px-2 py-1 text-xs font-mono text-black ${get_colour(
        status
      )}`}
    >
      {status}
    </span>
  );
}

export default StatusDisplay;
