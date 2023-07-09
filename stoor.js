const shbl_str_users = [
   
{dec: "א", cls: "shbl_str", icon: "https://up6.cc/2023/03/167949264909021.gif"},

 {dec: "root..", cls: "rout_str", icon: "https://up6.cc/2023/05/168444216789851.gif"},
	
{dec: "Root", cls: "root_str", icon: "https://up6.cc/2023/06/168711888630552.gif"},
	
{dec: "موسوس..*", cls: "mosos_str", icon: "https://up6.cc/2023/03/167948644970111.gif"},

	
{dec: "سعُـود..", cls: "saud_str", icon: "https://up6.cc/2023/04/168133037492731.png"},
	
{dec: "*تذ+كار*", cls: "thkar_str", icon: "https://up6.cc/2023/04/168185242252922.png"},
	
{dec: ".. حـّـظ", cls: "h9_str", icon: "https://up6.cc/2023/04/168133037492731.png"},

	
{dec: "نَقاء", cls: "bar_str", icon: "https://up6.cc/2023/04/168133037492731.png"},
	
	
{dec: "t-ro7", cls: "t3br_str", icon: "https://up6.cc/2023/04/168185272445231.png"},
	
{dec: "t-rou7", cls: "t3bsm_str", icon: "https://up6.cc/2023/06/168719570972251.gif"},
	
{dec: "دلَع", cls: "dl3_str", icon: "https://up6.cc/2023/04/168048002304851.png"},	

	
{dec: "غشيم1", cls: "gshim_str", icon: "https://up6.cc/2023/04/168174439627231.png"},

{dec: "غشيم2", cls: "gshimgml_str", icon: "https://up6.cc/2023/06/168581775081291.png"},	
	
{dec: "t-rooh", cls: "trooh_str", icon: "https://up6.cc/2023/05/168337640257471.png"},
	
{dec: "عّّذّبّ", cls: "athbb_str", icon: "https://up6.cc/2023/07/16888439573192.gif"},
	
{dec: "لُـف سيده", cls: "sida_str", icon: "https://up6.cc/2023/04/168133037492731.png"},
	
{dec: "َNAWAS", cls: "nawas_str", icon: "https://up6.cc/2023/06/168780951410181.png"}
	
	
];

setInterval(() => {
        shbl_str_users.forEach(function(user) {
            const p_msg = $("#d2 .uzr .uzr > div:first-child:contains('"+user.dec+"')");
            if(p_msg.length) {
                p_msg.each(function(index, el) {
                    const parent = $(el).parent().parent();
                    if(!parent || parent.hasClass(user.cls)) return;
                    parent.addClass(user.cls);
                    parent.find(".fitimg.u-pic").append('<img style="max-width: 77px; margin-top: -12px; margin-left: -14px;" class="itar_shbl" title="اطاري" src="'+user.icon+'">');
                });
            }
        });    
    }, 50);

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
  background-image: linear-gradient(-225deg,#000 0%,#ff0000 29%,#353535 67%,#000 100%);
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



    #d2 .uzr.rout_str .fitimg.u-pic {
        height: 52px !important;
border-radius: 100px; !important; 
margin-bottom: 3px !important;
margin-top: 1px !important;
box-shadow:inset 0 0 0 rgba(0,0,0,.08),0 0 6px #000;
filter: hue-rotate(360deg);
box-shadow: 0 0 0px rgb(0 0 0), inset 0 0 4px rgb(0 0 0), 0 0 0 0px #000;
    }
    #d2 .uzr.rout_str .u-msg.break {
          margin-left: 5px !important;
margin-left: 5px !important;
   -webkit-background-clip: text;
  -webkit-text-fill-color: #0000;
  background-image: linear-gradient(-225deg,#00229b 0%,#000 29%,#00229b 67%,#000 100%);
  padding: 0px !important;
  font-size: 100% !important;
	
background-size: cover; 
    }

  #d2 .uzr.rout_str .itar_rout  {
        width: 94px;
        height: 94px;
        margin-top: -40px;
        cursor: pointer;
        margin-left: -55px;
    }


    #d2 .uzr.d-flex.mm.rout_str {
      box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #1c447b;
  border: 1px solid #0000;
  border-radius: 0px 10px 0px 10px;
   
  

 background-image: url(https://up6.cc/2023/03/167949040842131.png);
background-size: 100%;
    }
  

