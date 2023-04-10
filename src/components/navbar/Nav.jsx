import React from "react";
import SearchBar from "../searchBar/SearchBar";
import { Link } from "react-router-dom";

// eslint-disable-next-line
class Nav extends React.Component {
 // eslint-disable-next-line
 constructor(props) {
  super(props)
 }

 render() {
  return (
   <div>
    <SearchBar onSearch={this.props.onSearch} />
    <Link to={"../about/About.jsx"}>About</Link>
    <Link>Home</Link>
   </div >
  )
 }
}

export default Nav
