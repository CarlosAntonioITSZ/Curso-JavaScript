var factorial=function(num){
    if(num<=1){
        return 1;
    }else{
        return num*(factorial(num-1));
    }
}
document.write(factorial(0));