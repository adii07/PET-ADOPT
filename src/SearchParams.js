import { useState } from "react";

/*
function updateLocation(e){
    setLocation(e.target.value);
}
*/

const SearchParams=()=>{
    const [location,setLocation]=useState("Delhi");
    return(
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                    <input id="location" value={location} 
                    // These are the 2 ways of calling the function linne function vs traditional way, both do the same thing.
                    onChange={e=> setLocation(e.target.value)} 
                    // onChange={updateLocation} 
                    placeholder="Location"/>
                </label>
                <button>Submit</button>
            </form>
        </div>
    );
}   

export default SearchParams;

