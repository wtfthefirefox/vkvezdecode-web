import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from './components/main';
import TypeDonations from './components/typeDonations';
import TargetingForm from "./components/targetingsForm";
import AdditionalInfo from './components/additionsInfo';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Main}></Route>
      <Route exact path="/typeDonations/" component={TypeDonations}></Route>
      <Route exact path="/typeDonations/target/create" component={TargetingForm}></Route>
      <Route path="/typeDonations/target/create/additionalInfo/" component={AdditionalInfo}/>
    </Router>
  );
}

export default App;
