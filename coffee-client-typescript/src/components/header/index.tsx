import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	// <header class={style.header}>
	// 	<a href="/" class={style.logo}>
	// 		<img src="../../assets/preact-logo-inverse.svg" alt="Preact Logo" height="32" width="32" />
	// 		<h1>Preact CLI</h1>
	// 	</a>
	// 	<nav>
	// 		<Link activeClassName={style.active} href="/">
	// 			Home
	// 		</Link>
	// 		<Link activeClassName={style.active} href="/profile">
	// 			Me
	// 		</Link>
	// 		<Link activeClassName={style.active} href="/profile/john">
	// 			John
	// 		</Link>
	// 	</nav>
	// </header>
	<section class="w-full bg-white gray-900 2xl:h-32 2xl:shadow-lg tails-selected-element">
		<div class="mx-auto flex max-w-7xl items-center h-16 py-1 box-content justify-between">
			<div class="flex items-center space-x-2 p-4">
				<button className="flex appearance-none p-1 text-gray-500 md:hidden">
					<div class="flex w-5 h-5 relative justify-center items-start space-y-1 flex-col">
						<span id="bar1"
							  class="w-full h-0.5 transition-all duration-300 rounded-full bg-gray-500"></span>
						<span id="bar2" class="w-5/6 h-0.5 transition-all duration-300 rounded-full bg-gray-500"></span>
						<span id="bar3"
							  class="w-full h-0.5 transition-all duration-300 rounded-full bg-gray-500"></span>
					</div>
				</button>
				<a href="#_" className="text-gray-900 font-extrabold uppercase text-sm flex items-center">
					<svg className="w-7 h-auto text-purple-600 mr-2" viewBox="0 0 100 100"
						 xmlns="http://www.w3.org/2000/svg">
						<defs>
							<path id="a" d="M0 0h59.314v59.414H0z"></path>
						</defs>
						<g fill="none" fill-rule="evenodd">
							<path
								d="M9.343 40.713a9.28 9.28 0 0 0-6.606 2.736A9.28 9.28 0 0 0 0 50.055a9.28 9.28 0 0 0 2.737 6.607A9.28 9.28 0 0 0 9.343 59.4a9.279 9.279 0 0 0 6.607-2.737c3.643-3.643 3.643-9.57 0-13.213a9.279 9.279 0 0 0-6.607-2.736M70.329 39.07a9.28 9.28 0 0 0 6.606-2.736 9.28 9.28 0 0 0 2.737-6.607 9.279 9.279 0 0 0-2.737-6.606 9.281 9.281 0 0 0-6.606-2.737 9.282 9.282 0 0 0-6.607 2.736 9.281 9.281 0 0 0-2.737 6.607 9.28 9.28 0 0 0 2.737 6.607 9.28 9.28 0 0 0 6.607 2.736M50.029 81.37a9.28 9.28 0 0 0-6.607 2.736 9.28 9.28 0 0 0-2.736 6.606 9.28 9.28 0 0 0 2.736 6.607 9.28 9.28 0 0 0 6.607 2.736 9.28 9.28 0 0 0 6.607-2.736 9.28 9.28 0 0 0 2.736-6.607 9.28 9.28 0 0 0-2.736-6.606 9.28 9.28 0 0 0-6.607-2.736M70.329 61.041a9.267 9.267 0 0 0-6.304 2.462 13.65 13.65 0 0 1-2.104 1.43c-3.18 1.764-7.407 2.736-11.904 2.736s-8.724-.972-11.904-2.737a14.134 14.134 0 0 1-1.659-1.075 13.798 13.798 0 0 1-1.297-1.943c-1.765-3.179-2.736-7.407-2.736-11.903 0-4.497.971-8.725 2.736-11.904.462-.832.965-1.56 1.499-2.19a9.267 9.267 0 0 0 2.359-6.19 9.279 9.279 0 0 0-2.737-6.606 9.281 9.281 0 0 0-6.606-2.737 9.282 9.282 0 0 0-6.607 2.736 9.281 9.281 0 0 0-2.737 6.607c0 2.496.972 4.842 2.737 6.607.07.07.145.13.216.196.356.479.696 1.001 1.016 1.577 1.765 3.179 2.736 7.407 2.736 11.904 0 4.496-.971 8.724-2.736 11.903a13.887 13.887 0 0 1-1.24 1.873 9.28 9.28 0 0 0-2.729 6.598 9.28 9.28 0 0 0 2.737 6.605 9.28 9.28 0 0 0 6.607 2.737 9.273 9.273 0 0 0 6.478-2.62 13.791 13.791 0 0 1 1.963-1.314c3.18-1.765 7.407-2.737 11.904-2.737s8.725.972 11.904 2.737c.644.357 1.227.74 1.75 1.142.018.018.033.038.051.055a9.28 9.28 0 0 0 6.607 2.737 9.28 9.28 0 0 0 6.606-2.737 9.28 9.28 0 0 0 2.737-6.605 9.28 9.28 0 0 0-2.737-6.607 9.28 9.28 0 0 0-6.606-2.737"
								fill="currentColor" className=""></path>
							<g transform="translate(40.686)">
								<mask id="b" fill="currentColor"></mask>
								<path
									d="M56.578 43.45a9.28 9.28 0 0 0-6.607-2.737c-2.38 0-4.62.893-6.353 2.506-.605.5-1.294.974-2.079 1.41-3.18 1.764-7.407 2.736-11.904 2.736s-8.724-.972-11.903-2.737a14.126 14.126 0 0 1-1.66-1.075 13.797 13.797 0 0 1-1.296-1.942c-1.765-3.18-2.737-7.407-2.737-11.904s.972-8.725 2.737-11.904c.48-.865 1.004-1.62 1.562-2.268v-.012a9.267 9.267 0 0 0 2.349-6.18 9.28 9.28 0 0 0-2.737-6.606A9.28 9.28 0 0 0 9.343 0a9.28 9.28 0 0 0-6.606 2.737A9.28 9.28 0 0 0 0 9.343c0 2.302.836 4.471 2.35 6.18v.009a13.504 13.504 0 0 1 1.565 2.27c1.765 3.18 2.737 7.408 2.737 11.905 0 4.497-.972 8.724-2.737 11.904a13.502 13.502 0 0 1-1.566 2.272v.008A9.266 9.266 0 0 0 0 50.071c0 2.495.972 4.841 2.737 6.606a9.28 9.28 0 0 0 6.606 2.737 9.28 9.28 0 0 0 6.607-2.737c.023-.023.042-.048.064-.07a14.095 14.095 0 0 1 1.718-1.118c3.179-1.765 7.406-2.737 11.903-2.737 4.497 0 8.725.972 11.904 2.737.81.449 1.518.938 2.137 1.455A9.267 9.267 0 0 0 49.97 59.4a9.28 9.28 0 0 0 6.607-2.737 9.28 9.28 0 0 0 2.736-6.607 9.28 9.28 0 0 0-2.736-6.606"
									fill="currentColor"></path>
							</g>
						</g>
					</svg>
					<span class="">logo</span>
				</a>
			</div>
			<nav id="navr"
				 class="md:relative md:w-auto w-full md:mt-0 mt-16 translate-y-2 md:translate-y-0 top-0 md:pb-0 pb-3 bg-white md:bg-transparent absolute items-center md:space-x-2 text-sm font-medium text-gray-500 md:flex hidden">
				<Link href="/"
				   className="md:rounded bg-white md:px-3 px-5 md:py-2 py-3 transition hover:bg-gray-100 md:inline block md:w-auto w-full">Home</Link>
				<Link href="/feed"
				   className="md:rounded bg-white md:px-3 px-5 md:py-2 py-3 transition hover:bg-gray-100 md:inline block md:w-auto w-full">Coffee Feed</Link>

			</nav>
			<div class="flex items-center space-x-2 text-sm pr-4 font-medium text-gray-800">
				<a href="#_"
				   className="inline rounded bg-white px-3 py-2 text-gray-500 hover:text-gray-600 transition hover:bg-gray-100">Login</a>
				<a href="#_" className="rounded bg-purple-600 px-3 py-2 text-white transition hover:bg-purple-500">Sign
					Up</a>
			</div>
		</div>
	</section>
);

export default Header;
