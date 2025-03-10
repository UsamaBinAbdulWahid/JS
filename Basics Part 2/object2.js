const newUser = {} //Non Singleton Object
console.log(newUser);
const newChar = new Object(); //Singleton Object
console.log(newChar);  
//We will get same empty object from both methods

//Now we are going to give some values to the object newUser
newUser.id = "123"
newUser.name = "Usama"
newUser.isLoggedIn = true
console.log(newUser) //As we can see, new user has all the values that we defined early

const regularUser = {
	email: "usamaabdulwahid14@gmail.com",
	name: {
		userFullName: {
			firstName: "Usama",
			lastName: "Wahid",
		},
		userNickName: "Sami",
		
	}
}
// console.log(regularUser.name?.userFullName.firstName); //we put question mark at so that it dont throw an error, it acts just like if else 

//Now we going to know to merge two or more objects into a single one
const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}
const obj3 = Object.assign({}, obj1, obj2) //we use assign method in which we merge two objects into new one
console.log(obj3)
const obj4 = {...obj1, ...obj2} //we use the spread method just like we did in arrays, we are going to use it 90% of the time
console.log(obj4)



//A very basic implementation of objects in projects is when the data come from backend in form of arrays with object type data
const userData = [
	{
		user: "Sami"
	},
	{},
	{},
]
console.log(userData[0].user)

//Some other methods for objects are as follows
console.log(Object.keys(regularUser)) //to get keys of the object, returns an array
console.log(Object.values(regularUser)) //to get values of the object, returns an array 
console.log(Object.entries(regularUser)) //to get the object into an array

console.log(regularUser.hasOwnProperty("isLoggedIn"))