// Get the canvas element and its context
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Define the vertices of the triangle
const p1 = { x: canvas.width / 2, y: 10 };
const p2 = { x: 10, y: canvas.height - 10 };
const p3 = { x: canvas.width - 10, y: canvas.height - 10 };

// Function to draw a point
function drawPoint(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 1, 0, Math.PI * 2);
    ctx.fill();
}

// Function to generate the Sierpinski Gasket
function generateSierpinski(p1, p2, p3, depth) {
    if (depth === 0) {
        drawPoint(p1.x, p1.y);
        drawPoint(p2.x, p2.y);
        drawPoint(p3.x, p3.y);
    } else {
        // Calculate midpoints of the edges
        const mid1 = {
            x: (p1.x + p2.x) / 2,
            y: (p1.y + p2.y) / 2
        };
        const mid2 = {
            x: (p2.x + p3.x) / 2,
            y: (p2.y + p3.y) / 2
        };
        const mid3 = {
            x: (p1.x + p3.x) / 2,
            y: (p1.y + p3.y) / 2
        };

        // Recursive calls for sub-triangles
        generateSierpinski(p1, mid1, mid3, depth - 1);
        generateSierpinski(mid1, p2, mid2, depth - 1);
        generateSierpinski(mid3, mid2, p3, depth - 1);
    }
}

// Set the initial depth and generate the Sierpinski Gasket
const initialDepth = 5;
generateSierpinski(p1, p2, p3, initialDepth);
