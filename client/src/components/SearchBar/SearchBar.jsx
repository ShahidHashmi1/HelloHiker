import React from "react";
import { MDBCol, MDBIcon } from "mdbreact";
import './searchbar.css' 

const SearchPage = () => {
    return (
        <div className='searchbar'>
      <MDBCol md="4">
        <div className="active-pink-3 active-pink-4 mb-4">
          <input className="form-control" type="text" placeholder="Search Trails" aria-label="Search" />
        </div>
          <button className="search-btn">Search</button>
      </MDBCol>
      </div>
    );
  }
  
  export default SearchPage;
