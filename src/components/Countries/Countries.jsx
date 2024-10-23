import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country";
import './Countryes.css'
const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountry] = useState([])

    const [visitedFlags, setVisitedFlags] = useState([]);
    
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handleVisitedCountry = counrty =>{
        // console.log('add this to your visited country');
        const newVisitedCountries = [...visitedCountries, counrty];
        setVisitedCountry(newVisitedCountries)
    }

    const handleVisitedFlags = flag =>{
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags)
    }


    // Remove item from an array in a stste
    // Use filter to select all the elements the one ypu want to remove

    return (
        <div >
            <h3>Countries: {countries.length}</h3>
            {/* Visited Country */}
            <div>
                <h5>Visited Countries: {visitedCountries.length}</h5>
                <ul>
                        {
                            visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                        }
                </ul>
            </div>
            <div className="flag-container">
                {
                    visitedFlags.map((flag,index) => <img key={index} src={flag}></img>)
                }
            </div>
            {/* Display countries */}
            <div className="contry-container">
                {
                    countries.map(country => <Country key={country.cca3} handleVisitedCountry={handleVisitedCountry} handleVisitedFlags={handleVisitedFlags} counrty={country}></Country>)

                }
            </div>
        </div>
    );
};

export default Countries;