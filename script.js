// Initialize colors
// Text color defined using P3 syntax
let text = new Color("p3", [0.9, 0.8, 0.1]);

// Background color defined using named colors
let background = new Color("slategrey");

// WCAG 2.1 contrast
const contrast1 = text.contrast(background, "WCAG21");
const contrast2 = background.contrast(text, "WCAG21");

// APCA contrast
const contrast3 = background.contrast(text, "APCA");
const contrast4 = text.contrast(background, "APCA");

const box1 = document.getElementById("example1-text");
box1.innerHTML = contrast1;

const box2 = document.getElementById("example2-text");
box2.innerHTML = contrast2;

const box3 = document.getElementById("example3-text");
box3.innerHTML = contrast3;

const box4 = document.getElementById("example4-text");
box4.innerHTML = contrast4;