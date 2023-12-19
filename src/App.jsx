import About from "./Component/About";
import AllProduct from "./Component/AllProduct";
import Contact from "./Component/Contact";
import Header from "./Component/Header";
import Error from "./Component/Error";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Cart from "./Component/Cart";
import Body from "./Component/Body";
import ProductPage from "./Component/ProductPage";
import { Provider } from "react-redux";
import { store } from "./utils/store";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </Provider>
    </>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/allProduct",
        element: <AllProduct />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/product/:id",
        element: <ProductPage />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default App;
