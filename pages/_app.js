import { Provider } from "react-redux";
import { useStore } from "../store/store";
import React from "react";
import { getLanguage } from "../store/actions/getLanguageActions";

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  store.dispatch(getLanguage());
  return (
    <React.Fragment>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </React.Fragment>
  );
}
