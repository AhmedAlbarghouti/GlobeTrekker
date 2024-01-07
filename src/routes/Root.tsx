import SearchFilters from "../components/layout/SearchFilters";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllCountries } from "../lib/data";
import { CountryType } from "../lib/types";

const Root = () => {
	const [countries, setCountries] = useState<CountryType[]>([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedRegion, setSelectedRegion] = useState("");
	useEffect(() => {
		const fetchCountries = async () => {
			const data = await getAllCountries();
			setCountries(data);
		};

		fetchCountries();
	}, []);

	const filteredCountries = countries.filter((country) => {
		return (
			country.name.common.toLowerCase().startsWith(searchTerm.toLowerCase()) &&
			(selectedRegion ? country.region === selectedRegion : true)
		);
	});

	return (
		<div className='px-4 lg:px-20 py-6 lg:py-12 bg-very-light-gray min-h-screen dark:bg-very-dark-blue-bg text-very-dark-blue-text dark:text-white font-nunito'>
			<SearchFilters
				setSearchTerm={setSearchTerm}
				setSelectedRegion={setSelectedRegion}
			/>
			<div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 py-12 gap-[75px]'>
				{filteredCountries.map((country, index) => {
					return (
						<Link
							key={index}
							className='cursor-pointer w-full  shadow-md '
							to={`country/${country.ccn3}`}
						>
							<img
								src={country.flags.svg}
								className='aspect-[3/2] w-full object-cover rounded-t-[5px]'
								alt={country.flags.alt || country.name.common}
							/>
							<div className='bg-white dark:bg-dark-blue  p-6 w-full gap-4 flex flex-col rounded-b-[5px]'>
								<p className='text-lg font-extrabold overflow-ellipsis overflow-hidden whitespace-nowrap max-w-fit'>
									{country.name.common}
								</p>
								<div className='flex flex-col gap-2 pb-[22px]'>
									<p className='text-sm'>
										Population: {country.population.toLocaleString()}
									</p>
									<p className='text-sm'>Region: {country.region || "N/A"}</p>
									<p className='text-sm'>Capital: {country.capital || "N/A"}</p>
								</div>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default Root;
