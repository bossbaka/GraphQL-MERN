import React from "react";
import { FaTrash } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { DELETE_CLIENT } from "../mutations/lientMutations";

const ClientRow = ({ client }) => {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
  });
  return (
    <tr>
      <td className="p-5 border border-slate-700">{client.name}</td>
      <td className="p-5 border border-slate-700">{client.email}</td>
      <td className="p-5 border border-slate-700">{client.phone}</td>
      <td className="p-5 border border-slate-700">
        <button
          onClick={deleteClient}
          className="p-2 border-2	border-solid border-red-500 bg-red-500 rounded-md"
        >
          <FaTrash style={{ color: "white" }} />
        </button>
      </td>
    </tr>
  );
};

export default ClientRow;
