const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();

const dbFilePath = './mydatabase.db';  // Replace with your desired file path

// Check if the database file exists
const isDbFileExists = fs.existsSync(dbFilePath);

// If the file doesn't exist, create it and initialize the database
if (!isDbFileExists) {
    fs.writeFileSync(dbFilePath, '');  // Create an empty file
}

const db = new sqlite3.Database(dbFilePath);

db.serialize(function() {
    db.run(`
        CREATE TABLE IF NOT EXISTS products
        (
            itemId INTEGER PRIMARY KEY AUTOINCREMENT,
            itemName TEXT NOT NULL,
            itemDescription TEXT NULL,
            itemPrice REAL NOT NULL,
            itemQuantity INTEGER NOT NULL,
            selectedUnit TEXT NOT NULL,
            binaryImage BLOB NOT NULL
        )`);

}
);

module.exports = db;
