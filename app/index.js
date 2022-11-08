import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ThemeContext, ThemeProvider } from "./contexts/theme";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loading from "./components/Loading";

const Popular = React.lazy(() => import("./components/Popular"));
const Battle = React.lazy(() => import("./components/Battle"));
const Results = React.lazy(() => import("./components/Results"));

// class App extends React.Component {
//   state = {
//     theme: "light",
//     toggleTheme: () => {
//       this.setState(({ theme }) => ({
//         theme: theme === "light" ? "dark" : "light",
//       }));
//     },
//   };
//   render() {
//     return (
//       <Router>
//         <ThemeProvider value={this.state}>
//           <div className={this.state.theme}>
//             <div className="container">
//               <Nav />

//               <React.Suspense fallback={<Loading />}>
//                 <Switch>
//                   <Route exact path="/" component={Popular} />
//                   <Route exact path="/battle" component={Battle} />
//                   <Route path="/battle/results" component={Results} />
//                   <Route render={() => <h1>404</h1>} />
//                 </Switch>
//               </React.Suspense>
//             </div>
//           </div>
//         </ThemeProvider>
//       </Router>
//     );
//   }
// }

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <Router>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className={theme}>
          <div className="container">
            <Nav />

            <React.Suspense fallback={<Loading />}>
              <Switch>
                <Route exact path="/" component={Popular} />
                <Route exact path="/battle" component={Battle} />
                <Route path="/battle/results" component={Results} />
                <Route render={() => <h1>404</h1>} />
              </Switch>
            </React.Suspense>
          </div>
        </div>
      </ThemeContext.Provider>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
