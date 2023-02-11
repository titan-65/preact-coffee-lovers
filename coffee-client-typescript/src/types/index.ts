export interface Coffee {
    objectId: string;
    title: string;
    coffeeImage?: string;
    coffeeImageData?: Blob;
    details: string;

}

export interface User {
    objectId: string;
    firstName: string;
    lastName: string;
    password?: string;
    email: string;
    coffee?: Coffee[]
}

export interface CoffeeLoverPost {
    objectId: string;
    title: string;
    user: User;
    coffee: Coffee;
    rating: number;
    comment?: Comment[]

}

export interface Comment {
    id?: string;
    comment: string;
    user: User;
    likes: number;
    dislikes: number;
}