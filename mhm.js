const shbl_str_users = [
   
{dec: "א", cls: "shbl_str", icon: "https://up6.cc/2023/03/167949264909021.gif"},
	
{dec: "𝐌𝐬𝐡$", cls: "msh_str", icon: "https://up6.cc/2023/04/168133037492731.png"},
	
{dec: "نورثث", cls: "north_str", icon: "https://up6.cc/2023/04/168133037492731.png"},
	
{dec: "root..", cls: "root_str", icon: "https://up6.cc/2023/02/167614231649311.gif"},
	
{dec: "موسوس..*", cls: "mosos_str", icon: "https://up6.cc/2023/03/167948644970111.gif"},
	
	
{dec: "َM", cls: "aym_str", icon: "https://up6.cc/2023/04/168133037492731.png"},
	
{dec: "سعُـود..", cls: "saud_str", icon: "https://up6.cc/2023/04/168133037492731.png"},
	
{dec: "*تذ+كار*", cls: "thkar_str", icon: "https://up6.cc/2023/03/16798612360531.png"},
	
{dec: ".. حـّـظ", cls: "h9_str", icon: "https://up6.cc/2023/04/168133037492731.png"},
	
{dec: "Pure..", cls: "pure_str", icon: "https://up6.cc/2023/04/168133037492731.png"},
	
{dec: "نَقاء", cls: "bar_str", icon: "https://up6.cc/2023/04/168133037492731.png"},
	
	
{dec: "t-ro7", cls: "t3br_str", icon: "https://up6.cc/2023/03/167985979305331.png"},
	
{dec: "دلَعّ", cls: "dl3_str", icon: "https://up6.cc/2023/04/168048002304851.png"},	

	
{dec: "**غشيم", cls: "gshim_str", icon: "https://up6.cc/2023/04/168174439627231.png"}
	
	
];

setInterval(() => {
    shbl_str_users.forEach(function(user) {
        const p_msg = $("#d2 .uzr:contains('"+user.dec+"').mm");
        if(p_msg.length) {
            p_msg.each(function(index, el) {
                if($(el).hasClass(user.cls)) return;
                $(el).addClass(user.cls);
               $(el).find(".fitimg.u-pic").append('<img style="max-width: 77px; margin-top: -12px; margin-left: -14px;" class="itar_shbl" title="اطاري" src="'+user.icon+'">');
            });
        }
    });    
}, 10);

$("style").last().append(`



#d2 .uzr.shbl_str .u-topic {
-webkit-text-fill-color: #0000;
  
}
    #d2 .uzr.shbl_str .fitimg.u-pic {
        height: 52px !important;
border-radius: 100px; !important; 
margin-bottom: 3px !important;
margin-top: 1px !important;
box-shadow:inset 0 0 0 rgba(0,0,0,.08),0 0 6px #000;
filter: hue-rotate(360deg);
box-shadow: 0 0 0px rgb(0 0 0), inset 0 0 4px rgb(0 0 0), 0 0 0 0px #000;
    }
    #d2 .uzr.shbl_str .u-msg.break {
          
margin-left: 5px !important;
   -webkit-background-clip: text;
  -webkit-text-fill-color: #0000;
  background-image: linear-gradient(-225deg,#000 0%,#353535 29%,#f00 67%,#000 100%);
  padding: 0px !important;
  font-size: 100% !important;
	
background-size: cover; 
    }

  #d2 .uzr.shbl_str .itar_shbl  {
        width: 94px;
        height: 94px;
        margin-top: -40px;
        cursor: pointer;
        margin-left: -55px;
    }


    #d2 .uzr.d-flex.mm.shbl_str {
      
  border-radius: 0px 10px 0px 10px;
   
  

 background-image: url(https://up6.cc/2023/03/167935621776951.png);
background-size: 100%;
    }
  

#d2 .uzr.d-flex.mm.hmsg.shbl_str {
 background-image: url(https://up6.cc/2023/03/16794923829062.png);
background-size: 100%;
 border: 1px solid #fff;
box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;
  margin-bottom: 3px !important;
  margin-top: 2px !important;
        background-color: #16202a00 !important;
   border-radius:  0px 0 0px;
}

	#d2 .uzr.d-flex.mm.pmsgc.shbl_str {
 background-image: url(https://up6.cc/2023/03/16794923829062.png);
background-size: 100%;
 border: 1px solid #fff;
 box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;
  margin-bottom: 3px !important;
  margin-top: 2px !important;
        background-color: #16202a00 !important;
}

#room .uzr.shbl_str .btn-primary {
    border-radius:  0px 10px 0px 10px!important;
    box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 1px #000;
border: 1px solid #fff;
    background-image: url(https://up6.cc/2023/03/16794923829062.png);
    background-size: cover;
    color: #484848;
    font-size: 14px !important;
-webkit-text-fill-color: #000;
margin-left: 4px!important;
}
`);









