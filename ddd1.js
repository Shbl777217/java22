const te3b_story_users = [
    {dec: "**1", hash: "70"},
	{dec: "**2", hash: "94"},
	{dec: ".. حـّـظ", hash: "63"},
	{dec: "موسوس..*", hash: "48"},
	{dec: "ŤtĤ", hash: "43"},
	{dec: "NoOoRtTtH", hash: "43"},
	{dec: "𝐀𝐖𝐇𝐀𝐌", hash: "84"},
	{dec: "سعُـود.", hash: "91"},
	{dec: "تَباهِي", hash: "91"},
	{dec: "t-ro7.", hash: "100"},
	{dec: "root..", hash: "17"},
	{dec: "Root..", hash: "17"},
	{dec: "أبـنْ تـ عـٰز", hash: "80"},
	{dec: "₩ǍĔĐ", hash: "93"},
	{dec: "**غشيم.", hash: "63"},
	{dec: "م̀́ـ،ـازن", hash: "75"},
	{dec: "َM", hash: "53"},
	{dec: "نَقاء", hash: "29"},
	{dec: "شَايلّ", hash: "20"},
	{dec: "دلَعّ", hash: "25"},
	{dec: "غــرور انسَـانـه", hash: "68"},
    {dec: "א", hash: "68"},
	{dec: "غَـزَل", hash: "91"},
	{dec: "شـهًمٰ : إلـعتيبــيً", hash: "91"},
	{dec: "𝐁𝐎𝐎", hash: "80"},
	{dec: "َNAWAS", hash: "86"},
	{dec: "*تذ+كار*", hash: "65"},
	{dec: "𝘼𝙢𝙞𝙧", hash: "56"},
	{dec: "ＯＶＡ..", hash: "93"},
	{dec: "عَصفر", hash: "48"},
	{dec: "رأفت", hash: "91"},
	{dec: "غــَرام", hash: "55"},
	{dec: "ُrose", hash: "55"},
	{dec: "Bsma ¤", hash: "84"},
	{dec: "New1", hash: "71"},
	{dec: "AUFDERZE", hash: "00"},
	{dec: "يـَـانْ", hash: "90"}

];

