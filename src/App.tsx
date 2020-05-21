import * as React from "react";
import Form from "./Components/Form";
import { Provider } from "react-redux";
import Store from "./redux/Store";

function App() {
  return (
    <Provider store={Store}>
      <div>
        <Form />
      </div>
    </Provider>
  );
}

export default App;
