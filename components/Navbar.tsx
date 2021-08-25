import { useEffect, useState } from "react";

import Link from "next/link";
import classes from "../styles/Navbar.module.css";

export function Navbar() {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const callback = () => {
			const pixels = Math.round(window.scrollY);
			if (pixels > 0) {
				if (!scrolled) setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("touchmove", callback);
		window.addEventListener("scroll", callback);

		callback();
		return () => {
			window.removeEventListener("touchmove", callback);
			window.removeEventListener("scroll", callback);
		};
	}, []);

	return (
		<header
			className={`${classes.navbar} ${scrolled ? classes.scrolled : ""}`}
		>
			<Link href="/">
				<a className={classes.headerTitle}>Edazpotato</a>
			</Link>

			<nav className={classes.nav}>
				<Link href="/">
					<a className={classes.link}>Home</a>
				</Link>
				<Link href="/datapacks">
					<a className={classes.link}>Datapacks</a>
				</Link>
			</nav>
		</header>
	);
}
