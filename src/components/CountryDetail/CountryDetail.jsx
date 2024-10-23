import CountryData from "../CountryData/CountryData";

const CountryDetail = (props) => {
    // const { counrty, handleVisitedCountry, handleVisitedFlags } = props;
    return (
        <div>
            <h4>Country Details</h4>
            <hr />
            {/* <CountryData
                counrty={counrty}
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlags={handleVisitedFlags}
            ></CountryData> */}
            <CountryData {...props}></CountryData>
        </div>
    );
};

export default CountryDetail;