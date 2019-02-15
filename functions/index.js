// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require("firebase-functions");

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require("firebase-admin");
admin.initializeApp();

exports.dataOverTime = functions.database.ref("arduinoData").onWrite(change => {
  // Grab the previous value that was in Database.
  const lastData = change.before.val();
  const lastTime = lastData.TimeStamp;
  // Grab the current value of what was written to the Realtime Database.
  const newData = change.after.val();
  const newTime = newData.TimeStamp;
  const newTemp = newData.actualTemp;
  const newHumid = newData.actualHumidity;
  //Compare if timestamp changed - then push values to array of object - else return
  if (lastTime !== newTime) {
    // Return a Promise when performing asynchronous tasks inside a Functions such as
    // writing to the Firebase Realtime Database.
    return change.after.ref.parent.child("dataOverTime").push({
      Humidity: newHumid,
      Temp: newTemp,
      timestamp: admin.database.ServerValue.TIMESTAMP
    });
  } else {
    return null;
  }
});
