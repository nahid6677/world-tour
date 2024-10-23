import CountryData from "../CountryData/CountryData";

const CountryDetail = ({ counrty, handleVisitedCountry, handleVisitedFlags }) => {

    return (
        <div>
            <h4>Country Details</h4>
            <hr />
            <CountryData
                counrty={counrty}
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlags={handleVisitedFlags}
            ></CountryData>
        </div>
    );
};

export default CountryDetail;