$("style").last().append(`


#d2 .uzr.msh_str .u-topic {
-webkit-text-fill-color: #0000;
  
}
    #d2 .uzr.msh_str .fitimg.u-pic {
        height: 52px !important;
border-radius: 10px 0px 10px 0px; !important; 
margin-bottom: 3px !important;
margin-top: 1px !important;
box-shadow:inset 0 0 0 rgba(0,0,0,.08),0 0 6px #000;
filter: hue-rotate(360deg);
box-shadow: 0 0 0px rgb(0 0 0), inset 0 0 4px rgb(0 0 0), 0 0 0 0px #000;
    }
    #d2 .uzr.msh_str .u-msg.break {
          
margin-left: 3px !important;
   -webkit-background-clip: text;
  -webkit-text-fill-color: #0000;
  background-image: linear-gradient(-225deg,#000 0%,#7e7e7e 29%,#000 67%,#7e7e7e 100%);
  padding: 0px !important;
  font-size: 100% !important;
	margin-left: 3px !important;
background-size: cover; 
    }
   
    #d2 .uzr.msh_str .itar_msh  {
        width: 94px;
        height: 94px;
        margin-top: -40px;
        cursor: pointer;
        margin-left: -55px;
    }

 #d2 .uzr.d-flex.mm.msh_str {
      
  border-radius: 0px 10px 0px 10px;
   
  
 
 background-image: url(https://up6.cc/2023/03/167948502129391.png);
background-size: 100%;
    }

#d2 .uzr.d-flex.mm.hmsg.msh_str {
box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;
border: 1px solid #fff;
  margin-bottom: 3px !important;
  margin-top: 2px !important;

        background-image: url(https://up6.cc/2023/03/167949238287961.png);
background-size: 100%;
   border-radius:  0px 10px 0px 10px;
}

	#d2 .uzr.d-flex.mm.pmsgc.msh_str {
 box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;
  margin-bottom: 3px !important;
  margin-top: 2px !important;
        background-image: url(https://up6.cc/2023/03/167949238287961.png);
background-size: 100%;
border-radius:  0px 10px 0px 10px;
}

#room .uzr.msh_str .btn-primary {
    border-radius:  0px 10px 0px 10px!important;
   
    background-image: url(https://up6.cc/2023/03/167948510715751.png);
box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 1px #000;
border: 1px solid #fff;
    background-size: cover;
    color: #484848;
    font-size: 14px !important;
-webkit-text-fill-color: #000;
margin-left: 4px!important;
}
`);







$("style").last().append(`


#d2 .uzr.north_str .u-topic {
-webkit-text-fill-color: #0000;
  
}
    #d2 .uzr.north_str .fitimg.u-pic {
        height: 52px !important;
border-radius: 100px; !important; 
margin-bottom: 3px !important;
margin-top: 1px !important;
box-shadow:inset 0 0 0 rgba(0,0,0,.08),0 0 6px #000;
filter: hue-rotate(360deg);
box-shadow: 0 0 0px rgb(0 0 0), inset 0 0 4px rgb(0 0 0), 0 0 0 0px #000;
    }
    #d2 .uzr.north_str .u-msg.break {
          
margin-left: 3px !important;
   -webkit-background-clip: text;
  -webkit-text-fill-color: #0000;
  background-image: linear-gradient(-225deg,#000 0%,#353535 29%,#f00 67%,#000 100%);
  padding: 0px !important;
  font-size: 100% !important;
	
background-size: cover; 
    }

  #d2 .uzr.north_str .itar_north  {
        width: 94px;
        height: 94px;
        margin-top: -40px;
        cursor: pointer;
        margin-left: -55px;
    }


    #d2 .uzr.d-flex.mm.north_str {
      
  border-radius: 0px 10px 0px 10px;
   
  

 background-image: url(https://up6.cc/2023/03/167935621776951.png);
background-size: 100%;
    }
  

#d2 .uzr.d-flex.mm.hmsg.north_str {
 background-image: url(https://up6.cc/2023/03/167948802883081.png);
background-size: 100%;
 border: 1px solid #fff;
box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;
  margin-bottom: 3px !important;
  margin-top: 2px !important;
        background-color: #16202a00 !important;
   border-radius:  0px 0 0px;
}

	#d2 .uzr.d-flex.mm.pmsgc.north_str {
 background-image: url(https://up6.cc/2023/03/167948816595771.png);
background-size: 100%;
 border: 1px solid #fff;
 box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;
  margin-bottom: 3px !important;
  margin-top: 2px !important;
        background-color: #16202a00 !important;
}

#room .uzr.north_str .btn-primary {
    border-radius:  0px 10px 0px 10px!important;
    box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 1px #000;
border: 1px solid #fff;
    background-image: url(https://up6.cc/2023/03/167935345317011.png);
    background-size: cover;
    color: #484848;
    font-size: 14px !important;
-webkit-text-fill-color: #000;
margin-left: 4px!important;
}
`);







   
    

