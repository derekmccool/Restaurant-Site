function clearErrors(){
    for(var loopCounter = 0;
        loopCounter < document.forms["contactUs"].elements.length;
        loopCounter++){
        if(document.forms["contactUs"].elements[loopCounter].parentElement.className.indexOf("has-")!=-1)
        {
            document.forms["contactUs"].elements[loopCounter].parentElement.className = "form-group";
            document.forms["contactUs"].elements[loopCounter].style.backgroundColor = "";
        }
    }
}


function validateItems(){
    clearErrors();
    var name = document.forms["contactUs"]["name"].value;
    var email = document.forms["contactUs"]["email"].value;
    var phone = document.forms["contactUs"]["phone"].value;
    var errorCount = 0;
    var alertString = "Please fill in the following required fields: "
    if (name == ""){
        document.forms["contactUs"]["name"].parentElement.className ="form-group has-error";
        document.forms["contactUs"]["name"].style.backgroundColor = "red";
        document.forms["contactUs"]["name"].focus();
        errorCount ++
        alertString += "Name "
    }else{
        document.forms["contactUs"]["name"].style.backgroundColor = "";
    }

    if (email == ""){
        document.forms["contactUs"]["email"].parentElement.className ="form-group has-error";
        document.forms["contactUs"]["email"].style.backgroundColor = "red";
        document.forms["contactUs"]["email"].focus();
        errorCount ++
        alertString += "Email "
    }else{
        document.forms["contactUs"]["email"].style.backgroundColor = "";
    }

    if (phone == ""){
        document.forms["contactUs"]["phone"].parentElement.className ="form-group has-error";
        document.forms["contactUs"]["phone"].style.backgroundColor = "red";
        document.forms["contactUs"]["phone"].focus();
        errorCount ++
        alertString += "Phone "
    }else{
        document.forms["contactUs"]["phone"].style.backgroundColor = "";
    }
    
    if (errorCount > 0){
        alert(alertString);
    }

    return false;
}