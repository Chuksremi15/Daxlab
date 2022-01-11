import { BrowserRouter as Router } from "react-router-dom";
import Pages from "./pages";

//hooks
import ScrollToTheTop from "./hooks/ScrollToTheTop";

// Redux
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Alert } from "./component/Layout/Alert";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Alert />
          <ScrollToTheTop />
          <Pages />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
