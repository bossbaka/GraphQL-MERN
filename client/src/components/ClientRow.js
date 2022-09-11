import React from "react";
import { FaTrash } from "react-icons/fa";

const ClientRow = ({ client }) => {
  return (
    <tr>
      <td className="p-5 border border-slate-700">{client.name}</td>
      <td className="p-5 border border-slate-700">{client.email}</td>
      <td className="p-5 border border-slate-700">{client.phone}</td>
      <td className="p-5 border border-slate-700">
        <button className="p-2 border-2	border-solid border-red-500 bg-red-500 rounded-md">
          <FaTrash style={{ color: "white" }} />
        </button>
      </td>
    </tr>
  );
};

export default ClientRow;