!function(n){"use strict";function d(n,t){var r=(65535&n)+(65535&t);return(n>>16)+(t>>16)+(r>>16)<<16|65535&r}function f(n,t,r,e,o,u){return d((u=d(d(t,n),d(e,u)))<<o|u>>>32-o,r)}function l(n,t,r,e,o,u,c){return f(t&r|~t&e,n,t,o,u,c)}function g(n,t,r,e,o,u,c){return f(t&e|r&~e,n,t,o,u,c)}function v(n,t,r,e,o,u,c){return f(t^r^e,n,t,o,u,c)}function m(n,t,r,e,o,u,c){return f(r^(t|~e),n,t,o,u,c)}function c(n,t){var r,e,o,u;n[t>>5]|=128<<t%32,n[14+(t+64>>>9<<4)]=t;for(var c=1732584193,f=-271733879,i=-1732584194,a=271733878,h=0;h<n.length;h+=16)c=l(r=c,e=f,o=i,u=a,n[h],7,-680876936),a=l(a,c,f,i,n[h+1],12,-389564586),i=l(i,a,c,f,n[h+2],17,606105819),f=l(f,i,a,c,n[h+3],22,-1044525330),c=l(c,f,i,a,n[h+4],7,-176418897),a=l(a,c,f,i,n[h+5],12,1200080426),i=l(i,a,c,f,n[h+6],17,-1473231341),f=l(f,i,a,c,n[h+7],22,-45705983),c=l(c,f,i,a,n[h+8],7,1770035416),a=l(a,c,f,i,n[h+9],12,-1958414417),i=l(i,a,c,f,n[h+10],17,-42063),f=l(f,i,a,c,n[h+11],22,-1990404162),c=l(c,f,i,a,n[h+12],7,1804603682),a=l(a,c,f,i,n[h+13],12,-40341101),i=l(i,a,c,f,n[h+14],17,-1502002290),c=g(c,f=l(f,i,a,c,n[h+15],22,1236535329),i,a,n[h+1],5,-165796510),a=g(a,c,f,i,n[h+6],9,-1069501632),i=g(i,a,c,f,n[h+11],14,643717713),f=g(f,i,a,c,n[h],20,-373897302),c=g(c,f,i,a,n[h+5],5,-701558691),a=g(a,c,f,i,n[h+10],9,38016083),i=g(i,a,c,f,n[h+15],14,-660478335),f=g(f,i,a,c,n[h+4],20,-405537848),c=g(c,f,i,a,n[h+9],5,568446438),a=g(a,c,f,i,n[h+14],9,-1019803690),i=g(i,a,c,f,n[h+3],14,-187363961),f=g(f,i,a,c,n[h+8],20,1163531501),c=g(c,f,i,a,n[h+13],5,-1444681467),a=g(a,c,f,i,n[h+2],9,-51403784),i=g(i,a,c,f,n[h+7],14,1735328473),c=v(c,f=g(f,i,a,c,n[h+12],20,-1926607734),i,a,n[h+5],4,-378558),a=v(a,c,f,i,n[h+8],11,-2022574463),i=v(i,a,c,f,n[h+11],16,1839030562),f=v(f,i,a,c,n[h+14],23,-35309556),c=v(c,f,i,a,n[h+1],4,-1530992060),a=v(a,c,f,i,n[h+4],11,1272893353),i=v(i,a,c,f,n[h+7],16,-155497632),f=v(f,i,a,c,n[h+10],23,-1094730640),c=v(c,f,i,a,n[h+13],4,681279174),a=v(a,c,f,i,n[h],11,-358537222),i=v(i,a,c,f,n[h+3],16,-722521979),f=v(f,i,a,c,n[h+6],23,76029189),c=v(c,f,i,a,n[h+9],4,-640364487),a=v(a,c,f,i,n[h+12],11,-421815835),i=v(i,a,c,f,n[h+15],16,530742520),c=m(c,f=v(f,i,a,c,n[h+2],23,-995338651),i,a,n[h],6,-198630844),a=m(a,c,f,i,n[h+7],10,1126891415),i=m(i,a,c,f,n[h+14],15,-1416354905),f=m(f,i,a,c,n[h+5],21,-57434055),c=m(c,f,i,a,n[h+12],6,1700485571),a=m(a,c,f,i,n[h+3],10,-1894986606),i=m(i,a,c,f,n[h+10],15,-1051523),f=m(f,i,a,c,n[h+1],21,-2054922799),c=m(c,f,i,a,n[h+8],6,1873313359),a=m(a,c,f,i,n[h+15],10,-30611744),i=m(i,a,c,f,n[h+6],15,-1560198380),f=m(f,i,a,c,n[h+13],21,1309151649),c=m(c,f,i,a,n[h+4],6,-145523070),a=m(a,c,f,i,n[h+11],10,-1120210379),i=m(i,a,c,f,n[h+2],15,718787259),f=m(f,i,a,c,n[h+9],21,-343485551),c=d(c,r),f=d(f,e),i=d(i,o),a=d(a,u);return[c,f,i,a]}function i(n){for(var t="",r=32*n.length,e=0;e<r;e+=8)t+=String.fromCharCode(n[e>>5]>>>e%32&255);return t}function a(n){var t=[];for(t[(n.length>>2)-1]=void 0,e=0;e<t.length;e+=1)t[e]=0;for(var r=8*n.length,e=0;e<r;e+=8)t[e>>5]|=(255&n.charCodeAt(e/8))<<e%32;return t}function e(n){for(var t,r="0123456789abcdef",e="",o=0;o<n.length;o+=1)t=n.charCodeAt(o),e+=r.charAt(t>>>4&15)+r.charAt(15&t);return e}function r(n){return unescape(encodeURIComponent(n))}function o(n){return i(c(a(n=r(n)),8*n.length))}function u(n,t){return function(n,t){var r,e=a(n),o=[],u=[];for(o[15]=u[15]=void 0,16<e.length&&(e=c(e,8*n.length)),r=0;r<16;r+=1)o[r]=909522486^e[r],u[r]=1549556828^e[r];return t=c(o.concat(a(t)),512+8*t.length),i(c(u.concat(t),640))}(r(n),r(t))}function t(n,t,r){return t?r?u(t,n):e(u(t,n)):r?o(n):e(o(n))}"function"==typeof define&&define.amd?define(function(){return t}):"object"==typeof module&&module.exports?module.exports=t:n.md5=t}(this);

const story_add_btn_interval = setInterval(addStoryButton, 2000);
const story_render_interval = setInterval(renderStoryButtonBulk, 5 * 1000);

function addStoryButton() {
    te3b_story_users.forEach(function(user) {
        const uzr = $("#users .uzr:contains('"+user.dec+"')");
        const hash = uzr.find(".uhash");
        const has_royal_permission = uzr.hasClass("uid"+myid);
        if(has_royal_permission && hash && hash.text() == "#"+user.hash) {
            clearInterval(story_add_btn_interval);
            window.current_te3b_royal_user = user;
            $("#settings").append('<div><img id="story_loader" src="https://te3b.net/images/loader.gif" style="right: 0.3rem; top: 11rem; position: absolute; padding:6px;display:none;" width="40" height="40" alt=""/><button id="set_story" class="border btn mini btn-success hand fl" style="right: 0.3rem; top: 11rem; position: absolute; padding:6px;" onclick="triggerStoryInput();">إضافة ستوري</button><input accept="video/*, audio/*, image/*" type="file" id="story_input" style="position: absolute; top: -1000px" onchange="setStory(this);" /></di>');
        }
    });
}

