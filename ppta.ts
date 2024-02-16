// Assignment # 2:-


// let person: string = "Hello Raza This is Assginment # 2"
// console.log(person);


// Assignment # 3:-


// let name_case: string = "syed Muhammad raza";

// console.log(`Uppercase: ${name_case.toUpperCase()}`);    // Uppercase
// console.log(`Lowercase: ${name_case.toLowerCase()}`);    // Lowercase

//_________________________________


// let name_case: string = "syed Muhammad raza";               // TitleCase

// let name_split: string [] = name_case.split(" ");              
// let title_case:string = ""

// for (let i = 0; i < name_split.length; i++) {
//     title_case += name_split[i].charAt(0).toUpperCase()+name_split[i].slice(1).toLowerCase()+" " 
    
// }
// console.log(title_case);


// Assignment # 4:-


// console.log(`Albert Einstein once said, “A person who never made a mistake never tried anything new.”`);


// Assignment # 5:-


// let famous_person:string = "Albert Einstein";
// let message:string = `${famous_person} once said, “A person who never made a mistake never tried anything new.”`;
// console.log(message);


// Assignment # 6:-


// let myName:string = "Syed Muhammad Raza\n Zaidi";
// let myName2:string = "\t Syed Muhammad Raza Zaidi \t"
// console.log(myName);
// console.log(myName2);


// Assignment # 7:-


// console.log(5+3);
// console.log(10-2);
// console.log(4*2);
// console.log(16/2);



// Assignment # 8:-


// console.log(`
// ___________________________________________________________________________________________________________________________________________________________________

// console.log(5+3) =
// ${5+3}
// console.log(10-2) =
// ${10-2}
// console.log(4*2) =
// ${4*2}
// console.log(16/2) =
// ${16/2}

// ___________________________________________________________________________________________________________________________________________________________________
// `);


// Assignment # 9:-

// let myFavouriteNumber:string = "5"
// console.log(`My Favourite Number is ${myFavouriteNumber}.`);


// Assignment # 10:-

// // My naem:-
// let myName001:string = "Syed Muhammad Raza";
// // Current Date:-
// let date:Date = new Date;

// console.log(`My name is "${myName001}" and currently date & time is ${date}`);

// console.log("My program prints the name of the programer with current Date & Time");


// Assignment # 11:-


// let friendsName: string [] = ["Azan", "Haider","Hassan"]

// console.log(friendsName[0]);
// console.log(friendsName[1]);
// console.log(friendsName[2]);


// Assignment # 12:-

// let friendsName: string [] = ["Azan", "Haider","Hassan"]

// for (let i = 0; i < friendsName.length; i++) {
//     console.log("Hello"+ "! " + friendsName[i]);
        
// }


// Assignment # 13:-

// let myVehicles: string[] = ["HONDA BIKE", "TOYOTA CAR", "BOEING AEROPLANE"];

// for (let i = 0; i < myVehicles.length; i++) {
//     console.log("I would like to own a" + " " + myVehicles[i] + ".");
    
// }


// Assignment # i4:-

// let guestList: string[] = ["Michael Jackson", "Muhammad Ali", "Allama Iqbal"];

// for (let i = 0; i < guestList.length; i++) {
//     const message : string = "Kindly attend dinner at my home by this sunday.";
//     console.log(guestList[i] + ", " + message); 
    
// }


// Assignment # 15:-

// let newGuestList: string[] = ["Fawad Khan", "Amir Liaquat", "Anwar Maqsood"];

// for (let i = 0; i < newGuestList.length; i++) {
//     const message : string = "Kindly attend dinner at my home by this sunday.";
//     console.log(newGuestList[i] + ", " + message); 
    
// }

// _________________________

// let guestList: string[] = ["Michael Jackson", "Muhammad Ali", "Allama Iqbal."];      // These guests who can't attend dinner

// let newGuestList: string[] = ["Fawad Khan", "Amir Liaquat", "Anwar Maqsood"];        // This is a new guests list who are invited now 

// for (let i = 0; i < newGuestList.length; i++) {
//     const message : string = "Kindly attend dinner at my home by this sunday.";
//     console.log(newGuestList[i] + ", " + message); 
// }

