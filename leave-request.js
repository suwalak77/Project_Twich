// Initialize Firebase (Replace with your Firebase project configuration)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const db = firebase.firestore();
  
  document.getElementById('leaveForm').addEventListener('submit', (e) => {
      e.preventDefault();
  
      const leaveType = document.getElementById('leaveType').value;
      const startDate = document.getElementById('startDate').value;
      const endDate = document.getElementById('endDate').value;
  
      // Save leave request to Firestore
      db.collection("leaveRequests").add({
          leaveType: leaveType,
          startDate: startDate,
          endDate: endDate,
          status: "pending"
      })
      .then(() => {
          alert("Leave request submitted successfully!");
      })
      .catch((error) => {
          console.error("Error submitting leave request: ", error);
      });
  });
  