
import dress_1 from "@images/dress_1.png"
import dress_2 from "@images/dress_2.png"
import dress_2_2 from "@images/dress_2_2.png"
import dress_3 from "@images/dress_3.png"
import dress_4 from "@images/dress_4.png"
import dress_5 from "@images/dress_5.png"
import dress_6 from "@images/dress_6.png"
import dress_7 from "@images/dress_7.png"

export type sizesType = "xs"| "s" | "m" | "l" | "xl";

export type product = {
    id : string;
    name : string;
    price : number;
    category : string;
    size ?: sizesType;
    quantity ?: number;
    images : string[]
    detail : string;
}

export type productRequired = Required<product>;

export const products : product[] = [
 {
    id: "1",
    name : "Shalwar Qameez",
    price : 100,
    category : "dress",
    images: [dress_1.src],
    detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
 },
 {
    id:"2",
    name : "Blue Shalwar Qameez",
    category : "dress",
    price : 80,
    images : [dress_2.src , dress_2_2.src],
    detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
 },
 {
    id:"3",
    name : "Blue Wait Coat Shalwar Qameez",
    category : "dress",
    price : 120,
    images : [dress_3.src],
    detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
 },
 {
    id:"4",
    name : "Black Wait Coat",
    category : "waist coat",
    price : 30,
    images : [dress_4.src],
    detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
 },
 {
    id:"5",
    name : "Brown Shalwar Qameez With Black waist coat",
    category : "dress",
    price : 100,
    images : [dress_5.src],
    detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
 },
 {
    id:"6",
    name : "Black Shalwar Qameez",
    category : "dress",
    price : 70,
    images : [dress_6.src],
    detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
 },
 {
    id:"7",
    name : "Brown Shalwar Qameez",
    category : "dress",
    price : 70,
    images : [dress_7.src],
    detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
 },
]