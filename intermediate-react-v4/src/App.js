import { render } from "react-dom";
import { StrictMode, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// import SearchParams from "./SearchParams";
const SearchParams = lazy(() => import("./SearchParams"));
// import Details from "./Details";
const Details = lazy(() => import("./Details"));

import { Provider } from "react-redux";
import store from "./Store";

const App = () => {
  return (
    <StrictMode>
      <Suspense fallback={<h1>Loading route...</h1>}>
        <Provider store={store}>
          <div
            className="p-0 m-0"
            // specific content goes to style
            style={{ background: "url(http://pets-images.dev-apis.com/pets/wallpaperB.jpg)" }}>
            <BrowserRouter>
              <header className="w-full mb-10 text-center p-7 bg-gradient-to-b from-purple-400 via-pink-500 to-red-500">
                <Link to="/" className="text-6xl text-white hover:text-gray-200">Adopt Me!</Link>
              </header> 
              <Routes>
                <Route path="/details/:id" element={<Details />} />
                <Route path="/" element={<SearchParams />} />
              </Routes>
            </BrowserRouter>
          </div>
        </Provider>
      </Suspense>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
