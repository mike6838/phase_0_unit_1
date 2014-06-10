// I worked on this challenge [by myself]
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
// Mission 1 - Rescue Mission
// down, down,
// right,
// up, up,
// right, right,
// down, down,
// attack

this.moveDown();
this.moveDown();
this.moveRight();
 
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.moveDown();
this.attackNearbyEnemy();
 
// Mission 2 - Grab the Mushroom
// up,
// right,
// left,
// up,
// attack

this.moveUp();
this.moveRight(); 
this.moveLeft();
this.moveUp();

this.attackNearbyEnemy();

// Mission 3 - Drink Me
// right,
// attack,
// right,
// down,
// up,
// right,
// attack

this.moveRight();
this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();

// Mission 4 - Taunt the Guards
// right, door,
// right,
// say,
// left, left
// say attack,

// right, say follow Me
// right, right
// up,
// right,
// say hey there
// say attack
// attack, attack
// say follow
// right, right, right


this.moveRight();
this.bustDownDoor();

// Delete the "//" in front of each line below.
this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");

// Now get Phoebe to follow through the dungeon.
this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("Hey there!");
this.say("Attack!");
this.attackNearbyEnemy();
this.attackNearbyEnemy();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveRight();
 
 // Mission 5 - It's a Trap
// down, down,
// say hey,
// up
// say attack,
// up

 // Taunt the Ogre and run for cover!
this.moveDown();
this.moveDown();

this.say("Hey there!");
this.moveUp();
this.say("Attack!");
this.moveUp();

 // Mission 6 - Break the Prison
// This level was not working/loading for me.

 // Mission 7 - Taunt
// say hey,
// say hey,
// say you,
// say come,
// say now

 this.say("Hey!");

// Lure the ogre right into your arrow trap
// by saying a few more things at him.
// Anything works!
this.say("Hey!");
this.say("You!");
this.say("Come here!");
this.say("Now!");


 // Mission 8 - Cowardly Taunt
 // move, move, move,
 // say
 // move, move, move, 
 // say hey,
 // move

 this.moveXY(50, 16);
this.moveXY(63, 20);
this.moveXY(70, 10);  // This is a safe spot.

this.say("I can lure them in here.");

// Run your soldier out where the ogres can hear you.

// Say something!

// Then run back behind the arrow towers for safety.

// You can shift+click on the map to insert coordinates.

this.moveXY(59, 25);
this.moveXY(54, 27);
this.moveXY(59, 25);
this.say("Hey!");
this.moveXY(63, 20);
 // Mission 9 - Comanding Followers
// move, move, move, 
// say Hail
// say follow
// move,
// say attack

 this.moveXY(49, 66);
this.moveXY(60, 63);
this.moveXY(75, 63);
this.say("Hail, friends!");

// Saying anything with "follow" in it will get nearby soldiers
// to follow you

// Saying anything with "attack" will send nearby troops into
// a battle mode.

// Make sure Tharin is safe!

this.say("Follow!");
this.moveXY(63, 42);
this.say("Attack!");

 // Mission 10 - Mobile Artillery
 // move,
 // attack, 
 // move, 
 // attack, attack, attack, attack

 this.moveXY(30, 26);  // Move into range
this.attackXY(46, 5);  // Shoot once in the middle of the ogres

// If they survive a hit, ogres retaliate!
// Larger ogres take more than one hit...
// So, position and aim carefully.
this.moveXY(43, 37);
this.attackXY(66, 53);
this.attackXY(55, 45);
this.attackXY(49, 65);
this.attackXY(45, 50);
 
 
// Reflection:
// Write your reflection here.


 // What is this referring to? Think programming-wise rather than in the terms of the game.
 // 'this' refers the function taking place at that exact moment.

 // What does the () do in JavaScript?
 // Parantheses in JavaScript are used to define an object.

 // What is the point of the semicolons?
 // Semicolons in JavaScript are used to communicate the end of a statement/line.