// console.log(`    *These three guest won't attend dinner:-
//     *${guestList}`);


// Assignment # 16:-

// let newGuestList: string[] = ["Fawad Khan", "Amir Liaquat", "Anwar Maqsood", "Imran Khan", "Baber Azam", "Zafar Abbas"];

// newGuestList.unshift("Imran Khan")                                            // ISSUE SOLVED. If you do it after loop it wont add in array, "after line 167"
// console.log(newGuestList);

// newGuestList.splice(4,1,"IMRAN RIAZ")
// console.log(newGuestList);


// for (let i = 0; i < newGuestList.length; i++) {
//     const message : string = "Kindly attend dinner at my home by this sunday.";
//     console.log(newGuestList[i] + ", " + message); 
// }   


// Assignment # 17:-

// let newGuestList: string[] = ["Fawad Khan", "Amir Liaquat", "Anwar Maqsood", "Imran Khan", "Baber Azam", "Zafar Abbas"];

// newGuestList.unshift("Imran Khan")                                   
// console.log(newGuestList);

// newGuestList.splice(4,1,"IMRAN RIAZ")
// console.log(newGuestList);


// for (let i = 0; i < 5; i++) {
//     const sorryMessage : string = "I am extremly sorry, I am renewing my invitation date and you will receive my new invitation soon, Right now i have space for only two persons.";
//     let popList: string [] = newGuestList.pop()
//     console.log(popList + ", " + sorryMessage);
// }   

// let invMessage: string = "You are still in the invitation list & you are cordially invited to dinner at my home by this Saturday."

// console.log(newGuestList[0] + ", " + invMessage);
// console.log(newGuestList[1] + ", " + invMessage);

// newGuestList.shift();
// newGuestList.pop();

// console.log(newGuestList);


// Assignment # 18:-


// let worldPlaces: string[] = ["Macca", "Madina", "Karbala", "Najaf", "Kazmain"];

// console.log("Original Order");
// console.log(worldPlaces);
// //
// console.log("Alphabetical order without modifying the actual list");
// console.log([...worldPlaces].sort());
// //
// console.log("Original Order");
// console.log(worldPlaces);
// //
// console.log("Reverse alphabetical order without changing the order of the original list");
// console.log([...worldPlaces].sort().reverse());
// //
// console.log("Original Order");
// console.log(worldPlaces);
// //
// console.log("Reverse the order of your list");
// console.log(worldPlaces.reverse());
// //
// console.log("Reverse list to Original Order");
// console.log(worldPlaces.reverse());
// //
// console.log("Alphabetical order with modified list");
// console.log(worldPlaces.sort());
// //
// console.log("Reverse alphabetical order with modified list");
// console.log(worldPlaces.sort().reverse());


// Assignment # 19:-

// let guestList: string[] = ["Michael Jackson", "Muhammad Ali", "Allama Iqbal"];

// for (let i = 0; i < guestList.length; i++) {
//     const message : string = "Kindly attend dinner at my home by this sunday.";         // Sorted Guest List
//     guestList.sort();
//     console.log(guestList[i] + ", " + message);
// }

// Assignment # 20:-

// let rest_parameter_example = (...restArray:string[]) => {
//     console.log(...restArray);   
// }

// rest_parameter_example("K2", "Ravi", "Pakistan", "Karachi", "Urdu");


// Assignment # 21:-

// class create_obj {
//     Mountain: string;
//     River: string;
//     Country: string;
//     City: string;
//     Language: string;

//     constructor(
//     Mountain: string,
//     River: string,
//     Country: string,
//     City: string,
//     Language: string,
//     ) {
//     this.Mountain = Mountain;
//     this.River = River;
//     this.Country = Country;
//     this.City = City;
//     this.Language = Language;
//     }
// }

// let obj = new create_obj("K2", "Ravi", "Pakistan","Karachi","Urdu",);

// console.log(obj);


// Assignment # 22:-                                                

// let creatures_array:string[] = ["K2", "Ravi", "Pakistan", "Karachi", "Urdu"];
// let index_error = creatures_array[10];
// console.log(index_error);
// console.log(`INDEX ERROR : ${index_error}`);                                           // Undex error UNDEFINED by accessing unavailable index "10" value of an array


