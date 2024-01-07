export interface CountryType {
	ccn3: any;
	borders: any;
	name: {
		common: string;
		nativeName: {
			[lang: string]: {
				official: string;
				common: string;
			};
		};
	};
	altSpellings: string[];
	flags: {
		png: string | undefined;
		svg: string;
		alt: string;
	};
	population: number;
	region: string;
	capital: string[];
	subregion: string;
	nativeName: string;
	tld: string[];
	currencies: [];
	languages: {
		name: string;
	}[];
	cca3: string;
}