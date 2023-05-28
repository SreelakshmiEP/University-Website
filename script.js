var navlinks = document.getElementById("navlinks");
function showMenu() {
    navlinks.style.right = "0";
}
function hideMenu() {
    navlinks.style.right = "-200px";
}
function validation(){
    if(document.getElementById("name-input").value=="")
    {
        document.getElementById("name-validation").style.display="block";
    }
    if(document.getElementById("email-input").value=="")
    {
        document.getElementById("email-validation").style.display="block";
    }
    if(document.getElementById("message-input").value=="")
    {
        document.getElementById("message-validation").style.display="block";
    }
    return false;
}