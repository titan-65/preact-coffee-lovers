import { h } from 'preact';
import style from './style.css';

const Home = () => {
	return (
		<div>
			<section class="w-full py-20 bg-white tails-selected-element">
				<div class="flex flex-col items-center px-12 mx-auto max-w-7xl lg:flex-row">
					<div class="relative z-20 flex flex-col items-start justify-center w-full h-full lg:w-5/12">
						<p class="pb-5 text-sm font-medium tracking-wide text-pink-500 uppercase">crafted with Love
							🥰</p>
						<h1 class="text-5xl font-bold xl:text-6xl pb-7">The Ultimate <br />Design Collection</h1>
						<p class="text-lg text-gray-500 pb-7">We've handcrafted the ultimate design collection that we
							think you are going to love. Each template and design has been built with clean and
							functional TailwindCSS Awesomeness.</p>
						<div class="flex flex-col items-center w-full sm:w-auto sm:flex-row sm:space-x-10">
							<a href="#_"
							   className="px-7 sm:w-auto justify-center w-full flex items-center overflow-hidden group relative py-3.5 text-xl font-medium text-white bg-gray-900 rounded-full">
								<span
									class="absolute inset-0 w-full h-0 transition-all duration-300 ease-out bg-pink-500 group-hover:h-full"></span>
								<span class="relative">Get Started</span>
							</a>
							<a href="#_"
							   className="flex items-center mt-10 text-xl font-medium underline transition duration-150 ease-out hover:text-pink-500 sm:mt-0">
								<svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20"
									 xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd"
										  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
										  clip-rule="evenodd"></path>
								</svg>
								<span class="">Learn More</span>
							</a>
						</div>
					</div>

					<div class="relative z-10 w-full h-full my-16 lg:my-0 lg:w-7/12">
						<img className="relative z-40 w-full h-full"
							 src="https://images.unsplash.com/photo-1530373239216-42518e6b4063?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1887&amp;q=80"/>
							<div
								class="box-content absolute inset-0 z-30 hidden scale-150 translate-x-40 translate-y-10 rounded-full w-80 lg:block h-80 xl:w-96 xl:h-96 bg-pink-50"></div>
							<div
								class="absolute bottom-0 left-0 z-20 hidden -translate-x-3 -translate-y-12 rounded-full opacity-50 w-72 lg:block h-72 bg-yellow-50"></div>
							<div
								class="absolute top-0 left-0 z-20 hidden -translate-x-12 -translate-y-12 rounded-full opacity-50 w-72 lg:block h-72 bg-blue-50"></div>
					</div>
				</div>
				{/*<div class="tails-hover-element">section</div>*/}
			</section>
			<section class="h-auto px-10 bg-black py-16 tails-selected-element">
				<div class="max-w-3xl mx-auto space-y-4 sm:text-center">
					<h2 class="text-4xl sm:text-5xl font-semibold text-white">
						Simple, yet powerful features
					</h2>
					<p class="text-gray-400 text-lg sm:text-xl leading-normal">
						We've built one of the most powerful systems available and we've made it super easy-to-use as
						well. Super-charge your business with our revolutionary tools.
					</p>
				</div>
			</section>
			<section class="relative w-full overflow-hidden bg-yellow-50 tails-selected-element">
				<div class="absolute top-0 left-0 z-10 hidden mt-20 -ml-32 scale-110 blur-xl opacity-70 2xl:block">
					<div class="w-64 h-64 rounded-full bg-[#def0f0] opacity-70"></div>
				</div>
				<div
					class="relative z-20 flex items-center justify-center max-w-5xl px-10 py-24 mx-auto md:justify-start md:py-32">
					<div class="relative z-20 flex flex-col items-start max-w-md space-y-8">
						<p class="font-bold tracking-wider uppercase">Ready to Unlock The</p>
						<h1 class="text-5xl font-extrabold">Right Marketing<br />Design Tools</h1>
						<p class="text-[#5f5843] font-medium">We've unlocked the tools and designs that you need for
							your business to succeeed. With these split-tested and finely crafted templates you'll be
							converting your visitors to customers in no time!</p>
						<a href="#_"
						   className="inline-block w-full px-5 py-4 font-bold text-center text-white bg-black md:w-auto">Sign
							Up Now</a>
					</div>
				</div>
				<div class="absolute top-0 right-0 hidden w-1/3 h-full md:block">
					<img className="object-cover w-full h-full"
						 src="https://images.unsplash.com/photo-1596078841463-5504c992222f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=764&amp;q=80"/>
				</div>
			</section>
			<section class="relative w-full overflow-hidden 2xl:bg-cyan-300 tails-selected-element"
					 >
				<div class="absolute top-0 left-0 z-10 hidden mt-20 -ml-32 scale-110 blur-xl opacity-70 2xl:block">
					<div class="w-64 h-64 rounded-full bg-[#def0f0] opacity-70"></div>
				</div>
				<div
					class="relative z-20 flex items-center justify-center max-w-5xl px-10 py-24 mx-auto md:justify-start md:py-32">
					<div class="relative z-20 flex flex-col items-start max-w-md space-y-8">
						<p class="font-bold tracking-wider uppercase">Ready to Unlock The</p>
						<h1 class="text-5xl font-extrabold">Right Marketing<br />Design Tools</h1>
						<p class="text-[#5f5843] font-medium">We've unlocked the tools and designs that you need for
							your business to succeeed. With these split-tested and finely crafted templates you'll be
							converting your visitors to customers in no time!</p>
						<a href="#_"
						   className="inline-block w-full px-5 py-4 font-bold text-center text-white bg-black md:w-auto">Sign
							Up Now</a>
					</div>
				</div>
				<div class="absolute top-0 right-0 hidden w-1/3 h-full md:block">
					<img className="object-cover w-full h-full"
						 src="https://images.unsplash.com/photo-1519869325930-281384150729?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1466&amp;q=80"/>
				</div>
			</section>
		</div>
	);
};



export default Home;
