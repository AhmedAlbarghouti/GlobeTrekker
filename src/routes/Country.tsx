import { Link } from "react-router-dom";
import { ScrollRestoration, useLoaderData } from "react-router-dom";
import { getAllCountries, getCountry } from "../lib/data";
import { CountryType } from "../lib/types";
export async function loader({ params }: { params: { countryCode: number } }) {
	const countryData = await getCountry(params.countryCode);
	const countries = await getAllCountries();
	return { countryData, countries };
}

export default function Country() {
	const { countryData, countries } = useLoaderData() as {
		countryData: CountryType[];
		countries: CountryType[];
	};
	const country: CountryType = countryData[0];

	const countryBorders =
		country.borders && country.borders.length > 0
			? country.borders.map((border: string) => {
					return countries.find((country) => country.cca3 === border);
			  })
			: [];

	return (
		<div className='min-h-[calc(100svh-80px)] px-4 md:px-20 py-10 md:py-20 bg-very-light-gray  dark:bg-very-dark-blue-bg text-very-dark-blue-text dark:text-white font-nunito flex flex-col gap-16 md:gap-20'>
			<ScrollRestoration />
			<Link
				to={"/"}
				className='flex gap-[10px] items-center bg-white dark:bg-dark-blue rounded-[5px] w-fit py-[10px] px-8 justify-center group shadow-md'
			>
				<svg
					width='20'
					height='20'
					viewBox='0 0 20 20'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<g id='call-made'>
						<path
							id='Shape'
							fillRule='evenodd'
							clipRule='evenodd'
							d='M6.46447 4.10744L7.64298 5.28596L3.75389 9.17504L18.6031 9.17504L18.6031 10.825L3.75389 10.825L7.64298 14.714L6.46447 15.8926L0.57191 10L6.46447 4.10744Z'
							className='dark:fill-white fill-dark-blue '
						/>
					</g>
				</svg>
				<p className='group-hover:underline'>Back</p>
			</Link>

			<div className='flex flex-col xl:flex-row gap-16 md:gap-36 justify-between items-start '>
				<img
					src={country.flags.svg}
					className='  object-cover rounded-[5px]  aspect-[3/2] w-full max-w-3xl   shadow-md max-h-[400px]'
					alt={country.flags.alt || country.name.common}
				/>
				<div className='flex flex-col gap-10 md:gap-16 w-full '>
					<h3 className='font-extrabold text-4xl'>{country.name.common}</h3>
					<div className='flex flex-col md:flex-row gap-8 justify-between text-base'>
						<div className='flex flex-col gap-2'>
							<p>
								<span className='font-semibold'>Native Name:</span>{" "}
								{Object.values<{ common: string }>(country.name.nativeName)[0]
									.common || "N/A"}
							</p>
							<p>
								<span className='font-semibold'>Population:</span>{" "}
								{country.population.toLocaleString()}
							</p>
							<p>
								<span className='font-semibold'>Region:</span>{" "}
								{country.region || "N/A"}
							</p>
							<p>
								<span className='font-semibold'>Sub Region:</span>{" "}
								{country.subregion || "N/A"}
							</p>
							<p>
								<span className='font-semibold'>Capital:</span>{" "}
								{country.capital || "N/A"}
							</p>
						</div>
						<div className='flex flex-col gap-2'>
							<p>
								<span className='font-semibold'>Top Level Domain:</span>{" "}
								{country.tld[0]}
							</p>
							<p>
								<span className='font-semibold'>Currencies:</span>{" "}
								{Object.values<{ name: string }>(country.currencies)
									.map((currency) => currency.name)
									.join(", ")}
							</p>
							<p>
								<span className='font-semibold'>Languages:</span>{" "}
								{Object.values(country.languages).join(", ")}
							</p>
						</div>
					</div>
					{countryBorders.length > 0 && (
						<div className='flex gap-4 items-center flex-wrap'>
							<p className='font-semibold inline-block'>Border Countries:</p>

							{countryBorders.map((country: CountryType, index: number) => {
								return (
									<Link
										key={index}
										to={`/country/${country.ccn3}`}
										className='bg-white text-sm dark:bg-dark-blue rounded-[2px] w-fit py-[10px] px-8 justify-center  shadow-md inline-block'
									>
										{country?.name.common}
									</Link>
								);
							})}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
