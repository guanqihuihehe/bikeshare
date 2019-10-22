function checkid(){
	var name1=myform.username.value;
	var obj=document.getElementById("error_id");
	obj.innerHTML="";
	if (name1==""||name1==null){
		obj.innerHTML="Telephone number cannot be empty！";
		alert("Telephone number cannot be empty！");
		
	}
	else if(name1.length!==11){
		obj.innerHTML="Telephone number length must be 11！";
	}
	
}

function checkpassword(){
	var pass=myform.password1.value;
	var obj=document.getElementById("error_password");
	obj.innerHTML="";
	if(pass.length<8){
		obj.innerHTML="Password length should not be less than 8 or greater than 15！";
	}
	else if(pass.length>15){
		obj.innerHTML="Password length should not be less than 8 or greater than 15！";
	}
}

function checkpassword_1(){
	var pwd1=myform.check.value;
	var pwd2=myform.password1.value;
	var obj=document.getElementById("error_check");
	obj.innerHTML="";
	if(pwd1!=pwd2){
		obj.innerHTML="Password is different from confirmation password！";
	}
}


function checkcontact(){
	var con=myform.contact.value;
	var obj=document.getElementById("error_contact");
	obj.innerHTML="";
	if(con==null||con==""){
		obj.innerHTML="Mailbox cannot be empty！";
	}
}
