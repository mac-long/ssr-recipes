import { useEffect, useState } from "react";

export default function useInView(
	ref: React.MutableRefObject<HTMLElement | null>,
	options?: IntersectionObserverInit,
) {
	const [isInView, setIsInView] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			setIsInView(entry.isIntersecting);
		}, options);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			if (ref.current) {
				observer.unobserve(ref.current);
			}
		};
	}, [ref, options]);

	return isInView;
}
