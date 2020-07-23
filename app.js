function power() {
    var a = document.getElementById("txt1").value;
    var b = document.getElementById("txt2").value;
    var ttl = Math.pow(a, b);
    alert(ttl);
}

function leapYear(year) {
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
//alert(leapYear(2016));

function s(a, b, c) {
    return ((a + b + c) / 2);
}
function area(a, b, c) {
    var temp1 = s(a, b, c)
    var temp2 = (s(a, b, c) - a)
    var temp3 = (s(a, b, c) - b)
    var temp4 = (s(a, b, c) - c);
    var total = temp1 * temp2 * temp3 * temp4;
    alert("area of triangle is: " + total);
}
//area(10,2,9)
function percentage(marks) {
    var total = (marks / 300) * 100;
    return total;
}
function average(marks) {
    return (marks / 3);
}
function mainFunction() {
    var subj = parseInt(prompt("Enter 1st subject number "));
    var subj2 = parseInt(prompt("Enter 2nd subject number "));
    var subj3 = parseInt(prompt("Enter 3rd subject number "));
    var total = subj + subj2 + subj3;
    var percntg = percentage(total);
    var avg = average(total);
    document.write("<br> total Marks: " + total);
    document.write("<br> Percentage: " + percntg);
    document.write("<br> Average: " + avg);

}
//mainFunction();

function indexOf() {
    var temp = prompt("Enter a Text");
    var temp2 = prompt("Enter a character");
    for (var i = 0; i < temp.length; i++) {
        if (temp2 === temp[i]) {
            document.write("<br>index of " + temp2 + " is: " + i);
            break;
        }
    }
}
//indexOf()
function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substr(0, index) + chr + str.substr(index + 1);
}
function removeVowels() {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var temp = prompt("Enter a string");
    var temp2 = "";
    for (var i = 0; i < temp.length; i++) {
        for (var j = 0; j < vowels.length; j++) {
            if (temp[i] == vowels[j]) {
                temp = temp.replace(temp[i], '');

            }
        }
    }
    console.log(temp);
}
//removeVowels()

function countVowels() {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var temp = prompt("");
    var temp2 = "";
    var total = 0;
    for (var i = 0; i < temp.length; i++) {
        for (var j = 0; j < vowels.length; j++) {
            if (temp[i] == vowels[j]) {
                for (var a = 0; a < vowels.length; a++) {
                    if (temp[i + 1] == vowels[a]) {
                        temp2 += temp[i]
                        temp2 += temp[i + 1]
                    }
                }
            }
        }
    }
    console.log(temp2);
}
//countVowels()
function kmToMeter() {
    var meter = prompt("Km into Meters");
    meter = meter * 1000;
    alert(meter)
}
function kmToFeet() {
    var feet = prompt("Km into Meters");
    feet = feet * 3280.84;
    alert(feet)
}
function kmToInches() {
    varinches = prompt("Km into Meters");
    inches = inches * 39370.1;
    alert(inches)
}
function kmToCentiMete() {
    var cntiMeter = prompt("Km into Meters");
    centMeter = cntiMeter * 100000;
    alert(cntiMeter)
}
// kmToMeter()
// kmToFeet()
// kmToInches()
//kmToCentiMete()
function overTime() {
    var i;
    var time_worked;
    var over_time;
    var overtime_pay = 0;
    for (i = 1; i <= 10; i++) {
        time_worked = prompt("Enter the time employee worked in hr ");
        if (time_worked > 40) {
            over_time = time_worked - 40;
            overtime_pay = overtime_pay + (12 * over_time);
        }
    }
    alert("Total Overtime Pay Of 10 Employees Is " + overtime_pay);
}
//overTime();
function withDraw() {
    var t, t1, t2, t3;
    var m1, m2, m3;

    t = prompt("\nInput notes in hundreds");
    t3 = t / 100;
    m3 = t3;

    t2 = (t - m3 * 100.0) / 50;
    m2 = t2;

    t1 = (t - (m3 * 100.0 + m2 * 50.0)) / 10;
    m1 = t1;

    console.log("\n\nThe no of 100 notes is " + m3)
    console.log("The no of 50 notes is " + m2);
    console.log("The no of 10 notes is " + m1);

    console.log("\n\nPress any key to close.");
}
//withDraw()

