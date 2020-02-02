var user, pasword;

user=prompt("Enter your user");
password=prompt("Enter your password");

if (password=="123" && user=="root"){
    document.write("Welcome");
}else{
    alert("invalid password");
}