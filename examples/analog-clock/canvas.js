/*
    Developed for Zense Hackathon
    Author - Satvik Ramaprasad

    Note - DO NOT CHANGE CONTENTS OF THIS FILE

    Instructions for users
    1) You need not understand the code here to be able to use it. 
    2) Understanding the API below should be enough
    3) See examples to get started

    API Documentation

    Helpful Canvas Variables
        canvas.height // Height
        canvas.width // Width
        canvas.mouseX // Current Position of mouse x coordinate
        canvas.mouseY // Current Position of mouse y coordinate
        canvas.mouseDown // Boolean to check if mouse is pressed down
        canvas.mouseDownX // Last Position of mouse press x coordinate
        canvas.mouseDownY // Last Position of mouse press y coordinate

    Helpful Canvas Functions
        canvas.drawLine(x1, y1, x2, y2) // Draws line from (x1, y1) to (x2, y2)
        canvas.drawCircle(x, y, r) // Draws circle with center (x, y) and radius r
        canvas.drawRectangle(x, y, width, height) // Draws rectangle with top left corner as (x, y) and of dimensions width * height
        canvas.clear() // Clears the canvas
        canvas.isKeyDown(key) // Checks if keyboard key is pressed. Example KeyA for A. 


    Optionally Override the following functions
        canvas.mouseDownCallback() // Called when mouse is pressed
        canvas.mouseUpCallback() // Called when mouse is released
        canvas.mouseMoveCallback() // Called when mouse is moved
        canvas.keyDownCallback() // Called when key is pressed
        canvas.keyUpCallback() // Called when mouse is released
        canvas.keyUpCallback() // Called when mouse is released
        canvas.mainFunctin() // Called when mouse is released

*/

// Canvas State Variables
canvas = {
    ctx: undefined,
    height: undefined,
    width: undefined,
    mouseX: 0,
    mouseY: 0,
    mouseDown: false,
    mouseDownX: 0,
    mouseDownY: 0,
    keysDown: {},
}

// Canvas Setup function
canvas.setup = function () {
    // extract canvas object and set attributes correctly
    this.ctx = document.getElementById("canvasArea").getContext("2d");
    this.height = window.innerHeight;
    this.width = window.innerWidth;

    document.getElementById("canvasArea").width = this.width;
    document.getElementById("canvasArea").height = this.height;

    // Start listeners
    this.startListeners();

    // Complete custom setup
    this.setupFunction();
}

// Draws line from (x1, y1) to (x2, y2)
canvas.drawLine = function(x1, y1, x2, y2) {
    this.ctx.beginPath();
    this.ctx.moveTo(x1, y1);
    this.ctx.lineTo(x2, y2);
    this.ctx.stroke();
}

// Draws circle with center (x, y) and radius r
canvas.drawCircle = function(x1, y1, r) {
    this.ctx.beginPath();
    this.ctx.arc(x1, y1, r, 0, 2 * Math.PI);
    this.ctx.stroke();
}

// Draws rectangle with top left corner as (x, y) and of dimensions width * height
canvas.drawRectangle = function(x, y, width, height) {
    this.ctx.beginPath();
    this.ctx.rect(x, y, width, height);
    this.ctx.stroke();
}

// Clear canvase
canvas.clear = function() {
    this.ctx.clearRect(0, 0, this.width, this.height);
}

// Function which will setup calling of canvas.mainFunction every <timeStep> milliseconds
canvas.startMain =  function(timeStep = 50) {
    setInterval(this.mainFunction, timeStep);
}

// Will start event listeners
// An event listener is a procedure or function in a computer program that waits for an event to occur. 
// Examples of an event are the user clicking or moving the mouse, pressing a key on the keyboard
canvas.startListeners = function () {

    window.addEventListener('mousemove', (e) => {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
        this.mouseMoveCallback(e);
    });

    window.addEventListener("mousedown", () => {
        this.mouseDownX = this.mouseX; 
        this.mouseDownY = this.mouseY; 
        this.mouseDown = true;
        this.mouseDownCallback();
    });

    window.addEventListener("mouseup", () => { 
        this.mouseDown = false;
        this.mouseUpCallback();
    });

    window.addEventListener('keyup', (e) => {
        console.log(e.code + " was released" );
        this.keysDown[e.code] = false;
        this.keyUpCallback(e);
    });

    window.addEventListener('keydown', (e) => {
        console.log(e.code + " was pressed" );
        this.keysDown[e.code] = true;
        this.keyDownCallback(e);
    });
}

// Checks if keyboard key is pressed. Example KeyA for A. 
canvas.isKeyDown = function(key) {
    return keysDown[key] == true;
}


// Functions Users Can Override in index.html

// Main function which is called every <timeStep> milliseconds when canvas.startMain() is called
canvas.mainFunction = function () {
    console.log("Dummy Main Function - Override canvas.mainFunction");
}

// Custom Setup function for setting up global variables
canvas.setupFunction = function() {
    console.log("Dummy Setup Function - Override canvas.setupFunction");
}

// Called when key is pressed
canvas.keyDownCallback = function (e) {
    console.log("Dummy KeyDownCallback - Override canvas.KeyDownCallback");
}

// Called when key is released
canvas.keyUpCallback = function (e) {
    console.log("Dummy keyUpCallback - Override canvas.keyUpCallback");
}

// Called when mouse is pressed
canvas.mouseDownCallback = function () {
    console.log("Dummy mouseDownCallback - Override canvas.mouseDownCallback");
}

// Called when mouse is released
canvas.mouseUpCallback = function () {
    console.log("Dummy mouseUpCallback - Override canvas.mouseUpCallback");
}

// Called when mouse is moved
canvas.mouseMoveCallback = function (e) {
    // console.log("Dummy mouseMoveCallback - Override canvas.mouseMoveCallback");
}

