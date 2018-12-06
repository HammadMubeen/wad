var Information =
    {
        Title : "Muhammad Hammad Mubeen",
        Balance : 100000,
        Currency : "PKRS" ,
        IBAN: "PKN123456789"

    }
document.getElementById("title").innerHTML = Information.Title;
document.getElementById("balance").innerHTML = Information.Balance;
document.getElementById("currency").innerHTML = Information.Currency;
document.getElementById("IBAN").innerHTML = Information.IBAN;

function DEPOSIT(e)
{
    var DepositDATA = e.target.value;
    document.getElementById("balance").innerHTML =parseInt(Information.Balance)+parseInt(DepositDATA);
}
var Deposit = document.getElementById("deposit");
Deposit.addEventListener
(
    "keydown", function (e)
    {
        if (e.keyCode === 13)
        {  //checks whether the pressed key is "Enter"
            DEPOSIT(e);
        }
    }
);


function WITHDRAW(e)
{
     var WITHDRAWDATA=  e.target.value;
     document.getElementById("withdraw").innerHTML=parseInt(Information.Balance)- parseInt(WITHDRAWDATA);
}

var Withdraw = document.getElementById("withdraw");
Withdraw.addEventListener
(
    "keydown", function (e)
    {
        if (e.keyCode === 13)
        {  //checks whether the pressed key is "Enter"
            WITHDRAW(e);
        }
    }
);