$("style").last().append(`



    #d2 .uzr.root_str .fitimg.u-pic {
        height: 52px !important;
border-radius: 100px; !important; 
margin-bottom: 3px !important;
margin-top: 1px !important;
box-shadow:inset 0 0 0 rgba(0,0,0,.08),0 0 6px #000;
filter: hue-rotate(360deg);
box-shadow: 0 0 0px rgb(0 0 0), inset 0 0 4px rgb(0 0 0), 0 0 0 0px #000;
    }
    #d2 .uzr.root_str .u-msg.break {
          margin-left: 5px !important;
margin-left: 5px !important;
   -webkit-background-clip: text;
  -webkit-text-fill-color: #0000;
  background-image: linear-gradient(-225deg,#2b66bf 0%,#353535 29%,#2b66bf 67%,#353535 100%);
  padding: 0px !important;
  font-size: 100% !important;
	
background-size: cover; 
    }

  #d2 .uzr.root_str .itar_root  {
        width: 94px;
        height: 94px;
        margin-top: -40px;
        cursor: pointer;
        margin-left: -55px;
    }


    #d2 .uzr.d-flex.mm.root_str {
      
  border-radius: 0px 10px 0px 10px;
   
  

 background-image: url(https://up6.cc/2023/03/167949040842131.png);
background-size: 100%;
    }
  

#d2 .uzr.d-flex.mm.hmsg.root_str {
 background-image: url(https://up6.cc/2023/03/1679490319061.png);
background-size: 100%;
 border: 1px solid #fff;
box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;
  margin-bottom: 3px !important;
  margin-top: 2px !important;
        background-color: #16202a00 !important;
   border-radius:  0px 0 0px;
}

	#d2 .uzr.d-flex.mm.pmsgc.root_str {
 background-image: url(https://up6.cc/2023/03/16794899865771.png);
background-size: cover;
 border: 1px solid #fff;
 box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;
  margin-bottom: 3px !important;
  margin-top: 2px !important;
        background-color: #16202a00 !important;
}

#room .uzr.root_str .btn-primary {
    border-radius:  0px 10px 0px 10px!important;
    box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 1px #000;
border: 1px solid #fff;
    background-image: url(https://up6.cc/2023/03/1679490319061.png);
    background-size: cover;
    color: #484848;
    font-size: 14px !important;
-webkit-text-fill-color: #000;
margin-left: 4px!important;
}
`);







    
    


