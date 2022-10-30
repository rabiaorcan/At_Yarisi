var at1=document.getElementById("atbir");
var at2=document.getElementById("atiki");
var at3=document.getElementById("atuc");
var at4=document.getElementById("atdort");

var bitis=document.getElementById("bitis").offsetLeft-120;//offsetleft komutu sol taraftan kendi yerien margin-right=20px kadar olan mesafeti algılar
//atların cizgiyi aşmaması için bu hesaplamaya img boyun++ cıkartılması gerkiyordu.
var rnd1=0;
var rnd2=0;
var rnd3=0;
var rnd4=0;
var kontrol=false;

function baslat()
{
    sure=setInterval(yarismaa,1000);
}

var yarismaa=function()
{
    atbir();
    atiki();
    atuc();
    atdort();

}




var rastgelesayiuret=function()
{
    var rndm;
    do {
        rndm=Math.floor(Math.random()*100);
    } while (rndm<50);
   
    return rndm;
}

function atbir()
{
    if(rnd1<bitis)
    {
        rnd1 +=rastgelesayiuret();
        if(rnd1>=bitis){
            rnd1=bitis;
            clearInterval(sure);
            if(!kontrol)
            {
                kontrol=true;
                setTimeout(function(){alert("kazanan 1.at");}, 2000);
            }
            at1.style.marginLeft=bitis + "px";
        }
        else{
            at1.style.marginLeft=rnd1 + "px";
        }
    }
}


function atiki()
{
    if(rnd2<bitis)
    {
        rnd2 +=rastgelesayiuret();
        if(rnd2>=bitis){
            rnd2=bitis;
            clearInterval(sure);
            if(!kontrol)
            {
                kontrol=true;
                setTimeout(function(){alert("kazanan 2.at");}, 2000);
            }
            at2.style.marginLeft=bitis + "px";
        }
        else{
            at2.style.marginLeft=rnd2 + "px";
        }
    }
}


function atuc()
{
    if(rnd3<bitis)
    {
        rnd3 +=rastgelesayiuret();
        if(rnd3>=bitis){
            rnd3=bitis;
            clearInterval(sure);
            if(!kontrol)
            {
                kontrol=true;
                setTimeout(function(){alert("kazanan 3.at");}, 2000);
            }
            at3.style.marginLeft=bitis + "px";
        }
        else{
            at3.style.marginLeft=rnd3 + "px";
        }
    }
}


function atdort()
{
    if(rnd4<bitis)
    {
        rnd4 +=rastgelesayiuret();
        if(rnd4>=bitis){
            rnd4=bitis;
            clearInterval(sure);
            if(!kontrol)
            {
                kontrol=true;
                setTimeout(function(){alert("kazanan 4.at");}, 2000);
            }
            at4.style.marginLeft=bitis + "px";
        }
        else{
            at4.style.marginLeft=rnd4 + "px";
        }
    }
}