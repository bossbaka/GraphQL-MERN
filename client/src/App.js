import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <div className="flex p-5 bg-slate-800">
          <h1 className="text-fuchsia-300">Client - GraphQL MERN</h1>
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
