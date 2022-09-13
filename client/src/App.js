import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import AddClientModal from "./components/AddClientModal";
import Clients from "./components/Clients";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existion, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existion, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache,
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <div className="bg-slate-800 ">
          <div className="container mx-auto">
            <div className="flex items-center py-5">
              <img
                src="/assets/GraphQL_Logo.png"
                alt="GraphQLLogo"
                width={80}
              />
              <h1 className="p-5 text-lg" style={{ color: "#e10098" }}>
                Client - GraphQL MERN
              </h1>
            </div>
          </div>
        </div>

        <div className="container mx-auto p-5 ">
          <AddClientModal />
          <Clients />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
