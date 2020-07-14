//时间格式化函数
Date.prototype.format = function(fmt){
	var o={
		'M+':this.getMonth()+1,
		"d+":this.getDate(),
		'h+':this.getHours(),
		'm+':this.getMinutes(),
		's+':this.getSeconds(),
		'q+':Math.floor((this.getMonth()+3)/3),
		'S':this.getMilliseconds()
	};
	if(/(y+)/.test(fmt)){
		fmt = fmt.replace(RegExp.$1,(this.getFullYear()+'').substr(4-RegExp.$1.length))
		
	}
	for(var k in o){
		if(new RegExp("("+k+")").test(fmt)){
			fmt = fmt.replace(RegExp.$1,(RegExp.$1.length == 1)?(o[k]): ("00" +o[k]).substr(("" + o[k]).length))
		}
	}
	return fmt
}


var  v= new Vue({
	el:'#comment',
	data:{
		//原始用户评论
		comments:[{
			username:'z',
			 userimg:'img(动态).png',
			words:'我是大帅哥，娃哈哈',
			time:"2019-08-16 11:15:25"
		},{
			username:'z',
			 userimg:'img(动态).png',
			words:'我是大帅哥，娃哈哈',
			time:"2019-08-16 11:15:25"
		},{
			username:'z',
			 userimg:'img(动态).png',
			words:'我是大帅哥，娃哈哈',
			time:"2019-08-16 11:15:25"
		},
		],
//			原始用户信息
		users:[{
			username:"zhangshan",
			password:"123456",
			 userimg:'img(动态).png'
		},{
			username:"zyc",
			password:"123456",
			 userimg:'img(动态).png'
		},{
			username:"admin",
			password:"123456",
			 userimg:'img(动态).png'
		}
		],
		currentUser:{username:'',userimg:''},
		loginStatus:false,
		registerStatus:false,
		userbarStatus:false,
		lrbtnStatus:true
	},
	
	methods:{
		//登录
		showLogin:function(){
			document.getElementById("login").reset()
			this.loginStatus = true
			this.registerStatus = false
		},
		//注册
			
		showregister:function(){
			document.getElementById("login").reset()
			this.loginStatus = false
			this.registerStatus = true
		},
		//退出
		loginout:function(){
			this.currentUser.username=''
			 this.currentUser.userimg=''
			alert("退出成功");
			this.userbarStatus = false;
			this.lrbtnStatus = true;
		},
		//遮罩层
		loginboxClick:function(){
			this.loginStatus=false
		},
		registerboxClick:function(){
			this.registerStatus = false
		},
		stopProp:function(e){
			e= e||event;
			e.stopPropagation()

		},
		//登录
		login:function(){
			var username = $('.loginbox').find('.username').val();
			var psw = $('.loginbox').find('.psw').val();
			var flag= false;
			for(var i=0;i<this.users.length;i++){
				if(this.users[i].username === username && this.users[i].password === psw  ){
					flag = true;
					alert("登录成功")
					this.userbarStatus=true;
					this.loginStatus = false;
					this.currentUser.username=this.user[i].username;
					this.currentUser.userimg = this.user[i].userimg;
					this.lrbtnStatus = false;
					break;
				}
			}
			if(!flag){
				alert("输入的账号密码不正确")
				document.getElementById("login").reset()
			}
		},
		register:function(){
			var obj = {};
			var flag=false;
			var username = $('.registerbox').find('.username').val();
			var psw = $('.registerbox').find('.psw').val();
			for(var i=0;i<this.users.length;i++){
				if(this.users[i].username === username){
					flag = true;
					alert("该用户名字已经别注册")
					break;
					
				}
			}
			if(!flag){
				if(username == ''|| psw==''){
					alert("账号密码不能为空")
				}else{
					// var randomNum = Math.floor(Math.random()*5)+1;
					// var randomimg ='user0'+randomNum+'.png';
					obj.username =username;
					obj.password =psw;
					obj.userimg ="img(动态).png"; //randomimg;
					
					
					this.users.push(obj)
					alert("注册成功")
					this.userbarStatus = true;
					
					
					this.currentUser.username = obj.username;
					this.currentUser.userimg = obj.userimg;
					
					
					this.lrbtnStatus = false;
					document.getElementById("register").reset();
					this.registerStatus = false;
					
				}
			}
		},
		
		//评论
		subCommont:function(){
			if(!this.userbarStatus){
				alert("登陆以后才可以评论")
				this.loginStatus = true;
				
			}else{
				if($('.wordsbox textarea').val()==""){
					alert("请先填写评论内容");
				}else{
					var obj = {};
					obj.username = this.currentUser.username;
					obj.userimg = this.currentUser.userimg;
					obj.words=$('.wordsbox textarea').val();
					obj.time = new Date().format('yyyy-MM-dd hh:mm:ss');
					
					this.comments.push(obj);
					alert("评论成功");
					$('.wordsbox textarea').val('');
				}
			}
		}
	}
})



	var snow = function() {
		var b = document.getElementById("christmasCanvas"), a = b.getContext("2d"), d = window.innerWidth, c = window.innerHeight;
		b.width = d;
		b.height = c;
		for(var e = [], b = 0;b < 70;b++) {
		e.push({x:Math.random() * d, y:Math.random() * c, r:Math.random() * 4 + 1, d:Math.random() * 70})
		}
		var h = 0;
		window.intervral4Christmas = setInterval(function() {
		a.clearRect(0, 0, d, c);
		a.fillStyle = "rgba(255, 255, 0, 0.6)";
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
