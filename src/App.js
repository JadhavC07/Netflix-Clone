import LandingPage from "./components/PAGES/LandingPage/LandingPage.jsx"
import "./App.css";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Global />,
//     children: [
//       {
//         path: "/",
//         element: <HomePage />,
//       },
//       {
//         path: "/projects",
//         element: <Projects />,
//       },
//       {
//         path: "/skills",
//         element: <Skills />,
//       },
//       {
//         path: "/resume",
//         element: <Resume />,
//       },
//       {
//         path: "/contact",
//         element: <Contact />,
//       },
//       {
//         path: "/about",
//         element: <About />,
//       },
//     ],
//   },
// ]);

function App() {
  return <LandingPage />;
}

export default App;
