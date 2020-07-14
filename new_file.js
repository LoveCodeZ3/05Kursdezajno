
			
					(function(){
						var currindex;
						var lis;
						var liwidth;
						var len;
						var id;
						into();
						function into(){
							currindex = 1;
							var li_1 = document.querySelector(".slider .list .item:first-of-type");
							var copy_1 = li_1.cloneNode(true);
							var li_last = document.querySelector(".slider .list .item:last-of-type");
							var copy_last = li_last.cloneNode(true); //cloneNode 克隆
							var div_prev = document.querySelector(".prev");
							var div_next = document.querySelector(".next");
							var list = document.querySelector(".slider .list");
							var slider = document.querySelector(".slider");
							slider.onmouseenter = function(){
								div_prev.style.display="block";
								div_next.style.display="block";
							}
							slider.onmouseleave = function(){
								 div_prev.style.display="none";
								 div_next.style.display="none";
								
							}
							
							list.appendChild(copy_1);
							list.insertBefore(copy_last,li_1);
							
							lis = document.querySelectorAll(".list .item");
							liwidth = lis[0].offsetWidth; //offsetWidth获取元素的宽
							len = lis.length;
							list.style.width = liwidth*len +"px";
							list.style.left = -liwidth+"px";
							document.querySelector(".prev").onclick = function(){
								slideprev();
								
							}
							document.querySelector(".next").onclick = function(){
								slidenext();
								
							}
							var bullet = document.querySelectorAll(".pagination .bullet");
							for(var i=0;i<bullet.length;i++){
								bullet[i].index = i;
								bullet[i].onclick = function(){
									currindex = this.index + 1;
									slideto(currindex);
								}
							}
							document.querySelector(".slider").onmouseover = function(){
								stop();
							}
							document.querySelector(".slider").onmouseout = function(){
								outo();
							}
							outo();
						}
						function slidenext(){
							currindex++;
							slideto(currindex);
						}
						function slideprev(){
							currindex--;
							slideto(currindex);
						}
						function slideto(index){
							var list = document.querySelector(".slider .list")
							if(index === len){
								
								currindex = index =2;
								list.style.left = -liwidth + "px";  //做衔接的循环
								
							}
							if(index === -1){
								currindex =index =len - 3;
								list.style.left = -(len-2)*liwidth+"px";//做衔接的循环
							}
							
							
							
							
							var focusindex;
							var bullets = document.querySelectorAll(".slider .pagination .bullet");
							if(index === 0){
								focusindex = bullets.length - 1;
							}else if(index === len-1){
								focusindex = 0;
								
							}else{
								focusindex = index -1;
							}
							document.querySelector(".focus").className ="bullet";
							bullets[focusindex].className = "bullet focus";
							var left = -index*liwidth;
							
							
							
							animate(list,{
								left: left
							})
						}
						function outo(){
							clearInterval(id);
							 id = setInterval(function(){
								slidenext();
							},2000)
						}
						function stop(){
							clearInterval(id);
						}
					
											})()
	
	// 吸顶菜单
window.onload =function(){
	var header = document.getElementById("header");
	
	var timer = null;
	var ifmoving = false;
	window.onscroll = function(){
		var scrollTop =document.documentElement.scrollTop || document.body.scrollTop;
		
		if(scrollTop > 0){
			
			header.style.top = scrollTop +"px";
		}
	}
}






// 飘动的
			
			
			
			var snow = function() {
			var b = document.getElementById("christmasCanvas"), a = b.getContext("2d"), d = window.innerWidth, c = window.innerHeight;
			b.width = d;
			b.height = c;
			for(var e = [], b = 0;b <84000;b++) {
			e.push({x:Math.random() * d, y:Math.random() * c, r:Math.random() * 4 + 1, d:Math.random() * 70})
			}
			var h = 0;
			window.intervral4Christmas = setInterval(function() {
			a.clearRect(0, 0, d, c);
			a.fillStyle = "rgba(255, 153, 255, 255)";
			a.shadowBlur = 5;
			a.shadowColor = "rgba(255, 255, 255, 0.9)";
			a.beginPath();
			for(var b = 0;b < 70;b++) {
			 var f = e[b];
			 a.moveTo(f.x, f.y);
			 a.arc(f.x, f.y, f.r, 0, Math.PI * 2, !0)
			}
			a.fill();
			h += 0.01;
			for(b = 0;b < 70;b++) {
			if(f = e[b], f.y += Math.cos(h + f.d) + 1 + f.r / 2, f.x += Math.sin(h) * 2, f.x > d + 5 || f.x < -5 || f.y > c) {
			e[b] = b % 3 > 0 ? {x:Math.random() * d, y:-10, r:f.r, d:f.d} : Math.sin(h) > 0 ? {x:-5, y:Math.random() * c, r:f.r, d:f.d} : {x:d + 5, y:Math.random() * c, r:f.r, d:f.d}
			}
			}
			}, 70)
			}
			  snow();
			
			
			//弹出窗口
		var A= document.getElementById("a1");
		var zgone1=document.getElementById("zg1")
		A.onmouseover = function(){
			$("a[id=a1]").on('mouseover',function(){
				$("div[id=zg1]").show(100); //显示 
			}).on('mouseout',function(){
				$("div[id=zg1]").hide(1000);
			})
			
		}
		
			
		
		
		
		
			var A2= document.getElementById("a2");
			var zgone2=document.getElementById("zg2")
			A2.onmouseover = function(){
				$("a[id=a2]").on('mouseover',function(){
					$("div[id=zg2]").show(100); //显示 
				}).on('mouseout',function(){
					$("div[id=zg2]").hide(1000);
				})
				
			}
			
				
			
			
			
			
	var A3= document.getElementById("a3");
	var zgone3=document.getElementById("zg3")
	A3.onmouseover = function(){
		$("a[id=a3]").on('mouseover',function(){
			$("div[id=zg3]").show(100); //显示 
		}).on('mouseout',function(){
			$("div[id=zg3]").hide(1000);
		})
		
	}
	
		
	
		