// chapter 43-48
function show() {
    alert("Thank you for clicking on me");
}

function imageshow() {
    alert("Thank You for purchasing a product from us");
}
function deleteData(tableIndex) {
    var table = tableIndex.parentNode.parentNode.rowIndex;
    document.getElementById("mytable").deleteRow(table);
}
function changeImg() {
    document.getElementById("before").src = "car2.jpg";
}
function changeImage() {
    document.getElementById("before").src = "car.jpg";
}

var clicks = 0;
function increase() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
}
function decrease() {
    if (clicks > 0)
        clicks -= 1;
    document.getElementById("clicks").innerHTML = clicks;
}

//chap 49-52
function submit() {
    var name = document.getElementById("name").value;
    var lname = document.getElementById("lName").value;
    var address = document.getElementById("Address").value;
    var email = document.getElementById("email").value;
    document.write("First Name is:" + name + "<br>");
    document.write("Last Name is:" + lname + "<br>");
    document.write("Your Email is:" + email + "<br>");
    document.write("Your Address is:" + address + "<br>");
}
function detail() {
    var expandedParagraph = "Slow lorises are a group of several species of trepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals.";
    document.getElementById("slowLoris").innerHTML = expandedParagraph;
}
function editData(){
   // var val=prompt("Enter updated Name",e.innerHTML)
    var temp=document.getElementById("row").innerText;
   // var newdata=prompt("",temp);
    var result;
  //  result.value=newdata;
    var doc = prompt("Please enter some text",temp); 
            if (doc != null) { 
                document.getElementById("row").innerHTML =doc; 
            } 
}
function editData1(){
    var temp=document.getElementById("row2").innerText;
    var doc = prompt("Please enter some text",temp); 
            if (doc != null) { 
                document.getElementById("row2").innerHTML =doc; 
            } 
}
function editData2(){
    var temp=document.getElementById("row3").innerText;
    var doc = prompt("Please enter some text",temp); 
            if (doc != null) { 
                document.getElementById("row3").innerHTML =doc; 
            } 
}
function editData3(){
    var temp=document.getElementById("row4").innerText;
    var doc = prompt("Please enter some text",temp); 
            if (doc != null) { 
                document.getElementById("row4").innerHTML =doc; 
            } 
}
function editData4(){
    var temp=document.getElementById("row5").innerText;
    var doc = prompt("Please enter some text",temp); 
            if (doc != null) { 
                document.getElementById("row5").innerHTML =doc; 
            } 
}
function editData5(){
    var temp=document.getElementById("row6").innerText;
    var doc = prompt("Please enter some text",temp); 
            if (doc != null) { 
                document.getElementById("row6").innerHTML =doc; 
            } 
}
function editData6(){
    var temp=document.getElementById("row7").innerText;
    var doc = prompt("Please enter some text",temp); 
            if (doc != null) { 
                document.getElementById("row7").innerHTML =doc; 
            } 
}
function editData7(){
    var temp=document.getElementById("row8").innerText;
    var doc = prompt("Please enter some text",temp); 
            if (doc != null) { 
                document.getElementById("row8").innerHTML =doc; 
            } 
}
function editData8(){
    var temp=document.getElementById("row9").innerText;
    var doc = prompt("Please enter some text",temp); 
            if (doc != null) { 
                document.getElementById("row9").innerHTML =doc; 
            } 
}
function editData9(){
    var temp=document.getElementById("row10").innerText;
    var doc = prompt("Please enter some text",temp); 
            if (doc != null) { 
                document.getElementById("row10").innerHTML =doc; 
            } 
}
function showImage(e){
    var model=document.getElementById("modelImage");
    model.src=e.src;
}
//part ii
    var d = document.getElementById("main-content");

// ii
 var p = document.getElementsByTagName("p");

// iii
for(var i=0; i<plength; i++){
    var content=p[i].innerHTML;
    console.log(content)
}

// iv 
var firstname=document.getElementById("first-name");
firstname.value="jawad"

// v 
var lastname=document.getElementById("last-name");
firstname.value="khan"

// vi 
var email=document.getElementById("email")
email.value="aveed59@gmail.com"