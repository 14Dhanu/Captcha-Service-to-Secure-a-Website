var num=parseInt(Math.random()*3)+1
var img="cap"+num+".png"
console.log(img)
document.getElementById('captchaimg').setAttribute("src", img)

function generate(){
    var n=parseInt(Math.random()*3)+1
    var img="cap"+n+".png"
    console.log(img)
    document.getElementById('captchaimg').setAttribute("src", img)
}

var email=["yourname14@gmail.com"]
var password=["yourwish"]

function choose(){
    for (var i=0; i<email.length; i++){
        if (email[i]==document.getElementById('inputEmail').value){
            console.log('A')
            if (document.getElementById('inputPassword').value==password[i]){
                console.log('B')

                if (img=='cap1.png'){
                    console.log('cap1.')
                    if (document.getElementById('inputcaptcha').value=='263S2V'){
                        location.replace('C:\\Users\\dhanu\\OneDrive\\Desktop\\captcha\\index1.html')
                    }
                    else{
                        document.getElementById('remarks').innerHTML="Invalid Captcha!!"
                        var e=document.getElementById('inputcaptcha')
                        e.classList.add("re")
                    }
                }

                else if(img=='cap2.png') {
                    console.log('cap2.')
                    if (document.getElementById('inputcaptcha').value=='AAXUE'){
                        location.replace('C:\\Users\\dhanu\\OneDrive\\Desktop\\captcha\\index1.html')
                    }
                    else{
                        document.getElementById('remarks').innerHTML="Invalid Captcha!!"
                        var el=document.getElementById('inputcaptcha')
                        el.classList.add("re")
                    }
                }
                
                else if(img=='cap3.png') {
                    console.log('cap3.')
                    if (document.getElementById('inputcaptcha').value=='mwxe2'){
                        location.replace('C:\\Users\\dhanu\\OneDrive\\Desktop\\captcha\\index1.html')
                    }
                    else{
                        document.getElementById('remarks').innerHTML="Invalid Captcha!!"
                        var elem=document.getElementById('inputcaptcha')
                        elem.classList.add("re")
                    }


                }
                
                }
                else{
                    document.getElementById('remarks').innerHTML="Invalid Password!!"
                    var element=document.getElementById('inputPassword')
                    element.classList.add("re")

                }            
                    
            }
            else{
                document.getElementById('remarks').innerHTML="Invalid Email!!"
                var eleme=document.getElementById('inputEmail')
                eleme.classList.add("re")

            }  
        }
    }