$("style").last().append(`


#d2 .uzr.mosos_str img.u-ico {
margin-left: 8px;

     
    }


#d2 .uzr.mosos_str .u-topic {
-webkit-text-fill-color: #0000;
  
}
    #d2 .uzr.mosos_str .fitimg.u-pic {
        height: 52px !important;
border-radius: 100px; !important; 
margin-bottom: 5px !important;
margin-top: 3px !important;
box-shadow:inset 0 0 0 rgba(0,0,0,.08),0 0 6px #000;
filter: hue-rotate(360deg);
box-shadow: 0 0 0px rgb(0 0 0), inset 0 0 4px rgb(0 0 0), 0 0 0 0px #000;
    }
    #d2 .uzr.mosos_str .u-msg.break {
          
margin-left: 8px !important;
   -webkit-background-clip: text;
  -webkit-text-fill-color: #0000;
  background-image: linear-gradient(-225deg,#000 0%,#0c9feb 29%,#353535 67%,#000 100%);
  padding: 0px !important;
  font-size: 100% !important;
	
background-size: cover; 
    }
    #d2 .uzr.d-flex.mm.mosos_str {
      
  border-radius: 0px 10px 0px 10px;
   
  

 background-image: url(https://up6.cc/2023/04/168039265958891.png);
background-size: 100%;
    }
    #d2 .uzr.mosos_str .itar_mosos  {
        width: 94px;
        height: 94px;
        margin-top: -40px;
        cursor: pointer;
        margin-left: -55px;
    }

#d2 .uzr.d-flex.mm.hmsg.mosos_str {
box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;
border: 1px solid #fff;
 background-image: url(https://up6.cc/2023/04/168039265958891.png);
background-size: 100%;
  margin-bottom: 3px !important;
  margin-top: 2px !important;
        background-color: #16202a00 !important;
   border-radius:  0px 0 0px;
}

	#d2 .uzr.d-flex.mm.pmsgc.mosos_str {
 box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;
border: 1px solid #fff;
 background-image: url(https://up6.cc/2023/04/168039265958891.png);
background-size: 100%;
  margin-bottom: 3px !important;
  margin-top: 2px !important;
        background-color: #16202a00 !important;
}

#room .uzr.mosos_str .btn-primary {
    border-radius:  0px 10px 0px 10px!important;
    box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 1px #000;
border: 1px solid #fff;
    background-image: url(https://up6.cc/2023/04/168039275981911.png);
    background-size: cover;
    color: #484848;
    font-size: 14px !important;
-webkit-text-fill-color: #000;
margin-left: 4px!important;
}
`);











    


$("style").last().append(`



    #d2 .uzr.aym_str .fitimg.u-pic {
        height: 52px !important;
border-radius: 100px; !important; 
margin-bottom: 3px !important;
margin-top: 1px !important;
box-shadow:inset 0 0 0 rgba(0,0,0,.08),0 0 6px #000;
filter: hue-rotate(360deg);
box-shadow: 0 0 0px rgb(0 0 0), inset 0 0 4px rgb(0 0 0), 0 0 0 0px #000;
    }
    #d2 .uzr.aym_str .u-msg.break {
          margin-left: 5px !important;
margin-left: 5px !important;
   -webkit-background-clip: text;
  -webkit-text-fill-color: #0000;
  background-image: linear-gradient(-225deg,#0018d0 0%,#262626 29%,#0014a8 67%,#000 100%);
  padding: 0px !important;
  font-size: 100% !important;
	
background-size: cover; 
    }




    #d2 .uzr.d-flex.mm.aym_str {
      
  border-radius: 0px 10px 0px 10px;
   
  

 background-image: url(https://up6.cc/2023/03/167975605725541.png);
background-size: 100%;
    }
  

#d2 .uzr.d-flex.mm.hmsg.aym_str {
 background-image: url(https://up6.cc/2023/03/16796648790441.png);
background-size: 100%;
 border: 1px solid #fff;
box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;
  margin-bottom: 3px !important;
  margin-top: 2px !important;
        background-color: #16202a00 !important;
   border-radius:  0px 0 0px;
}

	#d2 .uzr.d-flex.mm.pmsgc.aym_str {
 background-image: url(https://up6.cc/2023/03/16796648790441.png);
background-size: cover;
 border: 1px solid #fff;
 box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;
  margin-bottom: 3px !important;
  margin-top: 2px !important;
        background-color: #16202a00 !important;
}

#room .uzr.aym_str .btn-primary {
    border-radius:  0px 10px 0px 10px!important;
    box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 1px #000;
border: 1px solid #fff;
    background-image: url(https://up6.cc/2023/03/16796648790441.png);
    background-size: cover;
    color: #484848;
    font-size: 14px !important;
-webkit-text-fill-color: #000;
margin-left: 4px!important;
}
`);











   
    


