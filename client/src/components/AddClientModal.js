import { useState } from "react";
import { FaUser, FaWindowClose } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { ADD_CLIENT } from "../mutations/clientMutations";
import { GET_CLIENTS } from "../queries/clientQueries";

const AddClientModal = () => {
  const [OpenModal, setOpenModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [addClient] = useMutation(ADD_CLIENT, {
    variables: { name, email, phone },
    update(cache, { data: { addClient } }) {
      const { clients } = cache.readQuery({ query: GET_CLIENTS });
      cache.writeQuery({
        query: GET_CLIENTS,
        data: { clients: [...clients, addClient] },
      });
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || phone === "") {
      return alert("Please fill in all fields");
    }
    addClient(name, email, phone);
    setName("");
    setEmail("");
    setPhone("");
    setOpenModal(!OpenModal);
  };

  const Modal = () => {
    setOpenModal(!OpenModal);
  };

  return (
    <div className="mb-5">
      <button
        className="border-2 border-soild border-indigo-600 bg-indigo-600 rounded-lg flex p-2 items-baseline"
        onClick={Modal}
      >
        <FaUser style={{ color: "white" }} />
        <span className="text-white pl-2">Add Client</span>
      </button>

      {OpenModal && (
        <div className="fixed h-full m-0 p-0 inset-0 z-[100] bg-gray-400/90">
          <form
            onSubmit={onSubmit}
            className="relative p-10 text-black mx-auto my-[50px] max-w-[650px] bg-white rounded-lg"
          >
            <p className="text-xl my-5">Add Client</p>
            <button className="absolute right-10 top-5" onClick={Modal}>
              <FaWindowClose style={{ color: "red", fontSize: "32px" }} />
            </button>

            <label>Name</label>
            <input
              type="text"
              className="bg-gray-50 text-gray-900 rounded-lg w-full p-2.5 dark:bg-gray-700 dark:text-white"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Email</label>
            <input
              type="text"
              className="bg-gray-50 text-gray-900 rounded-lg w-full p-2.5 dark:bg-gray-700 dark:text-white"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Phone</label>
            <input
              type="text"
              className="bg-gray-50 text-gray-900 rounded-lg w-full p-2.5 dark:bg-gray-700 dark:text-white"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <button
              type="submit"
              className="mt-5 text-white border-2 border-soild border-green-600 bg-green-600 rounded-lg p-2"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddClientModal;
