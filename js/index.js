//Tion-sub

class Tion{
	constructor(){
		this.ali = document.querySelectorAll("nav .nav-l ul .hover");
		this.aul = document.querySelectorAll("nav .nav-l ul ul");
		this.init();
		
	}init(){
		this.addEvent();
	}
	addEvent(){
		var that = this;
		for(var i=0;i<this.ali.length;i++){
			this.ali[i].index = i;
			this.ali[i].onmouseenter = function(){
				that.setActive(this);
			}	
		}
		
	}
	setActive(res){
		this.index = res.index;
		for(var j =0;j<this.ali.length;j++){
			this.aul[j].style.display = "none";
		}
		this.aul[this.index].style.display = "block";
	}
}
new Tion;

//sign-injs
class Sign{
	constructor(){
		this.anotice = document.querySelectorAll("#sign-in .notice-box .notice-head span");
		this.aul = document.querySelectorAll("#sign-in .notice-box .notice-cont ul");
		this.span = document.querySelectorAll("#sign-in .notice-box .notice-head span")
		this.init();
	}
	init(){
		this.addEvent();
	}
	addEvent(){
		var that = this;
		for(let i = 0;i<this.anotice.length;i++){
			this.anotice[i].index = i;
			this.anotice[i].onclick = function(){
				that.setActive(this);
			}
		}
	}
	setActive(ulRes){
		this.index = ulRes.index;
		for(var j =0;j<this.anotice.length;j++){
			this.aul[j].style.display="none";
			this.span[j].className="";
		}
		this.aul[this.index].style.display="block";
		this.span[this.index].className = "on";
	}
}
new Sign;


//qrcode
class Qrcode{
	constructor(){
		this.qrcodePh = document.querySelector("#topbar .topbar-right div.qrcode1");
		this.qrcodeWe = document.querySelector("#topbar .topbar-right div.qrcode2");
		this.tab_phone = document.querySelector("#topbar .topbar-right ul li.tab_phone");
		this.tab_wechat = document.querySelector("#topbar .topbar-right ul li.tab_wechat");
		this.init();
	}
	init(){
		this.addEvent();
	}
	addEvent(){
		var that = this;			
		this.tab_phone.onmouseover = function(){
			that.setActive1();
		}
		this.tab_phone.onmouseout = function(){
			that.setActive3();
		}
		this.tab_wechat.onmouseover = function(){
			that.setActive2();
		}
		this.tab_wechat.onmouseout = function(){
			that.setActive4();
		}		
	}
	setActive1(){
		this.qrcodePh.style.display = "block";		
	}
	setActive2(){
		this.qrcodeWe.style.display = "block";		
	}
	setActive3(){
		this.qrcodePh.style.display = "none";		
	}
	setActive4(){		
		this.qrcodeWe.style.display = "none";
	}
}
new Qrcode;

//登录后的变化
class Index{
	
	constructor(){
		
		this.user = document.querySelector("#topbar .topbar-left .username");
		//console.log(this.user);
		this.lg = document.querySelector("#topbar .topbar-left .lg");
		this.zc = document.querySelector("#topbar .topbar-left .zc");
		this.tc = document.querySelector("#topbar .topbar-left .tc");
		this.cs = document.querySelector("#sign-in .box .denglu p");
		this.lg2 = document.querySelector("#sign-in .box .denglu .lg");
		this.zc2 = document.querySelector("#sign-in .box .denglu .zc-c");
		this.shop = document.querySelector("#sign-in .box .denglu a.shop");
		this.getMsg();
		this.addEvent();
	}
	addEvent(){
		var that = this;
		this.tc.onclick = function(){
			that.msg[that.i].onoff = "0";
			localStorage.setItem("userMsg",JSON.stringify(that.msg));
			location.reload();
		}
	}
	getMsg(){
		this.msg = localStorage.getItem("userMsg") ? JSON.parse(localStorage.getItem("userMsg")) : [];
		this.i = null; 
		
		var type = this.msg.some((val,idx)=>{
			this.i = idx;
			return val.onoff === 1;
		})
		if(type){
			console.log(this.msg[this.i])
			this.user.innerHTML = this.msg[this.i].user;
			this.lg.style.display="none";
			this.zc.style.display = "none";
			this.lg2.style.display = "none";
			this.zc2.style.display = "none";
			this.tc.style.display = "block";
			this.shop.style.display = "block";
			this.cs.innerHTML = "用户"+this.msg[this.i].user;
			
		}
	}
}
		
new Index;




