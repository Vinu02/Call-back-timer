let ele=document.createElement("div");
ele.classList.add("container")


let time=document.getElementById("spa")
time.innerHTML=10
document.body.append(ele)


let count=10;
setTimeout(()=>{
  count=count-1;
  time.innerHTML=count
    setTimeout(()=>{
      count=count-1;
      time.innerHTML=count
        setTimeout(()=>{
          count=count-1;
          time.innerHTML=count
            setTimeout(()=>{
              count=count-1;
              time.innerHTML=count
                setTimeout(()=>{
                  count=count-1;
                  time.innerHTML=count
                    setTimeout(()=>{
                      count=count-1;
                      time.innerHTML=count
                        setTimeout(()=>{
                          count=count-1;
                          time.innerHTML=count
                            setTimeout(()=>{
                              count=count-1;
                              time.innerHTML=count
                                setTimeout(()=>{
                                  count=count-1;
                                  time.innerHTML=count
                                    setTimeout(()=>{
                                      time.innerHTML="<div> <div style=background-color:orange>HAPPY</div> <div>INDEPENDENCE</div> <div style=background-color:green>DAY</div> </div>"

                                        
                                    },1000)                                

                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
  
},1000)