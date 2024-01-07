import { CountryType } from './types'; // Import the CountryType type from the appropriate module


export const getAllCountries = async () => {
    try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) {
            
            console.log(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch countries: ", error);
        // Handle or throw error
    }
};

export const getCountry = async (countryCode: number) => {
    try {
        console.log(countryCode)
        const response = await fetch(
            `https://restcountries.com/v3.1/alpha/${countryCode}`
        );
        console.log(response)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: CountryType = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Failed to fetch country: ", error);
        // Handle or throw error
    }
}
