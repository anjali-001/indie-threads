import React from 'react'
import Form from './form'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from "apollo-boost"

function App() {
  const client = new ApolloClient({
    url: "https://api-ca-central-1.graphcms.com/v2/cklvgnhw4m5zc01xi1tle2w2c/master"
  })

  return (
    <ApolloProvider client={client}>
        <div className="App">
        <h1>indie threads</h1>
        <Form />
      </div>
    </ApolloProvider>
  );
}

export default App;
