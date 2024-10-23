
const CountryData = ({ counrty, handleVisitedCountry, handleVisitedFlags }) => {
    return (
        <div>
            <h4>Country Data: {counrty?.name?.common}</h4>
        </div>
    );
};

export default CountryData;