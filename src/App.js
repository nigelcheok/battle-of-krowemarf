import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { ClansListPage } from './Pages/ClansListPage';
import { ClanDetailsPage } from './Pages/ClanDetailsPage';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Router>
      <div>
        {/*<Header />*/}

        <Route exact path="/" component={ClansListPage} />
        <Route exact path="/:id" component={ClanDetailsPage} />
        {/*<Route path="/topics" component={Topics} />*/}
      </div>
    </Router>
  );
}

// function ClansListPage() {
//   return <h2>ClansListPage</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }
//
// function Topic({ match }) {
//   return <h3>Requested Param: {match.params.id}</h3>;
// }
//
// function Topics({ match }) {
//   return (
//     <div>
//       <h2>Topics</h2>
//
//       <ul>
//         <li>
//           <Link to={`${match.url}/components`}>Components</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//         </li>
//       </ul>
//
//       <Route path={`${match.path}/:id`} component={Topic} />
//       <Route
//         exact
//         path={match.path}
//         render={() => <h3>Please select a topic.</h3>}
//       />
//     </div>
//   );
// }
//
// function Header() {
//   return (
//     <ul>
//       <li>
//         <Link to="/">ClansListPage</Link>
//       </li>
//       <li>
//         <Link to="/about">About</Link>
//       </li>
//       <li>
//         <Link to="/topics">Topics</Link>
//       </li>
//     </ul>
//   );
// }

export default App;