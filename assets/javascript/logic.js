var firebaseConfig = {
  apiKey: "AIzaSyC5ieIalTdQcj2oIWg6gqTosEhjQGMzY3A",
  authDomain: "trianscheduler.firebaseapp.com",
  databaseURL: "https://trianscheduler.firebaseio.com",
  projectId: "trianscheduler",
  storageBucket: "trianscheduler.appspot.com",
  messagingSenderId: "451911483093",
  appId: "1:451911483093:web:aa9d6875300e3d28"
};
 
  firebase.initializeApp(config);
  
  var trainData = firebase.database();
  
  // 2. Button for adding trains
  $("#addTrainBtn").on("click", function(){
   
    // Grabs user input
    var trainName = $("#trainNameInput").val().trim();
    var trainDestination = $("#destinationInput").val().trim();
    var firstTrain = moment($("#firstTrainInput").val().trim(), "HH:mm").subtract(10, "years").format("X"); 
    var frequency = $("#frequencyInput").val().trim();
    
    console.log(firstTrain);
    return false;
    
  });