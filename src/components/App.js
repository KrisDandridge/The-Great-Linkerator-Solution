import {getLinks} from "../api/fontendAPI"
import React from "react";
import {useEffect, useState} from "react"
import Header from "./Header"

import "./App.css"
import LinkTable from "./LinkTable";
import TableRows  from "./TableRows"
import SearchBar from "./SearchBar";
import CreateLinkForm from "./CreateLinkForm";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";



const App = (props) => {
  //const [linkLists, setLinksLists] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  
  const  [searchType, setSearchType] = useState([])

  // useEffect( () => {
  //   setLinksLists([])
  //   getLinks().then(setLinksLists, console.error)

  // }, []);
  // console.log(linkLists)




  return  <Router> 
  <div>
  <Header 

   
  />

<li>
              <Link to="/hello">Home</Link>
            </li>

 <SearchBar searchType={searchType}
   setSearchType={setSearchType}
   searchTerm={searchTerm}
   setSearchTerm={setSearchTerm}
 />

        
      <div>
      <h1 id='title'>React Table</h1>
            <table id='employee'>
                <thead>
                    <tr><LinkTable/></tr>
                </thead>
                <tbody>
                <TableRows/>
                 
                </tbody>
            </table>

      </div>

      <Switch>
            <Route path="/hello">
              <CreateLinkForm />
            </Route>
           </Switch>
    
    
      </div>

</Router>
};

export default App;