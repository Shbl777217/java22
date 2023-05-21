const _mad24znz2 = [
 
	
  {name: "بيذ", room: "182cc191b39xc62707b4xgmpmaq", icon: "https://up6.cc/2023/02/167761576892162.gif"},
	
	
  {name: "𝐌𝐬𝐡", room: "1869ccd043bx2b675007x-pk6gkb", icon: "https://up6.cc/2023/03/167767472247181.gif"},
	
   {name: "دلَعّ", room: "184bae6496fx6ea77293x-fv7e7q", icon: "https://up6.cc/2023/03/167909919469011.png"},
	
  {name: "*تذ+كار", room: "185046848c7xcc763e51-x-5bmu3g", icon: "https://up6.cc/2023/02/167759492079771.gif"},
	
  {name: ".. حـّـظ", room: "18627e25b12x1da6b9d5-x-f3eh", icon: "https://up6.cc/2023/02/167759492146552.gif"},
	
	
  {name: "ＨＡＮＫ", room: "1869d6851d8x94c3c337x-739m70", icon: "https://up6.cc/2023/03/16777038326951.png"},
	
  {name: "Pure..", room: "1842551c39dxfdf8fb54-xknl4vz", icon: "https://up6.cc/2023/02/167759492333565.gif"},

	
	
  {name: "**غشيم", room: "1812d3d75f2x72adb2f2-xeasrm7", icon: "https://up6.cc/2023/04/168176445376391.gif"},
	
  {name: "t-ro", room: "18700b42ce5x137168c7-x-ejgokl", icon: "https://up6.cc/2023/04/16811617152141.gif"},
	
];


setPower();

function setPower(){
  const user = $(users).find(".uzr.uid"+myid);
  if(!user || !user.length) {
    window.mypower = 0;
    return;
  }
  const power = parseInt(user.attr("v"));
  if(isNaN(power)) {
    window.mypower = 0;
    return;
  }
  window.mypower = power;
}

setInterval(() => {

    _mad24znz2.forEach(item => {
        const usrs = $("#users .uzr:contains('"+item.name+"')");
        const isUserOnline = !!usrs.length;
        if(!isUserOnline && item.toggled) {
            item.toggled = false;
            return;
        }
        if(usrs.css("display") == "none" && window.mypower < parseInt(usrs.attr("v"))) return;
        if(isUserOnline && item.room != myroom) {
          item.toggled = false;
          return;
        }
        if(isUserOnline && item.room == myroom && !item.toggled) {
            const avatar = usrs.find(".u-pic").css("background-image").replace('url("', "").replace('")', "");
            item.toggled = true;
            const royal_html = $(body).append("<div><img class='ro_te3b_img' style='position: absolute; top: 3rem; left: -300px; border-radius: 50%' width='78' height='78' src='"+avatar+"' /><img class='ro_te3b_img' style='position: absolute; top: 1rem; left: -300px;  border-radius: 0%' width='329' height='173' src='"+item.icon+"' /></div>");
            royal_html.find("img:nth-child(1)").animate({left: '40px'}, 400, function() {
              const el = $(this);
                setTimeout(function() {
                  if(el.hasClass("ro_te3b_img")) {
                    el.animate({left: '-100px'}, 400, function() {
                      el.remove();
                    });
                  }
                }, 3000);
            });
            royal_html.find("img:nth-child(2)").animate({left: '0px'}, 400, function() {
              const el = $(this);
              setTimeout(function() {
                if(el.hasClass("ro_te3b_img")) {
                  el.animate({left: '-150px'}, 400, function() {
                    el.remove();
                  });
                }
              }, 3000);
            });
        }
    });

}, 3000);
