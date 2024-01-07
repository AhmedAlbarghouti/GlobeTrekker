import { useState } from "react";

const SearchFilters = ({
	setSearchTerm,
	setSelectedRegion,
}: {
	setSearchTerm: (term: any) => void;
	setSelectedRegion: (region: any) => void;
}) => {
	const [Region, setRegion] = useState("Filter by Region");
	const handleSearchChange = (event: { target: { value: any } }) => {
		setSearchTerm(event.target.value);
	};

	const handleRegionFilter = (region: any) => {
		setSelectedRegion(region);
		setRegion(region);
	};

	return (
		<div className='flex flex-col md:flex-row gap-10 justify-between '>
			<div className='px-8 py-2 flex gap-6 items-center bg-white dark:bg-dark-blue shadow-md rounded-[5px] text-sm w-full md:max-w-md '>
				<svg
					width='18'
					height='18'
					viewBox='0 0 18 18'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<g id='search'>
						<path
							id='Shape'
							fillRule='evenodd'
							clipRule='evenodd'
							d='M12.5 11H11.7L11.4 10.7C12.4 9.6 13 8.1 13 6.5C13 2.9 10.1 0 6.5 0C2.9 0 0 2.9 0 6.5C0 10.1 2.9 13 6.5 13C8.1 13 9.6 12.4 10.7 11.4L11 11.7V12.5L16 17.5L17.5 16L12.5 11ZM6.5 11C4 11 2 9 2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5C11 9 9 11 6.5 11Z'
							className='dark:fill-white fill-dark-blue'
						/>
					</g>
				</svg>

				<input
					placeholder='Search for a country…'
					onChange={handleSearchChange}
					type='search'
					name='search'
					id='search'
					className='p-2 bg-white dark:bg-dark-blue hover:outline-none active:outline-none focus:outline-none w-full'
				/>
			</div>

			<div className='inline-block  group relative drop-shadow-md'>
				<button className='px-6 py-[18px] flex items-center gap-12 bg-white dark:bg-dark-blue rounded-[5px] text-sm'>
					{Region}
					<svg
						width='12'
						height='12'
						viewBox='0 0 12 12'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M9.45 3.45L6 6.9L2.55 3.45L1.5 4.5L6 9L10.5 4.5L9.45 3.45Z'
							className='dark:fill-white fill-dark-blue'
						/>
					</svg>
				</button>
				<div className='absolute hidden overflow-auto group-hover:flex  flex-col gap-2 px-6 py-4  bg-white dark:bg-dark-blue w-full border-t-[4px] dark:border-very-dark-blue-bg rounded-[5px] text-sm'>
					<a href='#' onClick={() => handleRegionFilter("Africa")}>
						Africa
					</a>
					<a href='#' onClick={() => handleRegionFilter("Americas")}>
						Americas
					</a>
					<a href='#' onClick={() => handleRegionFilter("Asia")}>
						Asia
					</a>
					<a href='#' onClick={() => handleRegionFilter("Europe")}>
						Europe
					</a>
					<a href='#' onClick={() => handleRegionFilter("Oceania")}>
						Oceania
					</a>
				</div>
			</div>
		</div>
	);
};

export default SearchFilters;
