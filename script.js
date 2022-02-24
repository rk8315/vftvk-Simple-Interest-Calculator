function compute()
{   
    // gather variables from HTML
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);
    var principal = document.getElementById("principal").value;
    // validate if principal value is greater than zero, else don't compute and focus
    if(principal <= 0){
        alert("Enter a positve number");
        document.getElementById("principal").focus();
        return false;
    }
    document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"%</mark>\<br\>You will receive an amount of <mark>"+interest+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>";
}

// way to dynamically update value to changes with slider
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}