$("style").last().append(`



    #d2 .uzr.saud_str .fitimg.u-pic {
        height: 52px !important;
border-radius: 100px; !important; 
margin-bottom: 3px !important;
margin-top: 1px !important;
box-shadow:inset 0 0 0 rgba(0,0,0,.08),0 0 6px #000;
filter: hue-rotate(360deg);
box-shadow: 0 0 0px rgb(0 0 0), inset 0 0 4px rgb(0 0 0), 0 0 0 0px #000;
    }
    #d2 .uzr.saud_str .u-msg.break {
          margin-left: 5px !important;
margin-left: 5px !important;
   -webkit-background-clip: text;
  -webkit-text-fill-color: #0000;
  background-image: linear-gradient(-225deg,#000 0%,#353535 29%,#474e54 67%,#000 100%);
  padding: 0px !important;
  font-size: 100% !important;
	
background-size: cover; 
    }




    #d2 .uzr.d-flex.mm.saud_str {
      
  border-radius: 0px 10px 0px 10px;
   
  

 background-image: url(https://up6.cc/2023/03/167935621776951.png);
background-size: 100%;
    }
  

#d2 .uzr.d-flex.mm.hmsg.saud_str {
 background-image: url(https://up6.cc/2023/03/167966577595051.png);
background-size: 100%;
 border: 1px solid #fff;
box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;
  margin-bottom: 3px !important;
  margin-top: 2px !important;
        background-color: #16202a00 !important;
   border-radius:  0px 0 0px;
}

	#d2 .uzr.d-flex.mm.pmsgc.saud_str {
 background-image: url(https://up6.cc/2023/03/167966577595051.png);
background-size: cover;
 border: 1px solid #fff;
 box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;
  margin-bottom: 3px !important;
  margin-top: 2px !important;
        background-color: #16202a00 !important;
}

#room .uzr.saud_str .btn-primary {
    border-radius:  0px 10px 0px 10px!important;
    box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 1px #000;
border: 1px solid #fff;
    background-image: url(https://up6.cc/2023/03/167966577595051.png);
    background-size: cover;
    color: #484848;
    font-size: 14px !important;
-webkit-text-fill-color: #000;
margin-left: 4px!important;
}
`);








    
    

$("style").last().append(`




#d2 .uzr.thkar_str .u-topic {
-webkit-text-fill-color: #0000;
  
}
    #d2 .uzr.thkar_str .fitimg.u-pic {
        height: 52px !important;
border-radius: 100px; !important; 
margin-bottom: 5px !important;
margin-top: 3px !important;
border:2px solid #a8a8a8;margin-top:3px;border-radius:100px;

box-shadow:inset 0 0 0 rgba(0,0,0,.08),0 0 4px #a8a8a8
    }
    #d2 .uzr.thkar_str .u-msg.break {
          margin-top: 2px !important;
margin-left: 6px !important;
   -webkit-background-clip: text;
  -webkit-text-fill-color: #0000;
  background-image: linear-gradient(-225deg,#ff8499 0%,#262626 29%,#ed536d 67%,#000 100%);
  padding: 0px !important;
  font-size: 100% !important;
	
background-size: cover; 
    }
    #d2 .uzr.d-flex.mm.thkar_str {
      
  border-radius: 0px 10px 0px 10px;
   
  

 background-image: url(https://up6.cc/2023/03/167986194172671.png);
background-size: 100%;
    }
    #d2 .uzr.thkar_str .itar_thkar  {
        width: 94px;
        height: 94px;
        margin-top: -40px;
        cursor: pointer;
        margin-left: -55px;
    }

#d2 .uzr.d-flex.mm.hmsg.thkar_str {
box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;
border: 1px solid #fff;
 background-image: url(https://up6.cc/2023/03/167986187521141.png);
background-size: 100%;
  margin-bottom: 3px !important;
  margin-top: 2px !important;
        background-color: #16202a00 !important;
   border-radius:  0px 0 0px;
}

	#d2 .uzr.d-flex.mm.pmsgc.thkar_str {
 box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;
border: 1px solid #fff;
 background-image: url(https://up6.cc/2023/03/16798620828591.png);
background-size: 100%;
  margin-bottom: 3px !important;
  margin-top: 2px !important;
        background-color: #16202a00 !important;
}

#d2 .uzr.thkar_str img.u-ico {

margin-left: 7px;
    
     

      
    }
#room .uzr.thkar_str .btn-primary {
margin-top: 1px !important;
    border-radius:  0px 10px 0px 10px!important;
    box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 1px #000;
border: 1px solid #fff;
    background-image: url(https://up6.cc/2023/03/167986194172671.png);
    background-size: cover;
    color: #484848;
    font-size: 14px !important;
-webkit-text-fill-color: #000;
margin-left: 4px!important;
}
`);


















