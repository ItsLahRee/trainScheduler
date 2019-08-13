const firebaseConfig = {
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
  
  // Button for adding trains
  $("#addTrainBtn").on("click", function(){
   
    // Grabs user input
    var trainName = $("#trainNameInput").val().trim();
    var trainDestination = $("#destinationInput").val().trim();
    var firstTrain = moment($("#firstTrainInput").val().trim(), "HH:mm").subtract(10, "years").format("X"); 
    var frequency = $("#frequencyInput").val().trim();
    
    var newTrain = {
      name: trainName,
      destination: trainDestination,
      firstTrain: firstTrain,
      frequency: frequency
    }

    trainData.ref().push(newTrain);

    alert("Train Added!");

    $("trainNameInput").val("");
    $("trainDestination").val("");
    $("firstTrain").val("");
    $("frequency").val("");
    
    return false;
    
  });
  
  //update schedule when train is added
database.ref().on("child_added", function (childSnapshot) {

  var row = new $('<tr>');

  // get frequency from new train
  var frequency = childSnapshot.val().freq;

  // get first train time
  var first = childSnapshot.val().firstTime;

  // set first time adjusted
  var firstTime = moment(first, "HH:mm").subtract(1, "years");

  // Difference
  var difference = moment().diff(moment(firstTime), "minutes") % frequency;

  // Minutes left till arrival
  var minutes = frequency - difference;

  // Next train arrival 
  var nextTrain = moment().add(minutes, "minutes").format("hh:mm a");

  // Add data to the new row
  row.append($('<td>').text(childSnapshot.val().trainName));
  row.append($('<td>').text(childSnapshot.val().destination));
  row.append($('<td>').text(childSnapshot.val().freq));
  row.append($('<td>').text(nextTrain));
  row.append($('<td>').text(minutes));

  // Add row to train table
  $('#trainList').append(row);
});

  