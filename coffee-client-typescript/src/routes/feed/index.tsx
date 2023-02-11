import { h } from "preact"
import { useState } from "preact/hooks";
import { CoffeeLoverPost } from "../../types";

const Feed = () => {
    const coffeeLoverPostData: CoffeeLoverPost[] = [
        {
            objectId: '1',
            title: 'Best coffee I\'ve ever had',
            user: {
                objectId: '1',
                firstName: 'Jane',
                lastName: 'Doe',
                email: 'jane.doe@email.com'
            },
            coffee: {
                objectId: '1',
                title: 'Ethiopian Yirgacheffe',
                coffeeImage: 'https://images.unsplash.com/photo-1621135177072-57c9b6242e7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4000&q=80',
                details: 'Ethiopian Yirgacheffe is a light roast coffee that is known for its bright and fruity notes. It is grown in the Yirgacheffe region of Ethiopia, which is known for producing some of the best coffee in the world.'
            },
            rating: 5,

        },
        {
            objectId: '2',
            title: 'Disappointed in this coffee',
            user: {
                objectId: '4',
                firstName: 'Mike',
                lastName: 'Johnson',
                email: 'mike.johnson@email.com'
            },
            coffee: {
                objectId: '2',
                title: 'Colombian Supremo',
                coffeeImage: 'https://images.unsplash.com/photo-1527678357412-ef45dfbd9ecc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
                details: 'Colombian Supremo is a medium-dark roast coffee that is known for its rich and smooth flavor. It is grown in the mountains of Colombia, which is one of the largest coffee-producing countries in the world.'
            },
            rating: 2,

        }
    ];
    return (
        <div>
            <CoffeeListFeed feeds={coffeeLoverPostData} />
        </div>
    )
}



type CoffeeListFeedProps = {
    feeds?: CoffeeLoverPost[],
    feed?: CoffeeLoverPost
}
const CoffeeListFeed = ({feeds}: CoffeeListFeedProps) => {


    return (
        <div>
            <section>
                { feeds.map((feed) => {
                    return (
                        <CoffeeListFeedItem feed={feed} key={feed.objectId} />
                    )
                })}
            </section>
        </div>
    )
}



const CoffeeListFeedItem = ({feed}: CoffeeListFeedProps) => {
    return (
        <section class="py-16 bg-gray-50 xl:px-0 px-8 tails-selected-element">
            <div class="w-full max-w-6xl mx-auto">
                <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-slate-900 sm:text-center text-left">{feed.title}</h2>
                <p class="w-full text-left sm:text-center mb-8 md:text-lg text-slate-500">{feed.coffee.details}</p>
                <div class="w-full relative md:pr-48">
                    <img className="rounded-t-2xl md:rounded-2xl aspect-video object-cover"
                         src={feed.coffee.coffeeImage}
                         alt="adventure destination" />
                        <div
                            class="md:absolute relative lg:w-96 w-full md:max-w-md right-0 top-0 md:py-8 lg:py-12 h-full">
                            <div
                                class="w-full h-full flex flex-col items-start justify-between rounded-b-2xl md:rounded-2xl p-8 bg-white shadow-xl">
                                <div
                                    class="bg-gray-50 mb-3 lg:flex flex md:hidden border border-gray-100 text-cyan-500 px-3.5 space-x-1 items-center py-1.5 text-xs rounded-full inline-block font-bold">
                                    <svg className="w-3.5 -ml-1 h-3.5" fill="currentColor" viewBox="0 0 20 20"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                    <span class="">Best Deal</span>
                                </div>
                                <div class="relative">
                                    <h3 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800">Panama</h3>
                                    <p class="text-gray-500 text-sm py-5 lg:py-3 lg:text-base">Enjoy the beautiful
                                        sunsets and luxurious resorts of the worlds finest destination. Panama is among
                                        the most sought after destination locations.</p>
                                </div>
                                <a href="#_"
                                   className="bg-cyan-500 px-6 py-3 text-sm font-semibold rounded-full text-white">Explore
                                    My Options</a>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default Feed;