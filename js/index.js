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

//




