class Shop{
	constructor(){
		this.url = "http://localhost/Myphp/WeiBoLi/data/goods.json";
		this.tbody = document.getElementsByTagName("tbody")[0];
		this.subtotal = document.querySelector(".subtotal");
		this.load();
		this.addEvent();
	}
	load(){ 
		ajaxGet(this.url,(res)=>{
			console.log(res);//每次都要查验下，有可能不是标准的json数据
			this.res = JSON.parse(res);//json字符转换成对象数组。
//			console.log(this.res);
			this.getCookie();
		})
	}
	getCookie(){
		this.goods = getCookie("goodsDECookie") ? JSON.parse(getCookie("goodsDECookie")) : [];
		this.display();
	}
	display(){
//		console.log(this.res);
//		console.log(this.goods);
		var str = "";
		for(var i=0;i<this.res.length;i++){
			for(var j =0;j<this.goods.length;j++){
				if(this.res[i].goodsId == this.goods[j].id){
					str+=`<tr index = "${this.res[i].goodsId}">
							<td class="check"><input type="checkbox" class="checkbox" checked /></td>
							<td><img src="${this.res[i].img}"/></td>
							<td>${this.res[i].title}</td>
							<td class="price">${this.res[i].price}</td>
							<td><input class = "num" type="number"min=1 value = "${this.goods[j].num}"/></td>
							<td class="subtotal"><span class= "subtotal_m">00.00</span></td>
							<td class="delete">删除</td>
						</tr>`;							
				}
			}
		}
		this.tbody.innerHTML = str;	
		this.Operation();
		
	}
	addEvent(){
		var that = this;
		this.tbody.addEventListener("click",function(eve){
			var e = eve || window.event;//事件对象
			var target = e.target || e.srcElement;//事件源
			if(target.className==="delete"){
				that.id = target.parentNode.getAttribute("index");
				target.parentNode.remove();
				that.changeCookie(function(i){
					that.goods.splice(i,1);
				});
			}
		})
		this.tbody.addEventListener("input",function(eve){
			var e = eve || window.event;//事件对象
			var target = e.target || e.srcElement;//事件源
			if(target.tagName == "INPUT"){
				that.id = target.parentNode.parentNode.getAttribute("index");
				that.changeCookie(function(i){
					that.goods[i].num = target.value;
				})
			}
		})								
	}
	changeCookie(cb){
		for(var i=0;i<this.goods.length;i++){
			if(this.id == this.goods[i].id){
				cb(i);
				break;
			}
		}
		setCookie("goodsDECookie",JSON.stringify(this.goods));		
		this.total();
	}
	total(){
		this.str = 0;
		for(var i=0;i<this.res.length;i++){
//			console.log(this.res)
		}
	}
	 Operation(){
        $.fn.extend({
            // 有一个为false就返回false
            selectAll:function () {
                // 默认为true
                var flag = true;
                // 遍历这个数组
                this.each(function (index,item) {
                    // 如果有一个为false就为false
                    if (item.checked === false) {
                        flag = false;
                    }
                })
                return flag;
            },
            // 反选
            toggleSelect:function () {
                this.each(function (index, item) {
                    // 复制当前相反的状态
                    item.checked = !item.checked;
                })
            },
            // 取消
            cancel:function () {
                this.each(function (index,item) {
                    item.checked = false;
                })
            }
        })
        // 全选
        $(".checkall").change(function () {
            $('.checkbox').prop('checked',this.checked);
            // 总价
            
            
        })
        var that = this;
        $('.checkbox').change(function () {
            $(".checkall").prop('checked',$('.checkbox').selectAll());
            // 总价
            
        })
        // 反选
        $(".antitone").click(function () {
            $('.checkbox').toggleSelect();
            // 这两行代码顺序不能乱
            $(".checkall").prop('checked',$('.checkbox').selectAll());
            // 总价
           
        })
        // 取消
        $(".cancel").click(function () {
            $('.checkbox').cancel();
            $(".checkall").prop('checked',$('.checkbox').selectAll());
            // 总价
            
        })
    }
}
new Shop;
