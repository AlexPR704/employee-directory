import React from "react";
import "./style.css";
//snatched this fucntion from mini project in class
// Using the datalist element we can create autofill suggestions based on the props.breeds array
function searchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="name"
          list="names"
          type="text"
          className="form-control"
          placeholder="Search by name"
          id="name"
        />
       
      </div>
    </form>
  );
}

export default searchForm;