import React from "react";
import SearchBar from "../searchBar/SearchBar";

class Nav extends React.Component {
 constructor(props) {
  super(props)
 }

 render() {
  return (
   <div>
    <SearchBar />
   </div >
  )
 }
}

export default Nav