function renderStoryButtonBulk() {
    if(!$(users).hasClass("active")) return;
    const story_users = [];
    te3b_story_users.forEach(function(user) {
        if(user.fetched) return;
        story_users.push(user.dec);
    });

    if(!story_users.length) return;

    checkStoryRequest(JSON.stringify(story_users)).then(res => {
        res = JSON.parse(res);

        if(!res.error && res.stories) {
            res.stories.forEach(story => {
                const user = te3b_story_users.find(user => user.dec == story.dec);
                if(!user) return;
                const uzr = $("#users .uzr:contains('"+user.dec+"')");
                uzr.css("position", "relative");
                if(!uzr || !uzr.length) {
                    user.fetched = false;
                    return;
                }
                if(story.file) {
                    user.fetched = true;
                    uzr.find('.str').unbind("click").remove();
                    uzr.find('.uhash').hide();
                    uzr.find('.co.ico').hide();
                    uzr.append('<span onclick="renderStory(event);" data-file="'+story.file+'" style="box-shadow: 0 0 3px 0 #ccc; cursor: pointer; text-align: center; display: inline-block; width: 20px; height: 20px; border-radius: 50%;font-size: 4rem; position: absolute; right: 5px; top: 2px; color: white; background-color: red" class="str fa fa-user"></span>');
                } else {
                    uzr.find('.uhash').show();
                    uzr.find('.co.ico').show();
                    uzr.find('.str').unbind("click").remove();
                }
            });
        }

        clearInterval(story_render_interval);
        if(!window.story_render_interval) {
            setTimeout(() => {
                window.story_render_interval = setInterval(renderStoryButtonBulk, 30 * 1000);
            }, 30 * 1000);    
        }

    }).catch(e => {})

}

function renderStory(e) {
    e.preventDefault();
    e.stopPropagation();
    if(!e || !e.target || !e.target.dataset || !e.target.dataset.file) return;
    const file = "https://story.te3b.net/uploads/stories/"+e.target.dataset.file;

    const extension = e.target.dataset.file.split('.').pop();
    if(['gif','png' ,'jpg', 'jpeg'].indexOf(extension.toLowerCase()) >= 0) {
        $(body).append('<div class="str-container" style="position: absolute; background: #000000BB; display: flex; align-items: center; justify-content: center; margin: 0; padding: 0; top: 0; bottom: 0; right: 0; left: 0;"> <img onclick="videoStoryClicked(this);" style="width: auto; max-width: 100%; max-height: 80%; border-radius: 10px; box-shadow: 0 0 25px 0 #333;" src="'+file+'" /><span onclick="removeStory();" style="position: absolute; top: 5px; right: 5px; font-size: 1rem; border-radius: 50%" class="btn btn-danger">X</span></div>');
    } else {
        $(body).append('<div class="str-container" style="position: absolute; background: #000000BB; display: flex; align-items: center; justify-content: center; margin: 0; padding: 0; top: 0; bottom: 0; right: 0; left: 0;"> <video onclick="videoStoryClicked(this);" style="width: auto; max-width: 100%; max-height: 80%; border-radius: 10px; box-shadow: 0 0 25px 0 #333;" src="'+file+'" controls autoplay loop></video><span onclick="removeStory();" style="position: absolute; top: 5px; right: 5px; font-size: 1rem; border-radius: 50%" class="btn btn-danger">X</span></div>');
    }

}

function removeStory() {
    $(".str-container").remove();
}

function videoStoryClicked(video) {
    if(video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function triggerStoryInput() {
    if($(this).hasClass("is-loading")) return;
    const input = document.getElementById("story_input");
    if(input) input.click();
}

function setStory(input) {
    const formData = new FormData();
    formData.append("file", input.files[0]);
    formData.append("dec", md5(window.current_te3b_royal_user.dec));

    const button = document.getElementById("set_story");
    const loader = document.getElementById("story_loader");
    button.style.display = "none";
    loader.style.display = "inline";

    makeRequest('POST', 'https://story.te3b.net/story', formData, input, loader, button, function (err, response) {
        if(err) return console.log("post error");
        response = JSON.parse(response);
        if(response && response.error === false) {
        } else {
            alert("حدث خطأ أثناء رفع الملف");
        }
    });
}

function checkStoryRequest(users) {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://story.te3b.net/str/"+users);
        xhr.onload = function () {
            resolve(xhr.response);
        };
        xhr.onerror = function () {
            reject(xhr.response);
        };
        xhr.send();
    });
}

function makeRequest(method, url, formData, input, loader, button, done) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function () {
        loader.style.display = "none";
        button.style.display = "inline";
        input.value = null;
        done(null, xhr.response);
    };
    xhr.onerror = function () {
        loader.style.display = "none";
        button.style.display = "inline";
        input.value = null;
        done(xhr.response);
    };
    xhr.send(formData);
}
