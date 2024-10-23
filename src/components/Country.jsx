import { useState } from 'react';
import './Country.css';

const Country = ({ counrty, handleVisitedCountry, handleVisitedFlags }) => {
    const { name, flags, capital, population, area, cca3 } = counrty;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited)
    }

    // console.log(handleVisitedCountry)
    // console.log(handleVisitedFlags)

    // dynamic class add
    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{ color: visited ? 'red' : 'white' }}>Name: {name?.common}</h3>
            <h3>Capital: {capital?.length > 0 ? capital[0] : 'NaN'}</h3>
            <img className="img" src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={() => handleVisitedCountry(counrty)} style={{ marginBottom: '10px' }}>Mark Visited</button>
            <button onClick={() => handleVisitedFlags(counrty.flags.png)} style={{ marginBottom: '10px' }}>Add Flag</button>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'I have Visited this country.' : 'I want to visit'}
        </div>
    );
};

export default Country;