// Assignment # 23:-

// let car = 'subaru';

// console.log("I Predict these five exercises to be TRUE!");

// console.log("Is", car == 'subaru', "?, I predict True");
// console.log("Is", car != 'ball', "?, I predict True");
// console.log("Is", car != 'fish', "?, I predict True");
// console.log("Is", car != 'suba', "?, I predict True");
// console.log("Is", car != 'bus', "?, I predict True");

// console.log("And i Predict these five exercises to be FALSE!");

// console.log("Is", car == 'suba', "?, I predict False");
// console.log("Is", car !== 'subaru', "?, I predict False");
// console.log("Is", car == 'ball', "?, I predict False");
// console.log("Is", car == 'star', "?, I predict False");
// console.log("Is", car == 'sun', "?, I predict False");


// Assignment # 24:-

// let MyName:string = "Raza";
// console.log("My name is",MyName == "Raza","I predict its True");
// console.log("My name is",MyName == "Asif","I predict its True");
// console.log("My name is",MyName != "Raza","I predict its True");

// console.log("LOWERCASE");

// console.log(MyName == MyName.toLowerCase());

// console.log("Equality & Inequality");

// console.log(5 == 5);
// console.log(5 != 5);

// console.log("Test using && and or");

// console.log(true && true, "True");
// console.log(true && false, "False");
// console.log(true || true, "True");
// console.log(true || false, "True");

// console.log('Test whether an item is not in a array');

// let abcArray: string[] = ["a", "b", "c"];         // Test whether an item is in a array?

// console.log(abcArray.includes("a"))               // True

// console.log(abcArray.includes("x"))               // False

// Assignment # 25:-

// let alienColor: string = "Green";

// if (alienColor == "Green") {
//     console.log("You just earned 5 points");
    
// }

// //______________________


// let alienColor2: string = "Red";

// if (alienColor2 == "Red") {
//     console.log("You just earned 5 points");
// }
// if (alienColor2 == "Green") {
// }



//______________________


// Assignment # 26:-

// let alienColor: string = "Green";

// if (alienColor == "Green") {
//     console.log("You just earned 5 points");
// }

// // _________________

// let alienColor2: string = "Red";

// if (alienColor2 == "Green") {
//     console.log("You just earned 5 points");
// }
// else {
//     console.log("You just earned 10 points");
// }


// Assignment # 27:-

// let alienColor: string = "Green";                          //Green 5 points

// if (alienColor == "Green") {
//     console.log("You just earned 5 points");
// }
// else if (alienColor == "Yellow") {
//     console.log("You just earned 10 points");
// } 
// else {
//     console.log("You just earned 15 points");
// }

//_______________________________


// let alienColor2: string = "Yellow";                     //Yellow 10 Points

// if (alienColor2 == "Green") {
//     console.log("You just earned 5 points");
// }
// else if (alienColor2 == "Yellow") {
//     console.log("You just earned 10 points");
// } 
// else {
//     console.log("You just earned 15 points");
// }

//________________________________


// let alienColor3: string = "Red";                    //Red 15 Points

// if (alienColor3 == "Green") {
//     console.log("You just earned 5 points");
// }
// else if (alienColor3 == "Yellow") {
//     console.log("You just earned 10 points");
// } 
// else {
//     console.log("You just earned 15 points");
// }


// Assignment # 28:-

// let age:number = 25;

// if (age < 2) {
//     console.log("the person is a baby");
// }
// else if (age >= 2 && age < 4) {
//     console.log("the person is a toddler");
// }
// else if (age >= 4 && age < 13) {
//     console.log("the person is a kid");
// }
// else if (age >= 13 && age < 20) {
//     console.log("the person is a teenager");
// }
// else if (age >= 20 && age < 65) {
//     console.log("the person is a adult");
// }
// else {
//     console.log("The person is elder");
// }


// Assignment # 29:-

// let Favourite_fruits: string[] = ["Apple", "Banana", "Orange"]                          // Finding array value via "Loop"

// for (let i = 0; i < Favourite_fruits.length; i++) {
//     let find_fruit = Favourite_fruits[i]

// if (find_fruit === "Orange"){
//     console.log(`You really like ${find_fruit}!`);
// }
// }
    

