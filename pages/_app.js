import "@/styles/globals.css";

// Redux Toolkit
import { Provider } from "react-redux";
import store from "@/redux toolkit/store";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
