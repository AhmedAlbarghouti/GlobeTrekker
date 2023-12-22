import { useState, useEffect } from "react";
const useTheme = () => {
	const [theme, setTheme] = useState(
		localStorage.theme
			? localStorage.theme
			: window.matchMedia("(prefers-color-scheme: dark)").matches
			? "dark"
			: "light"
	);

	useEffect(() => {
		const root = window.document.documentElement;
		if (theme === "dark") {
			root.classList.add("dark");
			root.classList.remove("light");
		} else {
			root.classList.add("light");
			root.classList.remove("dark");
		}
	}, [theme]);

	return [theme, setTheme];
};

export default useTheme;
