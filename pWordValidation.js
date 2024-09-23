function userName(){

    let user = document.getElementById('users').value;
    let regEx = /[A-Za-z0-9.-]+@[a-z.-]+\.[a-z]{2,3}/;

    

    if(regEx.test(user)){
        document.getElementById('u').innerHTML = " username was correct"
        document.getElementById('u').style.color =  "darkgreen";

}else{
    document.getElementById('u').innerHTML = "user was incorrect" //The innerHTML property sets or returns the HTML content (inner HTML) of an element.
    document.getElementById('u').style.color =  "red";
}
}

document.getElementById("bntcompute").addEventListener("click" , userName);  //addEventListener is abuilt in function in javascript that allows you to attach an event handler to specified element such as a button or link.


function passWord(){

    let password = document.getElementById('pass').value;
    let regEx = /(?=.*[a-z)(?=.*[A-Z]){6,}/;
        
        
        if(regEx.test(password)){
            document.getElementById('p').innerHTML = "password was correct"
            document.getElementById('p').style.color =  "darkgreen";

        }else{
            document.getElementById('p').innerHTML = "Please input correct password, Password must be contained 1 Upper case <br> 1 Lower case, 1 Character and 1 Number."
            document.getElementById('p').style.color =  "red";
            

        }

            
        }
document.getElementById("bntcompute").addEventListener("click", passWord);
