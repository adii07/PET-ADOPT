import { useState, useEffect } from "react";
import Pet from "./Pet";
import useBreedList from "./useBreedList";
/*
function updateLocation(e){
    setLocation(e.target.value);
}
*/

//Array of Animals
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams=()=>{
    const [location,setLocation]=useState("");
    const [animal, updateAnimal] = useState("");//hook to update the animal selected from the animal options
    const [breed, updateBreed] = useState("");
    // const breeds = [];
    const [breeds] = useBreedList(animal);
    const [pets, setPets] = useState([]);

    const [pets, setPets] = useState([]);// to store the pets in an array

    useEffect( ()=>{ requestPets(); },[]);

      async function requestPets() {
        const res = await fetch(
          `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        );
        const json = await res.json();
        setPets(json.pets);
      }
      
   


    return(
        <div className="search-params">
            <form
                onSubmit={e => {
                    e.preventDefault();
                    requestPets();
                }}
            >   
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

            {
                pets.map((pet) => (
                    <Pet name={pet.name} animal={pet.animal} breed={pet.breed} key={pet.id} />
                ))
            }
        </div>
    );
}   

export default SearchParams;

/**
 * Hooks allow dynamic data binding between DOM and UI.
 * without useSate and onChange it not possible to enter anything even in the input tag.
 * This is because react works on triggers,i.e., anytime any change is made it notices the render state and re-renders the whole thing
 */