// Assignment # 30:-

// let user_name:string[] = ["Raza", "Haider", "Hassan", "Arif", "Asif", "Admin"]

// for (let i = 0; i < user_name.length; i++) {
//     let greet = `Welcome ${user_name[i]}!, Thank you for logging in`;

// if (user_name[i] === "Admin") {
//     console.log("Hello Admin, would you like to see a status report");
// }    
// else {
//     console.log(greet);    
// }    
// }   


// Assignment # 31:-

// let user_name:string[] = ["Raza", "Haider", "Hassan", "Arif", "Asif", "Admin"]

// for (let i = 0; i < user_name.length; i++) {
//     let greet = `Welcome ${user_name[i]}!, Thank you for logging in`;

// if (user_name[i] === "Admin") {
//     console.log("Hello Admin, would you like to see a status report");
// }    
// else {
//     console.log(greet);    
// }    
// }


//

// console.log("\tEmpty user list:-");

// let empty_user_name:string[] = [];

// for (let i = 0; i < 1; i++) {
//     if (empty_user_name.length == 0) {
//         console.log("We need to find some users!");
//     }    
// }


// Assignment # 32:-

// let current_user:string [] = ["RAZA", "Haider", "Hassan", "Arif", "Asif"]
// let new_user:string [] = ["Raza", "Zulfi", "HASSAN", "Qasim", "Nomi"]

// for (let i = 0; i < 5; i++) {
//     let chk_curren_user = current_user[i];
//     let chk_new_user = new_user[i];
  
// if (chk_curren_user.toLocaleLowerCase() === chk_new_user.toLowerCase()) {
//     console.log(chk_curren_user.toLowerCase() +"!, " + "You need to enter a new username");   
// }
// else {
//     console.log(chk_curren_user.toLowerCase() +"!, " + "This username is available");
    
// }
// }


// Assignment # 33:-

// let ordinal_numbers: number[] = [1,2,3,4,5,6,7,8,9]
// let ordinal_strings: string[] = ["st","nd","rd","th","th","th","th","th","th"]

// for (let i = 0; i < ordinal_numbers.length; i++) {
//     console.log(ordinal_numbers[i] + ordinal_strings[i]);   
// }

// Assignment # 34:-

// let Favourite_pizza: string[] = ["Peri Pizza", "Italian Pizza", "Afghani Pizza"];

// for (let i = 0; i < Favourite_pizza.length; i++) {
//     console.log(`I like to have ${Favourite_pizza[i]} at any day!`);        
// }

// console.log(`I really love pizza!
// Each flavour has it's own delight!
// It makes my day!
// `);


// Assignment # 35:-                                             

// let animal:string [] = ["Dog","Cat","Horse"]

// for (let i = 0; i < animal.length; i++) {
//     console.log(`A ${animal[i]} would make a great pet.`);
// }

// console.log(`All these animals are most common pets of humen
// Any of these animals would make a great pet!
// `);


// Assignment # 36:-

// let make_shirt = (size,text)=> {
//     console.log(`Size:  ${size}`);
//     console.log(`Message:  ${text}`);
// }

// make_shirt("Medium","Today is a great day!")


// Assignment # 37:-

// let make_new_shirt = (size = "Large",message = "I Love TypeScript")=> {                     

//     console.log(`Size:  ${size},    Message:   ${message}`);

//     }

// make_new_shirt();
// make_new_shirt("Medium");
// make_new_shirt("Small","Today is a great day!");


// Assignment # 38:-

// let describe_city = (city:string,country:string = "Pakistan") => {
//     console.log(`${city} is in ${country}`);

// }

// describe_city("Karachi");
// describe_city("Lahore");
// describe_city("Paris", "France");


// Assignment # 39:-

// let city_country = (city:string,country:string) => {
//     return (`${city}, ${country}`)
// }

// let res = city_country("Lahore","Pakistan");
// console.log(res);

// let res2 = city_country("Karachi","Pakistan");
// console.log(res2);

// let res3 = city_country("Sydney","Australia");
// console.log(res3);


// Assignment # 40:-

// class album {
//     artist_name: string;
//     album_title: string;
//     album_tracks?: number | string;

