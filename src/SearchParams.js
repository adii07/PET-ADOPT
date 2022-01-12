import { useState } from "react";

/*
function updateLocation(e){
    setLocation(e.target.value);
}
*/

//Array of Animals
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams=()=>{
    const [location,setLocation]=useState("Delhi");
    const [animal, updateAnimal] = useState("");//hook to update the animal selected from the animal options
    const [breed, updateBreed] = useState("");
    const breeds = [];
    
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

                {/* DropDown Select option to select the animal */}
                <label htmlFor="animal">
                Animal
                <select
                    id="animal"
                    value={animal}
                    onChange={(e) => updateAnimal(e.target.value)}
                    onBlur={(e) => updateAnimal(e.target.value)}
                >
                    <option />{/*Empty/Blank option for the option */}

                    {/* Maps every element of the array as an option in the select menu. */}
                    {ANIMALS.map((animal) => (
                        <option key={animal} value={animal}>
                            {animal}
                        </option>
                    ))}

                </select>
                </label>
                {/* DropDown Select option to select the animal */}

                {/* DropDown Select option to select the breed */}
                <label htmlFor="breed">
                Breed
                <select
                    disabled={!breeds.length}
                    id="breed"
                    value={breed}
                    onChange={(e) => updateBreed(e.target.value)}
                    onBlur={(e) => updateBreed(e.target.value)}
                >
                    <option />
                    {breeds.map((breed) => (
                        <option key={breed} value={breed}>
                            {breed}
                        </option>
                    ))}
                </select>
                </label>
                {/* DropDown Select option to select the breed */}

                <button>Submit</button>
            </form>
        </div>
    );
}   

export default SearchParams;

/**
 * Hooks allow dynamic data binding between DOM and UI.
 * without useSate and onChange it not possible to enter anything even in the input tag.
 * This is because react works on triggers,i.e., anytime any change is made it notices the render state and re-renders the whole thing
 */