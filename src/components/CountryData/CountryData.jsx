
const CountryData = ({ counrty, handleVisitedCountry, handleVisitedFlags }) => {
    console.log('inside country data: ',counrty, handleVisitedCountry, handleVisitedFlags )
    return (
        <div>
            <h4>Country Data: {counrty?.name?.common}</h4>
        </div>
    );
};

export default CountryData;