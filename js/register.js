//注册页面的js
class Register{
	constructor(){
		this.user = document.getElementsByClassName("user")[0];
		this.pass = document.getElementsByClassName("pass")[0];
		this.sp_user = document.getElementsByClassName("sp_user")[0];
		this.sp_pass = document.getElementsByClassName("sp_pass")[0];
		this.confirm_pass = document.getElementsByClassName("confirm_pass")[0];
		this.span1 = document.getElementById("r");
		this.span2 = document.getElementById("z");
		this.span3 = document.getElementById("q");
		this.confirmPass = document.getElementsByClassName("confirmPass")[0]; 
		console.log(this.confirm_pass);
		console.log(this.confirmPass);
		this.drag_bg = document.getElementsByClassName("drag-bg")[0];
		this.register = document.getElementsByClassName("register")[0];
		this.message = document.getElementsByClassName("last_next")[0];
		
		
		this.init();
	}
	init(){
		this.addEvent();		
	}
	addEvent(){
		var that = this;
		this.user.onchange = function(){
			that.setActive1();
		}
		this.pass.onchange = function(){
			that.setActive2();
		}
		this.confirmPass.onchange = function(){
			that.setActive3();
		}
		this.register.onclick = function(){
			that.u = that.user.value;
			that.p = that.pass.value;
			that.setMsg();
		}
	}
	setActive1(){
		if(checkUser(this.user.value)==false){
			this.sp_user.style.display = "block";
			this.sp_user.innerHTML = "用户名必须为4-8位的字符";
		}else{
			this.sp_user.style.display = "none";
		}
	}
	setActive2(){
		if(checkUser(this.pass.value)==false){
			this.sp_pass.style.display = "block";
			this.sp_pass.innerHTML = "密码必须为6位字符，不可为纯数字";
		}else{
			this.sp_pass.style.display = "none";
		}
	}
	setActive3(){
		this.str1 = this.pass.value;
		this.str2 = this.confirmPass.value;
		if(this.str1 != this.str2){
			this.confirm_pass.style.display = "block";
			this.confirm_pass.innerHTML = "确认密码和设置密码不一致，请重新输入";
		}else{
			this.confirm_pass.style.display = "none";
		}
	}
	setMsg(){
		
		this.msg = localStorage.getItem("userMsg") ? JSON.parse(localStorage.getItem("userMsg")) : [];
		var type1 = this.msg.some((value,index)=>{
			return value.user == this.u;
		});
		if(type1){
			this.sp_user.style.display = "block";
			this.sp_user.innerHTML = "用户名重复,请重新输入";
		}else{
			this.sp_user.style.display = "none";
			this.msg.push({
				user:this.u,
				pass:this.p,
				onoff:0
			})
			this.success();		
		}
		localStorage.setItem("userMsg",JSON.stringify(this.msg));		
	}
	success(){
		this.message.style.display = "block";
		setTimeout(()=>{
			location.href = "login.html";
		},2000);
	}
}
new Register;

//USER验证。


function checkUser(str){
	var reg  = /^[a-zA-Z0-9_\u2E80-\u9FFF]{6,8}$/;
	if(str.match(reg)){
		return true;
	}
	else{
		return false;
	}
}

//密码验证
function checkPass(str){
	var reg = /^[0-9]{6}$/;
	if(str.match(reg)){
		return true;
	}else{
		return false;
	}
}
//确认密码

function confirmPass(str1,str2){
	if(str1 == str2){
		return true;
	}else{
		return false;
	}
}



//验证手机号码是否符合
function checkMobilePhone(str){
    if (str.match(/^(?:13\d|15[89])-?\d{5}(\d{3}|\*{3})$/) == null) {
        return false;
    }
    else {
        return true;
    }
}

