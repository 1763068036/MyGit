class Login {
	constructor() {
		
		this.user = document.querySelector("#login .login-bar div.box1 form .user");
		this.pass = document.querySelector("#login .login-bar div.box1 form .pass");
		this.log = document.querySelector("#login .login-bar div.box1 .re .login");
		this.span1 = document.querySelector("#login .login-bar div.box1 form .span1")
		this.span2 = document.querySelector("#login .login-bar div.box1 form .span2")
		//console.log(this.span1);
		this.addEvent();
	}
	addEvent() {
		var that = this;
		this.log.onclick = function() {
			
			that.u = that.user.value;
			that.p = that.pass.value;
			that.getMsg();
		}
	}
	getMsg() {
		this.msg = localStorage.getItem("userMsg") ? JSON.parse(localStorage.getItem("userMsg")) : [];
		//console.log(this.msg);
		var type = 0;
		for(var i = 0; i < this.msg.length; i++) {
			if(this.msg[i].user == this.u && this.msg[i].pass == this.p) {
				this.span1.style.display="none";				
				this.span2.style.display="none";				
				location.href = "index.html";
				this.msg[i].onoff = 1;
				localStorage.setItem("userMsg",JSON.stringify(this.msg));
				type = 1;
			} else if(this.msg[i].user == this.u && this.msg[i].pass != this.p) {
				this.span1.style.display="none";
				this.span2.style.display="block";
				this.span2.innerHTML = "密码错误，请重新输入";
				type = 2;
			}else if(this.msg[i].user != this.u && this.msg[i].pass == this.p){
				this.span1.style.display="block";
				this.span2.style.display="none";
				this.span1.innerHTML = "用户名错误，请重新输入";
				type = 3;
			}else if(this.msg[i].user != this.u && this.msg[i].pass != this.p){
				this.span1.style.display="block";
				this.span1.innerHTML = "用户名错误，请重新输入";
				this.span2.style.display="block";
				this.span2.innerHTML = "密码错误，请重新输入";
				type = 4;
			}
		}
		if(type == 0) {
			this.span1.style.display="block";
			this.span1.innerHTML = "用户名不存在，请重新输入";
		}
	}
}
//
new Login;
//切换
class Tab{
	constructor(){
		this.box1 = document.querySelector("#login .main .login-bar .box1");
		this.box2 = document.querySelector("#login .main .login-bar .box2");
		this.span1 = document.querySelector("#login .main .login-bar p .span1");
		this.span2 = document.querySelector("#login .main .login-bar p .span2");		
		this.init();
	}
	init(){
		this.addEvent();
	}
	addEvent(){
		var that = this;
		this.span1.onclick = function(){
			that.setActive1();
		}
		this.span2.onclick = function(){
			that.setActive2();
		}		
	}
	setActive1(){		
		this.box1.style.display = "block";
		this.box2.style.display =  "none";
		this.span1.className="on span1";
		this.span2.className = "span2";		
	}
	setActive2(){
		this.box1.style.display="none";
		this.box2.style.display =  "block";
		this.span2.className ="on";
		this.span1.className = "span1";
	}	
}
new Tab;
//
////
