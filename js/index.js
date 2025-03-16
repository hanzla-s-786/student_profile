// JavaScript function for searching the challan
      function searchChallan() {
        const challanNumber = document.getElementById("challanSearch").value;
        if (challanNumber) {
          alert("Searching for Challan: " + challanNumber);
        } else {
          alert("Please enter a Challan number.");
        }
      }