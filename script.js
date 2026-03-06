let bal = 300;
document.getElementById("bal").innerText = bal;

const depBtn = document.getElementById("dep");
depBtn.addEventListener('click', function() {
    random(document.getElementById('sumInput').value);
});

function random(sum)
{
    if (sum > bal)
    {
        console.log("not enough money");
        document.getElementById("result").innerText = "продай душу";
        return;
    }
    if (bal <= 0) 
    {
        console.log("you cant dep more");
        document.getElementById("result").innerText = "продай душу";
        return;
    }

    let rand = Math.random();
    if (rand < 0.1)
    {
        document.getElementById("result").innerText = "вы выиграли $" + +sum;
        bal += +sum;
    }
    else
    {
        document.getElementById("result").innerText = "вы проиграли $" + +sum;
        bal -= +sum;
    }
    console.log("balance: " + bal);
    document.getElementById("bal").innerText = bal;
    return;const depBtn = document.getElementById("dep");
}

depBtn.addEventListener('click', function() {
    random(document.getElementById('sumInput').value);
});