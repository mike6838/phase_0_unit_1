// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Michael Teevan
//  2. John Lin


// 0. "YOU SIGNED... WHO?!"

var tomCruise = {
    name: "Tom Cruise",
    age: 52,
    quote: "Top Gun"
};

var ryanGosling = {
    name: "Ryan Gosling",
    age: 33,
    quote: "Hey kid wanna a toothpick?"  
};


// 1. "Here they Come!"

var adamSandler = {
    name: "Adam Sandler",
    age: 47,
    quote: "That's your home! Are you too good for your home?!"
};

var kristenBell = {
    name: "Kristen Bell",
    age: 33,
    quote: "Do you wanna build a snowman?"
};

var jimCarrey = {
    name:  "Jim Carrey",
    age:  52,
    quote:  "...So you're telling me there's a chance? YEAH!"     
};
 
// 2. "TIME IS MONEY!"

var Client = function(name,age,quote) {
  this.name = name;
  this.age = age;
  this.quote = quote; 
}

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";





// 3. "SHOW 'EM OFF!"

var Client = function(name,age,quote) {
  this.name = name;
  this.age = age;
  this.quote = quote; 
  this.display = function(){
    alert("Hi, my name is " + this.name + "and my age is " + this.age + '...' + this.quote);
  }
}



// 4. "But wait, there's more!"



// 5.  ** BONUS **


//  6.  Your Reflection:

// The strategies that worked during my GPS session with John Lin as my partner was to read out 
// loud each release. This ensured that we were on the same page as one another with respect to 
// what exactly we were supposed to be working on. While we were on Release 1, I had only read up 
// to the point of Release 1 and I think John might have read Release 2 on accident, along with 
// Release 1. So while I was creating object literals for each actor, John was wondering why I 
// wouldn’t just create a function to so that we could just input the data. This is a fair question 
// because this is exactly what Release 2 asks of us. Consequently, I was a bit confused, but we 
// cleared it up pretty quickly. Moreover, having one person read out loud really benefitted the 
// pair because it ensured we were both on the same page. 

// Some problems we had were related to syntax, which isn’t much of a problem at all. We were able 
// to look it up on the JS introduction on Socrates. Mo gave us some great pointers and recommendations 
// to assist our learning in object-oriented languages, which I greatly appreciate. I’m fairly confident 
// with the learning competencies.  Overall, I enjoyed my GPS 1.2 session and I don’t think I found anything 
// tedious about it. Problems and miscommunication is inevitable and I don’t feel it would be fair to classify 
// these realities as tedious. 

