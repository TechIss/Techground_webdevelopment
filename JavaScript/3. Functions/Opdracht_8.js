// NAMING FUNCTIONS
// let nameWiskunde = document.getElementById("namePerson");

function namePerson() {
    if (namePerson != null) {
       let doc = prompt("Please enter name of student", 
                "name"); 
        // let name = namePerson[1];
        document.getElementById("namePerson[1]").innerHTML = doc;
        } 
    } 


//GRADING FUNCTIONS

let gradeWiskunde = document.getElementById("gradePerson");

    function gradePerson() {
        grade = gradePerson;
        if (gradePerson != null) {
        const doc1 = prompt("Please enter grade of student", 
            "grade"); 

            document.getElementById("gradeWiskunde[1]").innerHTML = doc1;
        if (gradeWiskunde >= 6){
            document.getElementById("gradeWiskunde1").style.backgroundColor = "green";
            } else if (gradeWiskunde <= 6) {
                document.getElementById("gradeWiskunde[1]").style.backgroundColor = "red";
            }
        }
    } 
