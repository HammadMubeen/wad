var Information={
    tilte : "Muhammad Hammad Mubeen",
    balance : 10000,
    Currency : "PKRS",
    IBAN : "PKN0123456789"
};
showdata();

function showdata()
{
    var TITLE=document.getElementById("title"),BALANCE=document.getElementById("balance"),CURRENCY=document.getElementById("currency"),IBAN=document.getElementById("IBAN");
    TITLE.innerHTML=Information.tilte;
    BALANCE.innerHTML=Information.balance;
    CURRENCY.innerHTML=Information.Currency;
    IBAN.innerHTML=Information.IBAN;
}
function Deposit(e,amount)
{
    document.getElementById("deposit-msg").style.display="none";
    if(e.keyCode===13)
    {
        if(!isNaN(amount) && parseInt(amount)>0)
        {
            var DEPOSIT=document.getElementById("balance");
            Information.balance += parseInt(amount);
            DEPOSIT.innerHTML=Information.balance;
            Transaction("Credit",amount);
        }
        else
        {
            document.getElementById("deposit-msg").style.color="red";
            document.getElementById("deposit-msg").innerHTML="Enter a Valid Number.";
            document.getElementById("deposit-msg").style.display="block";
        }
        document.getElementById("deposit").value="";
    }
}

function Withdraw(e,amount)
{
    document.getElementById("withdraw-msg").style.display="none";
    if(e.keyCode===13)
    {
        if(parseInt(amount)>Information.balance)
        {
            document.getElementById("withdraw-msg").style.color="red";
            document.getElementById("withdraw-msg").innerHTML="Don't have sufficient amount in account.";
            document.getElementById("withdraw-msg").style.display="block";
        }
        else if(!isNaN(amount) && parseInt(amount)>0)
        {
            var WITHDRAW=document.getElementById("balance");
            Information.balance -=parseInt(amount);
            WITHDRAW.innerHTML=Information.balance;
            document.getElementById("withdraw").value="";
            Transaction("Debit",amount);
        }
        else
        {
            document.getElementById("withdraw-msg").style.color="red";
            document.getElementById("withdraw-msg").innerHTML="Enter a Valid Number.";
            document.getElementById("withdraw-msg").style.display="block";
        }
        document.getElementById("withdraw").value="";
    }
}
function Transaction(TYPE,AMOUNT)
{
    var TABLE=document.getElementById("transaction-table");
    var ROW=document.createElement("tr");
    var col1=document.createElement("td");
    var col2=document.createElement("td");
    var col3=document.createElement("td");
    var d=new Date();
    d=month[d.getMonth()] + ' '+d.getDate() +', '+d.getFullYear()+' '+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();
    col1.innerHTML=d;
    col2.innerHTML=TYPE;
    col3.innerHTML=AMOUNT;
    ROW.appendChild(col1);
    ROW.appendChild(col2);
    ROW.appendChild(col3);
    TABLE.appendChild(ROW);
}
var month = [];
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";