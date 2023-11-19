let resetForm = document.forms.password_resetform
let userInput = document.querySelectorAll("input");
resetForm.onsubmit= (e)=> {
 e.preventDefault();
 console.log(e.target)

 let formErr ={
    oldpasswordErr: "",
    newpasswordErr: "",
    confirmpasswordErr: "",

   }
  let oldpassword= resetForm.oldpassword.value.trim();
  let newpassword= resetForm.newpassword.value.trim();
  let confirmpassword= resetForm.confirmpassword.value.trim();

  if(oldpassword == ""){
   formErr.oldpasswordErr = "please fill in the blank ";

   }else if(newpassword == ""){
      formErr.newpasswordErr= "please fill in the blank";

   }else if(newpassword == oldpassword){
      formErr.newpasswordErr= "must be a valid password that you've not used in the past";

   }else if(confirmpassword == ""){
      formErr.confirmpasswordErr = "please fill in the blank";

   }else if(confirmpassword != newpassword){
      formErr.confirmpasswordErr = "must be the same value with your new password";

   }else{
      console.log({oldpassword,newpassword,confirmpassword});
      alert("congratulation you've successfully reset your password,your new password is  "+newpassword);

   }
   let errElement = document.querySelectorAll(".err");
   console.log(errElement)
   for(let i=0; i < errElement.length; i++){
      let errElements = errElement[i];
 
      console.log(formErr);
      errElements.innerHTML = formErr[""+errElements.dataset.err+""]

   }



}
