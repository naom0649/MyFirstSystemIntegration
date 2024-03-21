const csv = require('csv-parser');
const fs = require('fs');
const xml2js = require('xml2js');

function readCSV(filePath, callback) {
  const csvData = [];
  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', row => {
      csvData.push(row);
    })
    .on('end', () => {
      callback(null, csvData);
    })
    .on('error', err => {
      callback(err, null);
    });
}

function readJSON(filePath, callback) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      callback(err, null);
      return;
    }
    try {
      const jsonData = JSON.parse(data);
      callback(null, jsonData);
    } catch (parseError) {
      callback(parseError, null);
    }
  });
}

function readXML(filePath, callback) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      callback(err, null);
      return;
    }

    const parser = new xml2js.Parser({ explicitArray: false });

    parser.parseString(data, (parseError, result) => {
      //console.log(result)
      if (parseError) {
        callback(parseError, null);
        return;
      }
      callback(null, result);
    });
  });
}


 
// const csvFilePath = '01a._ File_formats_bonanza/me.csv';
// const jsonFilePath = '01a._ File_formats_bonanza/me.json';
// const xmlFilePath = '01a._ File_formats_bonanza/me.xml';




// readCSV(csvFilePath, (err, csvData) => {
//   if (err) {
//     console.error('Error reading CSV file:', err);
//   } else {
//     console.log('Data from me.csv:');
//     console.log(csvData);
//   }
// });

// readJSON(jsonFilePath, (err, jsonData) => {
//   if (err) {
//     console.error('Error reading JSON file:', err);
//   } else {
//     console.log('Data from me.json:');
//     console.log(jsonData);
//   }
// });

// readXML(xmlFilePath, (err, xmlData) => {
//   if (err) {
//     console.error('Error reading XML file:', err);
//   } else {
//     console.log('Data from me.xml:');
//     console.log(xmlData.me);
//   }
// });



module.exports = {
    readCSV,
    readJSON,
    readXML
  };