$("style").last().append(`
#d2 .uzr.h9_str .u-topic {
-webkit-text-fill-color: #0000;
  
}


    #d2 .uzr.h9_str .fitimg.u-pic {
        height: 52px !important;
border-radius: 100px; !important; 
margin-bottom: 3px !important;
margin-top: 1px !important;
box-shadow:inset 0 0 0 rgba(0,0,0,.08),0 0 6px #000;
filter: hue-rotate(360deg);
box-shadow: 0 0 0px rgb(0 0 0), inset 0 0 4px rgb(0 0 0), 0 0 0 0px #000;
    }
    #d2 .uzr.h9_str .u-msg.break {
          margin-left: 5px !important;
margin-left: 5px !important;
   
  padding: 0px !important;
  font-size: 100% !important;
	
background-size: cover; 
    }




    #d2 .uzr.d-flex.mm.h9_str {
      
  border-radius: 0px 10px 0px 10px;
   
  

 background-image: url(https://up6.cc/2023/03/167969300840182.png);
background-size: 100%;
    }
  

#d2 .uzr.d-flex.mm.hmsg.h9_str {
 background-image: url(https://up6.cc/2023/03/167969300837021.png);
background-size: 100%;
 border: 1px solid #fff;
box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;
  margin-bottom: 3px !important;
  margin-top: 2px !important;
        background-color: #16202a00 !important;
   border-radius:  0px 0 0px;
}

	#d2 .uzr.d-flex.mm.pmsgc.h9_str {
 background-image: url(https://up6.cc/2023/03/167969300837021.png);
background-size: cover;
 border: 1px solid #fff;
 box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;
  margin-bottom: 3px !important;
  margin-top: 2px !important;
        background-color: #16202a00 !important;
}

#room .uzr.h9_str .btn-primary {
    border-radius:  0px 10px 0px 10px!important;
    box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 1px #000;
border: 1px solid #fff;
    background-image: url(https://up6.cc/2023/03/167969300837021.png);
    background-size: cover;
    color: #484848;
    font-size: 14px !important;
-webkit-text-fill-color: #000;
margin-left: 4px!important;
}
`);






$("style").last().append(`


    #d2 .uzr.pure_str .fitimg.u-pic {
        height: 52px !important;
border-radius: 100px; !important; 
margin-bottom: 5px !important;
margin-top: 3px !important;
border:1px solid #000;margin-top:3px;border-radius:100px;

box-shadow:inset 0 0 0 rgba(0,0,0,.08),0 0 3px #000
    }
    #d2 .uzr.pure_str .u-msg.break {
          margin-top: 3px !important;
margin-left: 5px !important;
  padding: 0px !important;
  font-size: 100% !important;
	
background-size: cover; 
    }
    #d2 .uzr.d-flex.mm.pure_str {
      
  border-radius: 0px 10px 0px 10px;
   
  


    }
    #d2 .uzr.pure_str .itar_pure  {
        width: 94px;
        height: 94px;
        margin-top: -40px;
        cursor: pointer;
        margin-left: -55px;
    }

#d2 .uzr.d-flex.mm.hmsg.pure_str {
box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;
border: 1px solid #fff;
 background-image: url(https://up6.cc/2023/03/167969426523781.png);
background-size: 100%;
  margin-bottom: 3px !important;
  margin-top: 2px !important;
        background-color: #16202a00 !important;
   border-radius:  0px 0 0px;
}

	#d2 .uzr.d-flex.mm.pmsgc.pure_str {
 box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;
border: 1px solid #fff;
 background-image: url(https://up6.cc/2023/03/167969426523781.png);
background-size: 100%;
  margin-bottom: 3px !important;
  margin-top: 2px !important;
        background-color: #16202a00 !important;
}

#d2 .uzr.pure_str img.u-ico {

margin-left: 3px;
     
  

      
    }
#room .uzr.pure_str .btn-primary {

    border-radius:  0px 10px 0px 10px!important;
    box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 1px #000;
border: 1px solid #fff;
    background-image: url(https://up6.cc/2023/03/167969426523781.png);
    background-size: cover;
    color: #484848;
    font-size: 14px !important;
-webkit-text-fill-color: #000;
margin-left: 4px!important;
}
`);








