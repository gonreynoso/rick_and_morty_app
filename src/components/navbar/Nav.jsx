import React from "react";
import SearchBar from "../searchBar/SearchBar";

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
   </div >
  )
 }
}

export default Nav