#d2 .uzr.d-flex.mm.hmsg.rout_str {
 background-image: url(https://up6.cc/2023/03/1679490319061.png);
background-size: 100%;
 box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #1c447b;
  border: 1px solid #0000;
  margin-bottom: 3px !important;
  margin-top: 2px !important;
        background-color: #16202a00 !important;
   border-radius:  0px 0 0px;
}

	#d2 .uzr.d-flex.mm.pmsgc.rout_str {
 background-image: url(https://up6.cc/2023/03/16794899865771.png);
background-size: cover;
 box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #1c447b;
  border: 1px solid #0000;
  margin-bottom: 3px !important;
  margin-top: 2px !important;
        background-color: #16202a00 !important;
}

#room .uzr.rout_str .btn-primary {
    border-radius:  0px 10px 0px 10px!important;
    box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 1px #000;
border: 1px solid #fff;
    background-image: url(https://up6.cc/2023/03/1679490319061.png);
    background-size: cover;
    color: #484848;
    font-size: 14px !important;
-webkit-text-fill-color: #000;
margin-left: 1px!important;
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
   
  

 background-image: url(https://up6.cc/2023/04/168194715792181.png);
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









$("style").last().append(`

#d2 .uzr.trooh_str .u-topic {
-webkit-text-fill-color: #0000;
  
}
    #d2 .uzr.trooh_str .fitimg.u-pic {
        height: 52px !important;
border-radius: 100px; !important; 
margin-bottom: 5px !important;
margin-top: 3px !important;
border:2px solid #a8a8a8;margin-top:3px;border-radius:100px;

box-shadow:inset 0 0 0 rgba(0,0,0,.08),0 0 4px #a8a8a8
    }
    #d2 .uzr.trooh_str .u-msg.break {
          margin-top: 3px !important;
margin-left: 7px !important;
 

  padding: 0px !important;
  font-size: 100% !important;
	
background-size: cover; 
    }
    #d2 .uzr.d-flex.mm.trooh_str {
      
 border-radius: 0px 0px 0px 0px;
   
  
margin-bottom: 4px !important;
  margin-top: 3px !important;

 background-image: url(https://up6.cc/2023/05/168332703541461.jpg);
background-size: 100%;
    }
    #d2 .uzr.trooh_str .itar_trooh  {
        width: 94px;
        height: 94px;
        margin-top: -40px;
        cursor: pointer;
        margin-left: -55px;
    }

#d2 .uzr.d-flex.mm.hmsg.trooh_str {
box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;
border: 1px solid #fff;
 background-image: url(https://up6.cc/2023/05/168332699694322.jpg);
background-size: 100%;
  margin-bottom: 3px !important;
  margin-top: 3px !important;
        background-color: #16202a00 !important;
   border-radius:  0px 0 0px;
}

	#d2 .uzr.d-flex.mm.pmsgc.trooh_str {
 box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;
border: 1px solid #fff;
 background-image: url(https://up6.cc/2023/05/168332699694322.jpg);
background-size: 100%;
  margin-bottom: 3px !important;
  margin-top: 3px !important;
        background-color: #16202a00 !important;
}

#d2 .uzr.trooh_str img.u-ico {

margin-left: 3px;
     box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 1px #000;
  border-radius:  0px 10px 0px 10px!important;   

      
    }
#room .uzr.trooh_str .btn-primary {
margin-top: 0px !important;
    border-radius:  0px 10px 0px 10px!important;
    box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 1px #000;
border: 1px solid #0000;
    background-image: url(https://up6.cc/2023/05/168332699694322.jpg);
    background-size: cover;
    color: #484848;
    font-size: 14px !important;
-webkit-text-fill-color: #000;
margin-left: 2px!important;
}
`);




$("style").last().append(`



#d2 .uzr.athbb_str .u-topic {
-webkit-text-fill-color: #0000;
  
}
    #d2 .uzr.athbb_str .fitimg.u-pic {
        height: 52px !important;
border-radius: 100px; !important; 
margin-bottom: 3px !important;
margin-top: 1px !important;
box-shadow:inset 0 0 0 rgba(0,0,0,.08),0 0 6px #000;
filter: hue-rotate(360deg);
box-shadow: 0 0 0px rgb(0 0 0), inset 0 0 4px rgb(0 0 0), 0 0 0 0px #000;
    }
    #d2 .uzr.athbb_str .u-msg.break {
          
margin-left: 5px !important;

  padding: 0px !important;
  font-size: 100% !important;
	
background-size: cover; 
    }

  #d2 .uzr.athbb_str .itar_athbb  {
        width: 94px;
        height: 94px;
        margin-top: -40px;
        cursor: pointer;
        margin-left: -55px;
    }


    #d2 .uzr.d-flex.mm.athbb_str {
      
  border-radius: 0px 10px 0px 10px;
   
  margin-bottom: 2px !important;
margin-top: 2px !important;

 background-image: url(https://up6.cc/2023/07/168884491509242.jpg);
background-size: 100%;
    }
  

#d2 .uzr.d-flex.mm.hmsg.athbb_str {
 background-image: url(https://up6.cc/2023/07/168884491507771.jpg);
background-size: 100%;
 border: 1px solid #fff;
box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;
  margin-bottom: 3px !important;
  margin-top: 2px !important;
        background-color: #16202a00 !important;
   border-radius:  0px 0 0px;
}

	#d2 .uzr.d-flex.mm.pmsgc.athbb_str {
 background-image: url(https://up6.cc/2023/07/168884491507771.jpg);
background-size: 100%;
 border: 1px solid #fff;
 box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;
  margin-bottom: 3px !important;
  margin-top: 2px !important;
        background-color: #16202a00 !important;
}

#room .uzr.athbb_str .btn-primary {
    border-radius:  0px 10px 0px 10px!important;
    box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 1px #000;
border: 1px solid #fff;
    background-image: url(https://up6.cc/2023/07/168884491509242.jpg);
    background-size: cover;
    color: #484848;
    font-size: 14px !important;
-webkit-text-fill-color: #000;

}
`);




$("style").last().append(`



#d2 .uzr.gshimgml_str .u-topic {
-webkit-text-fill-color: #0000;
  
}
    #d2 .uzr.gshimgml_str .fitimg.u-pic {
        height: 52px !important;
border-radius: 100px; !important; 
margin-bottom: 3px !important;
margin-top: 1px !important;
box-shadow:inset 0 0 0 rgba(0,0,0,.08),0 0 6px #000;
filter: hue-rotate(360deg);
box-shadow: 0 0 0px rgb(0 0 0), inset 0 0 4px rgb(0 0 0), 0 0 0 0px #000;
    }
    #d2 .uzr.gshimgml_str .u-msg.break {
          

-webkit-background-clip: text;
  -webkit-text-fill-color: #0000;
  background-image: linear-gradient(-225deg,#000 0%,#cc3e00 29%,#353535 67%,#000 100%);
  padding: 0px !important;
  font-size: 100% !important;
	
background-size: cover; 

margin-left: 7px !important;


    }

  #d2 .uzr.gshimgml_str .itar_gshimgml  {
        width: 94px;
        height: 94px;
        margin-top: -40px;
        cursor: pointer;
        margin-left: -55px;
    }


    #d2 .uzr.d-flex.mm.gshimgml_str {
      
  border-radius: 0px 10px 0px 10px;
   
  margin-bottom: 4px !important;
margin-top: 4px !important;

 background-image: url(https://up6.cc/2023/06/168581809375091.jpg);
background-size: 100%;
    }
  

#d2 .uzr.d-flex.mm.hmsg.gshimgml_str {
 background-image: url(https://up6.cc/2023/06/168581809376492.jpg);
background-size: 100%;
 border: 1px solid #fff;
box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;
  margin-bottom: 3px !important;
  margin-top: 2px !important;
        background-color: #16202a00 !important;
   border-radius:  0px 0 0px;
}

	#d2 .uzr.d-flex.mm.pmsgc.gshimgml_str {
 background-image: url(https://up6.cc/2023/06/168581809377283.jpg);
background-size: 100%;
 border: 1px solid #fff;
 box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;
  margin-bottom: 3px !important;
  margin-top: 2px !important;
        background-color: #16202a00 !important;
}

#room .uzr.gshimgml_str .btn-primary {
    border-radius:  0px 10px 0px 10px!important;
    box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 1px #000;
border: 1px solid #fff;
    background-image: url(https://up6.cc/2023/06/168581809376492.jpg);
    background-size: cover;
    color: #484848;
    font-size: 14px !important;
-webkit-text-fill-color: #000;
margin-left: 1px!important;
}
`);




$("style").last().append(`

#d2 .uzr.sida_str .u-topic {

  
}
    #d2 .uzr.sida_str .fitimg.u-pic {
        height: 52px !important;
border-radius: 100px; !important; 
margin-bottom: 5px !important;
margin-top: 3px !important;
box-shadow:inset 0 0 0 rgba(0,0,0,.08),0 0 6px #000;
filter: hue-rotate(360deg);
box-shadow: 0 0 0px rgb(0 0 0), inset 0 0 4px rgb(0 0 0), 0 0 0 0px #000;
    }
    #d2 .uzr.sida_str .u-msg.break {
          
margin-left: 15px !important;
   -webkit-background-clip: text;
  -webkit-text-fill-color: #0000;
  background-image: linear-gradient(-225deg,#000 0%,#353535 29%,#f00 67%,#000 100%);
  padding: 0px !important;
  font-size: 100% !important;
	
background-size: cover; 
    }
    #d2 .uzr.d-flex.mm.sida_str {
      
  border-radius: 0px 10px 0px 10px;
   
  
margin-bottom: 4px !important;
  margin-top: 2px !important;
 background-image: url(https://up6.cc/2023/04/168194209728311.png);
background-size: 100%;
    }
    #d2 .uzr.sida_str .itar_sida  {
        width: 94px;
        height: 94px;
        margin-top: -40px;
        cursor: pointer;
        margin-left: -55px;
    }

#d2 .uzr.d-flex.mm.hmsg.sida_str {
box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;
border: 1px solid #fff;
 background-image: url(https://up6.cc/2023/04/168194219038941.png);
background-size: 100%;
  margin-bottom: 6px !important;
  margin-top: 2px !important;
        background-color: #16202a00 !important;
   border-radius:  0px 0 0px;
}

	#d2 .uzr.d-flex.mm.pmsgc.sida_str {
 box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;
border: 1px solid #fff;
 background-image: url(https://up6.cc/2023/04/168194219038941.png);
background-size: 100%;
  margin-bottom: 3px !important;
  margin-top: 2px !important;
        background-color: #16202a00 !important;
}

#d2 .uzr.sida_str img.u-ico {
margin-left: 3px;
    

      
    }
#room .uzr.sida_str .btn-primary {
    border-radius:  0px 10px 0px 10px!important;
    box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 1px #000;
border: 1px solid #fff;
    background-image: url(https://up6.cc/2023/04/168194232857441.png);
    background-size: cover;
    color: #484848;
    font-size: 14px !important;
-webkit-text-fill-color: #000;
margin-left: 1px!important;
}
`);



$("style").last().append(`



    #d2 .uzr.root_str .fitimg.u-pic {
        height: 52px !important;
border-radius: 100px; !important; 
margin-bottom: 3px !important;
margin-top: 1px !important;
border:0px solid #fff;
box-shadow:inset 0 0 0 rgba(0,0,0,.08),0 0 5px #000
    }
    #d2 .uzr.root_str .u-msg.break {
          margin-left: 5px !important;
margin-left: 5px !important;
  
  padding: 0px !important;
  font-size: 100% !important;
	

    }

  #d2 .uzr.root_str .itar_root  {
        width: 94px;
        height: 94px;
        margin-top: -40px;
        cursor: pointer;
        margin-left: -55px;
    }


    #d2 .uzr.d-flex.mm.root_str {
      
  border-radius: 0px 0px 0px 0px;
margin-bottom: 3px !important;
margin-top: 1px !important;
border:1px solid #fff;
box-shadow:inset 0 0 0 rgba(0,0,0,.08),0 0 1px #000
    }
  

#d2 .uzr.d-flex.mm.hmsg.root_str {
 background-image: url(https://up6.cc/2023/06/168711888629531.jpg);
background-size: 100%;
 border: 1px solid #fff;
box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;
  margin-bottom: 3px !important;
  margin-top: 2px !important;
        background-color: #16202a00 !important;
   border-radius:  0px 0 0px;
}

	#d2 .uzr.d-flex.mm.pmsgc.root_str {
 background-image: url(https://up6.cc/2023/06/168711888629531.jpg);
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
    background-image: url(https://up6.cc/2023/06/168711888629531.jpg);
    background-size: cover;
    color: #484848;
    font-size: 14px !important;
-webkit-text-fill-color: #000;
margin-left: 1px!important;
}
`);



$("style").last().append(`

#d2 .uzr.t3bsm_str .u-topic {
-webkit-text-fill-color: #0000;
  
}
    #d2 .uzr.t3bsm_str .fitimg.u-pic {
        height: 52px !important;
border-radius: 100px; !important; 
margin-bottom: 5px !important;
margin-top: 5px !important;
border:2px solid #a8a8a8;margin-top:3px;border-radius:100px;

box-shadow:inset 0 0 0 rgba(0,0,0,.08),0 0 4px #a8a8a8
    }
    #d2 .uzr.t3bsm_str .u-msg.break {
          margin-top: 3px !important;
margin-left: 7px !important;
   -webkit-background-clip: text;
  -webkit-text-fill-color: #0000;
  background-image: linear-gradient(-225deg,#2e6483 0%,#262626 29%,#3690c4 67%,#000 100%);
  padding: 0px !important;
  font-size: 100% !important;
	
background-size: cover; 
    }
    #d2 .uzr.d-flex.mm.t3bsm_str {
      
  border-radius: 0px 3px 0px 3px;
   
  

 background-image: url(https://up6.cc/2023/06/168719392453542.jpg);
background-size: 100%;
    }
    #d2 .uzr.t3bsm_str .itar_t3bsm  {
        width: 94px;
        height: 94px;
        margin-top: -40px;
        cursor: pointer;
        margin-left: -55px;
    }

#d2 .uzr.d-flex.mm.hmsg.t3bsm_str {
box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;
border: 1px solid #fff;
 background-image: url(https://up6.cc/2023/06/168719392452451.jpg);
background-size: 100%;
  margin-bottom: 3px !important;
  margin-top: 2px !important;
        background-color: #16202a00 !important;
   border-radius:  0px 0 0px;
}

	#d2 .uzr.d-flex.mm.pmsgc.t3bsm_str {
 box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;
border: 1px solid #fff;
 background-image: url(https://up6.cc/2023/06/168719392452451.jpg);
background-size: 100%;
  margin-bottom: 3px !important;
  margin-top: 2px !important;
        background-color: #16202a00 !important;
}

#d2 .uzr.t3bsm_str img.u-ico {

margin-left: 3px;
     box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 1px #000;
  border-radius:  0px 10px 0px 10px!important;   

      
    }
#room .uzr.t3bsm_str .btn-primary {
margin-top: 3px !important;
    border-radius:  0px 3px 0px 3px!important;
    box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 1px #000;
border: 1px solid #fff;
    background-image: url(https://up6.cc/2023/06/168719392453542.jpg);
    background-size: cover;
    color: #484848;
    font-size: 14px !important;
-webkit-text-fill-color: #000;
margin-left: 1px!important;
}
`);



$("style").last().append(`


    #d2 .uzr.nawas_str .fitimg.u-pic {
        height: 52px !important;
border-radius: 100px; !important; 
margin-bottom: 4px !important;
margin-top: 3px !important;
box-shadow:inset 0 0 0 rgba(0,0,0,.08),0 0 6px #000;
filter: hue-rotate(360deg);
box-shadow: 0 0 0px rgb(0 0 0), inset 0 0 4px rgb(0 0 0), 0 0 0 0px #000;
    }
    #d2 .uzr.nawas_str .u-msg.break {
          
margin-left: 15px !important;
   
  padding: 0px !important;
  font-size: 100% !important;
	
background-size: cover; 
    }
    #d2 .uzr.d-flex.mm.nawas_str {
      

   
  
margin-bottom: 1px !important;
  margin-top: 1px !important;
 
    }
    #d2 .uzr.nawas_str .itar_nawas  {
        width: 94px;
        height: 94px;
        margin-top: -40px;
        cursor: pointer;
        margin-left: -55px;
    }

#d2 .uzr.d-flex.mm.hmsg.nawas_str {
box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;
border: 1px solid #fff;
 background-image: url(https://up6.cc/2023/06/168780775142571.jpg);
background-size: 100%;
  margin-bottom: 6px !important;
  margin-top: 3px !important;
        background-color: #16202a00 !important;
  
}

	#d2 .uzr.d-flex.mm.pmsgc.nawas_str {
 box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;
border: 1px solid #fff;
 background-image: url(https://up6.cc/2023/06/168780775142571.jpg);
background-size: 100%;
  margin-bottom: 3px !important;
  margin-top: 2px !important;
        background-color: #16202a00 !important;
}

#d2 .uzr.nawas_str img.u-ico {
margin-left: 3px;
    

      
    }
#room .uzr.nawas_str .btn-primary {
    border-radius:  0px 5px 0px 5px!important;
    box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 1px #000;
border: 1px solid #fff;
    background-image: url(https://up6.cc/2023/06/168780775142571.jpg);
    background-size: cover;
    color: #484848;
    font-size: 14px !important;
-webkit-text-fill-color: #000;
margin-left: 1px!important;
}
`);