$("style").last().append(`



    #d2 .uzr.bar_str .fitimg.u-pic {
        height: 52px !important;
border-radius: 0px 10px 0px 10px !important; 
margin-bottom: 3px !important;
margin-top: 1px !important;
box-shadow:inset 0 0 0 rgba(0,0,0,.08),0 0 6px #000;
filter: hue-rotate(360deg);
box-shadow: 0 0 0px rgb(0 0 0), inset 0 0 4px rgb(0 0 0), 0 0 0 0px #000;
    }
    #d2 .uzr.bar_str .u-msg.break {
          margin-left: 5px !important;
margin-left: 5px !important;

  padding: 0px !important;
  font-size: 100% !important;
	
background-size: cover; 
    }




    #d2 .uzr.d-flex.mm.bar_str {
      
  border-radius: 0px 10px 0px 10px;
   
  

 background-image: url(https://up6.cc/2023/03/167994933653231.png);
background-size: 100%;
    }
  

#d2 .uzr.d-flex.mm.hmsg.bar_str {
 background-image: url(https://up6.cc/2023/03/167977483137541.png);
background-size: 100%;
 border: 1px solid #fff;
box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;
  margin-bottom: 3px !important;
  margin-top: 2px !important;
        background-color: #16202a00 !important;
   border-radius:  0px 10px 0px 10px;
}

	#d2 .uzr.d-flex.mm.pmsgc.bar_str {
 background-image: url(https://up6.cc/2023/03/167977483137541.png;
background-size: cover;
 border: 1px solid #fff;
 box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;
  margin-bottom: 3px !important;
  margin-top: 2px !important;
        background-color: #16202a00 !important;
}

#room .uzr.bar_str .btn-primary {
    border-radius:  0px 10px 0px 10px!important;
    box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 1px #000;
border: 1px solid #fff;
    background-image: url(https://up6.cc/2023/03/167977483137541.png);
    background-size: cover;
    color: #484848;
    font-size: 14px !important;
-webkit-text-fill-color: #000;
margin-left: 4px!important;
}
`);












$("style").last().append(`

#d2 .uzr.t3br_str .u-topic {
-webkit-text-fill-color: #0000;
  
}
    #d2 .uzr.t3br_str .fitimg.u-pic {
        height: 52px !important;
border-radius: 100px; !important; 
margin-bottom: 5px !important;
margin-top: 3px !important;
border:2px solid #a8a8a8;margin-top:3px;border-radius:100px;

box-shadow:inset 0 0 0 rgba(0,0,0,.08),0 0 4px #a8a8a8
    }
    #d2 .uzr.t3br_str .u-msg.break {
          margin-top: 3px !important;
margin-left: 7px !important;
   -webkit-background-clip: text;
  -webkit-text-fill-color: #0000;
  background-image: linear-gradient(-225deg,#d8455f 0%,#262626 29%,#ed536d 67%,#000 100%);
  padding: 0px !important;
  font-size: 100% !important;
	
background-size: cover; 
    }
    #d2 .uzr.d-flex.mm.t3br_str {
      
  border-radius: 0px 10px 0px 10px;
   
  

 background-image: url(https://up6.cc/2023/03/16798593804221.png);
background-size: 100%;
    }
    #d2 .uzr.t3br_str .itar_t3br  {
        width: 94px;
        height: 94px;
        margin-top: -40px;
        cursor: pointer;
        margin-left: -55px;
    }

#d2 .uzr.d-flex.mm.hmsg.t3br_str {
box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;
border: 1px solid #fff;
 background-image: url(https://up6.cc/2023/03/167985926126981.png);
background-size: 100%;
  margin-bottom: 3px !important;
  margin-top: 2px !important;
        background-color: #16202a00 !important;
   border-radius:  0px 0 0px;
}

	#d2 .uzr.d-flex.mm.pmsgc.t3br_str {
 box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;
border: 1px solid #fff;
 background-image: url(https://up6.cc/2023/03/167985926126981.png);
background-size: 100%;
  margin-bottom: 3px !important;
  margin-top: 2px !important;
        background-color: #16202a00 !important;
}

#d2 .uzr.t3br_str img.u-ico {

margin-left: 3px;
     box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 1px #000;
  border-radius:  0px 10px 0px 10px!important;   

      
    }
#room .uzr.t3br_str .btn-primary {
margin-top: 3px !important;
    border-radius:  0px 10px 0px 10px!important;
    box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 1px #000;
border: 1px solid #fff;
    background-image: url(https://up6.cc/2023/03/167985926126981.png);
    background-size: cover;
    color: #484848;
    font-size: 14px !important;
-webkit-text-fill-color: #000;
margin-left: 4px!important;
}
`);










