import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import {
  actionsUrl,
  comedyUrl,
  horrorUrl,
  originalsUrl,
  romanceUrl,
} from "./Urls";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      {/* we are going to reuse the component with passing diffrent props into the component */}
      <RowPost title="Neflix Originals" url={originalsUrl} />
      <RowPost title="Actions" isSmall url={actionsUrl} />
      <RowPost title="Comedy Movies" isSmall url={comedyUrl} />
      <RowPost title="Horror Movies" isSmall url={horrorUrl} />
      <RowPost title="Romance Movies" isSmall url={romanceUrl} />
    </div>
  );
}

export default App;
