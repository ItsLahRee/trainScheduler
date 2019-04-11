// Initialize Firebase
var config = {
  apiKey: "AIzaSyC5ieIalTdQcj2oIWg6gqTosEhjQGMzY3A",
  authDomain: "trianscheduler.firebaseapp.com",
  databaseURL: "https://trianscheduler.firebaseio.com",
  projectId: "trianscheduler",
  storageBucket: "trianscheduler.appspot.com",
  messagingSenderId: "451911483093"
};
firebase.initializeApp(config);
// Variable to reference database
var database = firebase.database();
// Define Variables
var trainName = "";
var destination = "";
var startTime = "";
var frequency = 0;
//Initial values


