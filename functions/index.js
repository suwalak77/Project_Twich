const functions = require("firebase-functions");
const logger = require("firebase-functions/logger");

// ตัวอย่างฟังก์ชัน
exports.helloWorld = functions.https.onRequest((request, response) => {
  logger.log("Hello, World!");
  response.json({message: "Hello from Firebase!"});
});
