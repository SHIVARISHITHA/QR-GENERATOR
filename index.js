const container=document.querySelector(".container");
const qrinput=container.querySelector(".inputBox #input_from_users");
const generatebutton=container.querySelector(".button #generate_button");
const qrimage=container.querySelector(".qr_code .qr_code_img");



generatebutton.addEventListener("click",()=>{
    let qrvalue=qrinput.value.trim();
    if(!qrvalue) 
    return;
    
    generatebutton.innerText="Generating QR Code.....";
    // console.log(qrvalue);
    qrimage.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrvalue}`;
    qrimage.addEventListener("load",()=>{
        container.classList.add("active");
        generatebutton.innerText="Generate QR Code";
       
    });
   

});

qrinput.addEventListener("keyup",()=>{
    if(!qrinput.value){
        container.classList.remove("active");
    }
});