let res1 = document.getElementById("res")
let btns = document.querySelectorAll("button")
let n1 = "";
let n2 = "";
let res3;
let op;
let state = "first"
let n1_counter = 0
let n2_counter = 0
let res3_counter = 0


btns.forEach(btn => {
    btn.onclick = function(){
        if (btn.textContent == "AC"){
            res1.innerHTML = "0"
            n1 = "";
            n2 = "";
            res3 = "";
            op = "";
            state = "first"
            n1_counter = 0
            n2_counter = 0
            res3_counter = 0
        }

        else if(btn.textContent == "⌫"){
            if (state == "first"){

                // عدد اول
                if (n1 != ""){
                n1 = String(n1).slice(0, -1)
                res1.innerHTML = n1

                if (!(String(n1).includes(".")))
                    n1_counter = 0
                }

                // عدد سوم
                else{
                    res3 = String(res3).slice(0, -1)
                    res1.innerHTML = String(res3)

                    if (!(String(res3).includes("."))){
                        res3_counter = 0
                    }
                }
                

            }

            // عدد دوم
            else{
                n2 = String(n2).slice(0, -1)
                res1.innerHTML = n2

                if (!(String(n2).includes("."))){
                    n2_counter = 0
                }
            }
        }


        else if(btn.textContent == "="){
            if (n2 != ""){
                n2 = Number(n2)

                // بعد از مساوی یه عملگر زدی
                if (n1 == ""){
                        if (op == "+")
                        res3 += n2

                        if (op == "-")
                            res3 -= n2

                        if (op == "*")
                            res3 *= n2

                        if (op == "/")
                            res3 /= n2

                        if (op == "%")
                            res1.innerHTML = String(res3)

                        n2 = ""
                        n2_counter = 0
                        res1.innerHTML = String(res3)
                }

                // قبل از زدن مساوی و تشکیل شدن عدد سوم
                else if (n1 != ""){
                    
                    if (op == "+"){
                        res3 = n1 + n2
                        res1.innerHTML = String(res3)
                    }

                    if (op == "-"){
                        res3 = n1 - n2
                        res1.innerHTML = String(res3)
                    }

                    if (op == "*"){
                        res3 = n1 * n2
                        res1.innerHTML = String(res3)
                    }

                    if (op == "/"){
                        res3 = n1 / n2
                        res1.innerHTML = String(res3)
                    }


                    if (op == "%")
                        res1.innerHTML = String(n1)


                    n1 = ""
                    n2 = ""
                    n1_counter = 0
                    n2_counter = 0
            
        }
                state = "first"

                // اگه کاربر اشتباه کرد و عدد دوم تشکیل نشد ولی عدد اول داشتیم
                }
                else if (n2 == "" && n1 != ""){
                    res1.innerHTML = String(n1)
                    state = "first"
                }

                //  اگه کاربر اشتباه کرد و عدد دوم تشکیل نشد ولی عدد سوم داشتیم
                else if (n2 == "" && n1 == ""){
                    res1.innerHTML = String(res3)
                    state = "first"
    }
}


        else if (btn.textContent == "%"){

            // یعنی درصد روی عدد اول اعمال میشه
            if (state == "first" && n1 != ""){
                n1 = Number(n1) / 100
                res1.innerHTML = String(n1)

            }

            // درصد روی عدد سوم اعمال میشه
            else if (state == "first" && n1 == ""){
                res3 = Number(res3) / 100
                res1.innerHTML = String(res3)
                n2 = ""
                n2_counter = 0
            }

            // درصد روی عدد دوم اعمال میشه
            else if(state == "second" && n2 != ""){
                n2 = Number(n2)

                // باید ببینیم عدد سوم تشکیل شده یا نه

                // عدد سوم تشکیل نشده
                if (n1 != ""){
                    n1 = Number(n1)
                    
                    // تشخیص عملگر
                    if (op == "+"){
                        console.log(n1)
                        n1 += (n1 * (n2 / 100))
                        console.log(n1)
                    }
            
                    if (op == "-"){
                        n1 -= (n1 * (n2 / 100))
                    }

                    if (op == "*"){
                        n1 *= (n2 / 100)
                    }

                    if (op == "/"){
                        n1 /= (n2 / 100)
                    }

                    res1.innerHTML = String(n1)
                }

                // عدد سوم تشکیل شده
                if (n1 == ""){
                    res3 = Number(res3)

                    // تشخیص عملگر
                    if (op == "+"){
                        res3 += (res3 * (n2 / 100))
                    }
            
                    if (op == "-"){
                        res3 -= (res3 * (n2 / 100))
                    }

                    if (op == "*"){
                        res3 *= (res3 * (n2 / 100))
                    }

                    if (op == "/"){
                        res3 /= (res3 * (n2 / 100))
                    }

                    res1.innerHTML = String(res3)
                }
            }

            // برای وقتی که کاربر اشتباه میکنه و عدد دوم تشکیل نمیشه و عدد سوم هم تشکیل نشده
            else if ((state == "second" && n2 == "") && (n1 != "")){
                n1 = Number(n1) / 100
                res1.innerHTML = String(n1)
            }

            // برای وقتی که کاربر اشتباه میکنه و عدد دوم تشکیل نمیشه و عدد سوم هم تشکیل شده
            else if((state == "second" && n2 == "") && (n1 == "")){
                res3 = Number(res3) / 100
                res1.innerHTML = String(res3)
            }


            res1.innerHTML = btn.textContent
            op = btn.textContent
            n2 = "" //برای اینکه بشه دوباره عدد دوم رو وارد کرد
            n2_counter = 0
        }


        else if (btn.textContent == "+" || btn.textContent == "-" || btn.textContent == "*" || btn.textContent == "/"){

            // فقط دوتا عدد
            if (n2 == ""){

                // عدد سوم تشکیل نشده
                if(n1 != ""){
                    n1 = Number(n1)
                    op = btn.textContent
                    state = "second"
                }

                // عدد سوم تشکیل شده
                else if (n1 == ""){
                    res3 = Number(res3)
                    op = btn.textContent
                    state = "second"
                }

}
            
            // بیشتر از دوتا عدد
            else if(n2 != ""){
                // عدد سوم تشکیل نشده
                if(n1 != ""){
                    n1 = Number(n1)
                    n2 = Number(n2)


                    // تشخیص عملگر
                    if (op == "+"){
                        n1 += n2
                        n2 = ""
                        n2_counter = 0
                    }

                    else if (op == "-"){
                        n1 -= n2
                        n2 = ""
                        n2_counter = 0
                    }

                    else if (op == "*"){
                        n1 *= n2
                        n2 = ""
                        n2_counter = 0
                    }

                    else if (op == "/"){
                        n1 /= n2
                        n2 = ""
                        n2_counter = 0
                    }

                    op = btn.textContent
                    state = "second"
                }
            
                // عدد سوم تشکیل شده
                else if(n1 == ""){
                    res3 = Number(res3)
                    n2 = Number(n2)
                    
                    // تشخیص عملگر
                    if (op == "+"){
                        res3 += n2
                        n2 = ""
                        n2_counter = 0
                    }

                    else if (op == "-"){
                        res3 -= n2
                        n2 = ""
                        n2_counter = 0
                    }

                    else if (op == "*"){
                        res3 *= n2
                        n2 = ""
                        n2_counter = 0
                    }

                    else if (op == "/"){
                        res3 /= n2
                        n2 = ""
                        n2_counter = 0
                    }
                    op = btn.textContent
                    state = "second"
                }
            }
            
            res1.innerText = btn.textContent
            }
        

        else if (btn.textContent == "+/-"){
            // فقط عدد اول
            if (state == "first" && n1 != ""){
                n1 = Number(n1) * (-1)
                res1.innerHTML = String(n1)
            }

            // عدد دوم
            else if (state == "second"){
                n2 = Number(n2) * (-1)
                res1.innerHTML = String(n2)
            }

            // عدد سوم  
            else if (state == "first" && n1 == ""){
                res3 = Number(res3) * (-1)
                res1.innerHTML = String(res3)
            }
        }


        else if(btn.textContent == "."){
            // برای عدد اول
            if (state == "first" && n1 != "" ){
                if (n1_counter == 0){
                    n1 = String(n1) + "."
                    n1_counter += 1
                    res1.innerHTML = String(n1)
                }
            }
            // قبلش صفر زده یا نه
            else if (state == "first" && n1 == "" ){
                n1 = "0."
                n1_counter += 1
                res1.innerHTML = String(n1)
            }

            // برای عدد دوم
            else if (state == "second" && n2 != ""){
                if (n2_counter == 0){
                    n2 = String(n2) + "."
                    n2_counter += 1
                    res1.innerHTML = String(n2)
                }

            }

            // قبلش صفر زده یا نه
            else if (state == "second" && n2 == ""){
                n2 = "0."
                n2_counter += 1
                res1.innerHTML = String(n2)
            }

            // برای عدد سوم
            else if (state == "first" && n1 == "" && res3 != undefined && res3 != 0){
                if (res3_counter == 0){
                res3 = String(res3) + "."
                res3_counter += 1
                res1.innerHTML = String(res3)
            }
        }
            // عدد سوم صفر هست یا نه
            else if (state == "first" && n1 == "" && res3 != undefined && res3 == 0){
                if (res3_counter == 0){
                    res3 = "0."
                    res3_counter += 1
                    res1.innerHTML = String(res3)
                }

            }
        }

        // اگه کاربر دکمه عدد رو فشار داد
        else{

            if (state == "first"){
                let res2 = btn.textContent
                n1 += res2
                res1.innerHTML = n1
            }

            else if (state == "second"){
                let res2 = btn.textContent
                n2 += res2
                res1.innerHTML = n2
                // c_string += String(last_op)
            }

        }
    }
})
