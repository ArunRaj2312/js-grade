var m=parseInt(prompt("enter your tamil mark"));
if(m>=80){
    console.log("A grade");
}
else if(m>=60 && m<80){
    console.log("B grade");
}
else if(m>=50 && m<60){
    console.log("C grade");
}
else if(m>=45 && m<50){
    console.log("D grade");
}
else if(m>=25 && m<45){
    console.log("E grade");
}
else{
    console.log("F grade");
}