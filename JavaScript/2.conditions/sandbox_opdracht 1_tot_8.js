    // hier kun je coderen

    function checkNumber() {
        const number = document.getElementById("number");
        const label = document.getElementById("label");

        if (number.value == 3) {
            text = "Het ingevoerde getal is gelijk aan 3";
            label.innerHTML = text;
        } 

        else if (number >= 11) {
            text = "Het ingevoerde getal is gelijk aan 11 of groter dan 11";
            label.innerHTML = text;
        } 

        else if (number > 4) {
            text = "Het ingevoerde getal is groter dan 4";
            label.innerHTML = text;
        } 

        else if (number == 4) {
            text = " ";
            label.innerHTML = text;
        }

        else if (number <3) {
          text = "Het ingevoerde getal is kleiner dan 3";
            label.innerHTML = text;
        }

    }