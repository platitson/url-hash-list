import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Tags from "./Tags";

function App() {
  const initialTags = ['red', 'blue', 'purple'];
  let tagsToRender = [];

  const onWindowLoad = () => {
    if (window.location.hash && window.location.hash !== `#tags=${initialTags}`) {
      const tagsArray = window.location.hash
        .split('#tags=')[1]
        .split(',')
        .map(item => item.replace('%20', ''))
        .filter(item => item.length > 0);
      window.location.href = `#tags=${tagsArray}`;
      tagsToRender = tagsArray;
    } else {
      window.location.href = `#tags=${initialTags}`;
      tagsToRender = initialTags;
    }
  }

  useEffect(() => {
    window.onhashchange = () => {
      window.location.reload();
    }
  })

  return (
    <Router>
      <Route path={onWindowLoad()}>
        <Tags tags={tagsToRender} />
        {/* To load the component on the page three times uncomment next code */}
        {/* <Tags tags={tagsToRender} />
        <Tags tags={tagsToRender} /> */}
      </Route>
    </Router>
  );
}

export default App;