$("style").last().append(`




#d2 .uzr.dl3_str .u-topic {
-webkit-text-fill-color: #0000;
  
}
    #d2 .uzr.dl3_str .fitimg.u-pic {
        height: 52px !important;
border-radius: 100px; !important; 
margin-bottom: 5px !important;
margin-top: 3px !important;
border:2px solid #a8a8a8;margin-top:3px;border-radius:100px;

box-shadow:inset 0 0 0 rgba(0,0,0,.08),0 0 4px #a8a8a8
    }
    #d2 .uzr.dl3_str .u-msg.break {
          margin-top: 2px !important;
margin-left: 6px !important;
 
  padding: 0px !important;
  font-size: 100% !important;
	
    }
    #d2 .uzr.d-flex.mm.dl3_str {
      
  border-radius: 0px 10px 0px 10px;
   
  

 background-image: url(https://up6.cc/2023/04/168048011190792.png);
background-size: 100%;
    }
    #d2 .uzr.dl3_str .itar_dl3  {
        width: 94px;
        height: 94px;
        margin-top: -40px;
        cursor: pointer;
        margin-left: -55px;
    }

#d2 .uzr.d-flex.mm.hmsg.dl3_str {
box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;
border: 1px solid #fff;
 background-image: url(https://up6.cc/2023/04/168048017234451.png);
background-size: 100%;
  margin-bottom: 3px !important;
  margin-top: 2px !important;
        background-color: #16202a00 !important;
   border-radius:  0px 0 0px;
}

	#d2 .uzr.d-flex.mm.pmsgc.dl3_str {
 box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;
border: 1px solid #fff;
 background-image: url(https://up6.cc/2023/04/168048017234451.png);
background-size: 100%;
  margin-bottom: 3px !important;
  margin-top: 2px !important;
        background-color: #16202a00 !important;
}

#d2 .uzr.dl3_str img.u-ico {

margin-left: 7px;
    
     

      
    }
#room .uzr.dl3_str .btn-primary {
margin-top: 1px !important;
    border-radius:  0px 10px 0px 10px!important;
    box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 1px #000;
border: 1px solid #fff;
    background-image: url(https://up6.cc/2023/04/168048011188671.png);
    background-size: cover;
    color: #484848;
    font-size: 14px !important;
-webkit-text-fill-color: #000;
margin-left: 4px!important;
}
`);


$("style").last().append(`

#d2 .uzr.gshim_str .u-topic {
-webkit-text-fill-color: #0000;
  
}
    #d2 .uzr.gshim_str .fitimg.u-pic {
        height: 52px !important;
border-radius: 100px; !important; 
margin-bottom: 5px !important;
margin-top: 3px !important;
box-shadow:inset 0 0 0 rgba(0,0,0,.08),0 0 6px #000;
filter: hue-rotate(360deg);
box-shadow: 0 0 0px rgb(0 0 0), inset 0 0 4px rgb(0 0 0), 0 0 0 0px #000;
    }
    #d2 .uzr.gshim_str .u-msg.break {
          
margin-left: 15px !important;
   -webkit-background-clip: text;
  -webkit-text-fill-color: #0000;
  background-image: linear-gradient(-225deg,#000 0%,#353535 29%,#f00 67%,#000 100%);
  padding: 0px !important;
  font-size: 100% !important;
	
background-size: cover; 
    }
    #d2 .uzr.d-flex.mm.gshim_str {
      
  border-radius: 0px 10px 0px 10px;
   
  
margin-bottom: 4px !important;
  margin-top: 2px !important;
 background-image: url(https://up6.cc/2023/04/168174421493822.png);
background-size: 100%;
    }
    #d2 .uzr.gshim_str .itar_gshim  {
        width: 94px;
        height: 94px;
        margin-top: -40px;
        cursor: pointer;
        margin-left: -55px;
    }

#d2 .uzr.d-flex.mm.hmsg.gshim_str {
box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;
border: 1px solid #fff;
 background-image: url(https://up6.cc/2023/04/16817442149121.png);
background-size: 100%;
  margin-bottom: 6px !important;
  margin-top: 2px !important;
        background-color: #16202a00 !important;
   border-radius:  0px 0 0px;
}

	#d2 .uzr.d-flex.mm.pmsgc.gshim_str {
 box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;
border: 1px solid #fff;
 background-image: url(https://up6.cc/2023/04/16817442149121.png);
background-size: 100%;
  margin-bottom: 3px !important;
  margin-top: 2px !important;
        background-color: #16202a00 !important;
}

#d2 .uzr.gshim_str img.u-ico {
margin-left: 3px;
    

      
    }
#room .uzr.gshim_str .btn-primary {
    border-radius:  0px 10px 0px 10px!important;
    box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 1px #000;
border: 1px solid #fff;
    background-image: url(https://up6.cc/2023/04/16817442149121.png);
    background-size: cover;
    color: #484848;
    font-size: 14px !important;
-webkit-text-fill-color: #000;
margin-left: 4px!important;
}
`);







