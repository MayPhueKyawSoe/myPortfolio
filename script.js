let themlight=document.querySelector('#them-toggler');
 
themlight.onclick = () =>{
    themlight.classList.toggle('fa-home');
    if(themlight.classList.contains('fa-home')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
}
function openForm(){
    document.getElementById("myForm").style.display = "block";
} 
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
function cvDownload(){
    
    if ((document.getElementById("username").value == "demo") &&(document.getElementById("password").value =='demo') ) {
        window.open('MayPhue.pdf');
    }
    else{
        prompt('Password Incorrect, Please Try Again.');
    }
  
}
 function link(){
     window.open('https://test.gei-tassha.jp/');
 }
 