let input=document.getElementsByTagName("input")
let click=0
let genOTP=document.getElementById("genOTP")
genOTP.addEventListener("click",()=>{
    if(!click){
        click=1
        let otp=""
        let k=0
        for(let i=0;i<=6;i++){
            otp+=Math.trunc(Math.random()*10)

        }
        alert(`The OTP is ${otp}`)
        setInterval(()=>{
            if(k<otp.length){
                input.item(k).value=otp[k]
                k++
            }
        },300)
        setTimeout(()=>{
            genOTP.style.backgroundColor="green"
            genOTP.innerHTML="S U B M I T"

        },1800)
    }else{
        alert("You are directed to home page")
        window.open("./home.html")
    }
})