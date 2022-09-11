import React from "react";
import ClientRow from "./ClientRow";
import { useQuery } from "@apollo/client";

import { GET_CLIENTS } from "../queries/clientQueries";
import Spinner from "./Spinner";

const Clients = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <Spinner />;

  if (error) return <p>Something Went Wrong</p>;

  return (
    <>
      {!loading && !error && (
        <>
          <table className="table border border-slate-500">
            <thead className="bg-gray-400">
              <tr className="text-slate-800	">
                <th className="p-5 border border-slate-600">Name</th>
                <th className="p-5 border border-slate-600">Email</th>
                <th className="p-5 border border-slate-600">Phone</th>
                <th className="p-5 border border-slate-600"></th>
              </tr>
            </thead>
            <tbody>
              {data.clients.map((client) => (
                <ClientRow key={client.id} client={client} />
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default Clients;
