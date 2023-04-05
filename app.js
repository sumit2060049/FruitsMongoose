// Install mongoose
const mongoose = require("mongoose");

mongoose.set('strictQuery', true);
 
// Run main function and catch error
main().catch((err) => console.log(err));
 
// async function
async function main() {
  //localhost ain't working because in config it's binding to 127.0.0.1 
  const url = "mongodb://127.0.0.1:27017/mongosh?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.7.1"; 
  const dbPath = "//fruitsDB";
  await mongoose.connect(url + dbPath, {
    useNewUrlParser: true,
  });
 
  // The fruit schema
  const fruitSchema = new mongoose.Schema({
    //name: String,
     name:{
         type:String,
         required:[true,"please check data entry"]
     },
    rating :{
        type:Number,
        min:1,
        max:10
    },
    //rating: Number,
    review: String,
  });
 
  const Fruit = new mongoose.model("Fruit", fruitSchema);
 
  const fruit = new Fruit({
   // name: "Apple",
    rating: 7.0,
    //rating:34,
 
    review: "pretty solid as a fruit",
  });
 
//      await fruit.save(); // insert one item into the collection
 
  const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit:fruitSchema
  });
 
  const Person = new mongoose.model("Person", personSchema);
 
//   const pineapple = new Fruit({
//     name: "Pineapple",
//     rating:9,
//     review:"Great fruit."
//   })
const mango = new Fruit({
        name: "mango",
        rating:10,
        review:"Preety decent."
    })
   //pineapple.save();
    mango.save();

  const person = new Person({
    name: "john",
    age: 37,

  });
//   person.save();
person.updateOne({name:"john"},{favouriteFruit : mango},function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("succesfully updated the document");
    }
});
// const amy = new Person({
//     name: "Amy",
//     age: 12,
//     favouriteFruit:pineapple

//   });
 
//     await amy.save();
 
//   const kiwi = new Fruit({
//     name: "kiwi",
//     rating: 10,
//     review: "Best fruit in the world",
//   });
 
//   const orange = new Fruit({
//     name: "Orange",
//     rating: 5,
//     review: "Too sour for me",
//   });
 
//   const banana = new Fruit({
//     name: "Banana",
//     rating: 8,
//     review: "Weird Texture",
//   });

//   Fruit.find(function(err,fruits){
//     if(err){
//         console.log(err);
//     } else{
//         console.log(fruits)
//     }
//   });


//challenge

// Fruit.find(function(err, fruits){
//     if (err) {
//       console.log(err);
//     } else {
   
//       mongoose.connection.close(function () {
//          process.exit(0);
//       });
   
//       fruits.forEach(function(fruit){
//         //console.log(fruit);
//         console.log(fruit.name);
//       });
//     }
//   });
  Person.find(function(err, people){
    if (err) {
      console.log(err);
    } else {
   
      mongoose.connection.close(function () {
         process.exit(0);
      });
   
      people.forEach(function(fruit){
        //console.log(fruit);
        console.log(person);
      });
    }
  });
 
//   Fruit.insertMany([kiwi, orange, banana], (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Successfully added to the database");
//     }
//   });
  
 
  //   mongoose.connection.close(); // close the mongoose connection
//   Fruit.updateOne({_id:"63f8fd2bd64bf0e3c6ef3a47"},
//   {name:"peach"},function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("succesfully update");
//     }
//   })
//   Fruit.deleteOne({name:"peach"},function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("succesfull");
//     }
//   });
//   Fruit.deleteMany({name:"Apple"},function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("succesfull");
//     }
//   });

}



