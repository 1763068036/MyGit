class List{
	constructor(options){
		this.url = options.url;
		this.pageCont = options.pageCont;
		this.list = options.list;
		this.index = options.index || 0;
		this.num = options.num || 12;
		this.product = document.getElementsByClassName("goods")[0];			
		this.load();
		this.addEvent();
	}
	load(){
		var that = this;
		$.ajax({
			url:this.url,
			success:function(res){
//					console.log(res);
				that.res = res;
				that.createPage()
			}
		})
	}
	createPage(){
		var that = this;
		this.pageCont.pagination(this.res.length,{
			items_per_page:this.num,
			current_page:this.index,
			callback:function(i){
				that.index = i;
				that.display();
			}
		})
	}
	display(){
		var str = "";
		for(var i=this.index*this.num;i<(this.index+1)*this.num;i++){
			if(i<this.res.length){
				str += `<li title="${this.res[i].title}" index="${this.res[i].goodsId}">   
							<div class="goodshow">							   			
								<img src="${this.res[i].img}">		
								<p class="goo_shade">       
									<span class="goo_shadel">${this.res[i].goo_shadel}</span>       
									<span class="goo_shader">${this.res[i].goo_shader}</span>     
								</p>   
							</div>   
							<a class="goo_title" href="details.html" >${this.res[i].goo_title}</a>   
							<p >     
								<span class="price">
									<em>${this.res[i].price}</em>	 							
								</span>
								<i class="iwant" target="_blank">加入购物车</i>	
							</p>
						</li>`;
			}
		}
		this.list.html(str);
	}
	addEvent(){
		var that = this;
		this.product.addEventListener("click",function(eve){
			var e = eve||window.event;
			var target = e.target || e.strElement;
			if(target.className=="iwant"){
				that.id = target.parentElement.parentNode.getAttribute("index");
//				console.log(that.id);
				that.setCookie();
			}
		})
	}
	setCookie(){
		this.goods = getCookie("goodsDECookie") ? JSON.parse(getCookie("goodsDECookie")) : [];
		console.log(this.goods);
		//第一次加入购物车直接加入
		if(this.goods.length<1){
			this.goods.push({
				id:this.id,
				num:1
			});
		}else{
			var onoff = true;
			//先判断这次点击的是新商品还是老商品
			for(var i =0;i<this.goods.length;i++){
				//老商品，增加数量
				if(this.goods[i].id === this.id){
					this.goods[i].num++;
					onoff = false;
				}
			}
			//新商品，增加
			if(onoff){
				this.goods.push({
					id:this.id,
					num:1
				})
			}
			
		}
		setCookie("goodsDECookie",JSON.stringify(this.goods));
	}
}
	
new List({
	url:"http://localhost/Myphp/WeiBoLi/data/goods.json",
	pageCont:$(".pagination"),
	list:$("#list ul"),
	index:0,
	num:12
	
})

