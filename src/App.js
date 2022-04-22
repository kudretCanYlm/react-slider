import {
  BrowserRouter,
  Routes,
  Route,
  Link,

} from "react-router-dom"
import "./styles/style.css"
import Reviews from "./routes/Reviews"
import { PersonContext, persons } from "./contexts/PersonsContext"

function App() {


  return (
    <BrowserRouter>
      <PersonContext.Provider value={[...persons]}>
        <Routes >
          <Route path="/" index element={<Reviews />} />
          <Route path="*" element={(
            <button className="btn" >
              <Link to={"/"}>
                git
              </Link>
            </button>
          )} />
        </Routes>
      </PersonContext.Provider>
    </BrowserRouter>
  );
}

export default App;
