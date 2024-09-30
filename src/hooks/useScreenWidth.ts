import { useState, useEffect, useCallback } from "react";

export const useScreenWidthChecker = () => {
	const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setScreenWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const isScreenWider = useCallback((breakpoint: number) => screenWidth >= breakpoint, [screenWidth]);

	return isScreenWider;
};
