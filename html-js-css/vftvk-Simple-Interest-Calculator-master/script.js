function computeInterest()
{
    // Computes the interest from input values
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);

    document.getElementById("result").innerHTML = `Interest : If you deposit <mark>${principal}</mark>,<br/>at an interest rate of <mark>${rate}</mark>,<br/>You will receive an amount of <mark>${interest}</mark>,<br/> in the year <mark>${year}</mark>`;
}
        
function updateRate() 
{
    // Translates the slider to a numeric value
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
} 

function validation() {
    // Checks for valid principal input 
    var principal = document.getElementById("principal").value;
    var greaterThanZero = parseInt(principal) > 0;
    if (!greaterThanZero) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }

}