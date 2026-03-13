let bal = 10000;
document.getElementById("bal").innerText = bal;

function random()
{
    sum = document.getElementById("sum").value;

    if (sum > bal)
    {
        console.log("not enough money");
        document.getElementById("result").innerText = "сумма депа превышает баланс";
        return;
    }
    if (bal <= 0) 
    {
        console.log("you cant dep more");
        document.getElementById("result").innerText = "у вас нет денег";
        return;
    }

    let rand = Math.random();
    if (rand < 0.5)
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
    return;
}