//     constructor(
//         artist_name: string,
//         album_title: string,
//     ) {
//         this.artist_name = artist_name;
//         this.album_title = album_title;
//     }      
// }

// class album1 {
//     artist_name: string;
//     album_title: string;
//     album_tracks?: number | string;

//     constructor(
//         artist_name: string,
//         album_title: string,
//         album_tracks?: number | string,
//     ) {
//         this.artist_name = artist_name;
//         this.album_title = album_title;
//         this.album_tracks = album_tracks;
//     }      
// }

// let make_album = new album ("Charles Dickens", "A Tale of Two Cities");
// console.log(make_album);

// let make_album2 = new album ("James Rutherfold", "Punk Powerhouse");
// console.log(make_album2);

// let make_album3 = new album1 ("Edward", "The Sound of Tears", 8 + " " + "Tracks");
// console.log(make_album3);

// Assignment # 41:-

// let magicians_name: string [] = ["Ralph","Alex","Carl"];

// let show_magicians = (magicians: string []) => {
//    for (const magician of magicians) {
//         console.log(magician);
        
//    }
// }

// show_magicians(magicians_name);


// Assignment # 42:-


// let magicians_name: string [] = ["Ralph","Alex","Carl"];

// let show_magicians = (magicians: string []) => {
//    for (const magician of magicians) {
//         console.log(magician);
        
//    }
// }


// let make_great = (magicians: string []): string [] => {
//     let the_great_magicians: string [] = magicians.map(magician => `The Great | ${magician}`);        // magicians.map(Taking elements from the current array assigned in the function's parameter/magicians: string [] and producing a new array with these elements of an array. 
//     return the_great_magicians;                                                                       // .map() requires callbackfunction in parameter => and then the logic you apply to produce in new array

// }

// let modified_great_magicians_name: string [] = make_great(magicians_name);

// console.log("Modified List:-");
// show_magicians(modified_great_magicians_name);



// Assignment # 43:-

// let magicians_name: string [] = ["Ralph","Alex","Carl"];

// let show_magicians = (magicians: string []) => {
//    for (const magician of magicians) {
//         console.log(magician);
        
//    }
// }


// let make_great = (magicians: string []): string [] => {
//     let the_great_magicians: string [] = magicians.map(magician => `The Great | ${magician}`);        // magicians.map(Taking elements from the current array assigned in the function's parameter/magicians: string [] and producing a new array with these elements of an array. 
//     return the_great_magicians;                                                                       // .map() requires callbackfunction in parameter => and then the logic you apply to produce in new array

// }

// let modified_great_magicians_name: string [] = make_great(magicians_name);

// console.log("Original List:-");
// show_magicians(magicians_name);

// console.log("\nModified List:-");
// show_magicians(modified_great_magicians_name);


// Assignment # 44:-

// let sandwiches = (...items: string []) => {
//     console.log(...items);  
// }

// sandwiches("Cucumber", "Onion", "Sauce")
// sandwiches("Ketchup", "Mayonnaise")
// sandwiches("Chicken", "Vegetable")

// Assignment # 45:-

// class car1 {
//     manufacturer:string;
//     model:string;
//     registration_number:number;
//     color:string;
//     sunroof?:boolean;
//     constructor(
//         manufacturer:string,
//         model:string,
//         registration_number:number,
//         color:string,
//     ) {
//         this.manufacturer = manufacturer;
//         this.model = model;
//         this.registration_number = registration_number;
//         this.color = color;
//     }
// }

// class car2 {
//     manufacturer:string;
//     model:string;
//     registration_number:number;
//     color:string;
//     sunroof?:boolean;
//     constructor(
//         manufacturer:string,
//         model:string,
//         registration_number:number,
//         color:string,
//         sunroof?:true,
//     ) {
//         this.manufacturer = manufacturer;
//         this.model = model;
//         this.registration_number = registration_number;
//         this.color = color;
//         this.sunroof = sunroof;
//     }
// }

// let my_car_1 = new car1("Toyota", "Vitz", 5043, "White");
// let my_car_2 = new car2("Toyota", "Aqua", 5550, "Grey", true); 

// console.log(my_car_1);
// console.log(my_car_2);


