declare module "*.svg" {
	import React from "react";
	const SVG: React.FC<React.SVGAttributes<SVGElement>>;
	export default SVG;
}
