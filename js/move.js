function move(ele,data,cb){
	clearInterval(ele.t)
	ele.t = setInterval(function(){
		var onoff = true;
		for(var i in data){
			var iNow = parseInt(getStyle(ele,i));
			var speed = (data[i] - iNow)/10;
			speed = speed<0 ? Math.floor(speed) : Math.ceil(speed);
			if(iNow != data[i]){
				onoff = false;
			}
			ele.style[i] = iNow + speed + "px";
		}
		if(onoff){
			clearInterval(ele.t);
			cb && cb();
		}
	},30)
}

//获取样式的功能
function getStyle(ele,attr){
	if(getComputedStyle){
		return getComputedStyle(ele,false)[attr];
	}else{
		return ele.currentStyle[attr];
	}
}