//第一个差好按钮
var close1=document.getElementById('close')
//第二个差好按钮
var close2=document.getElementById('close2')
//第三个差好按钮
var close3_=document.getElementById('close3')
// 购物车总样式
var shoppingcart_=document.getElementsByClassName('shoppingcart')
[0]
var shoppingcartbehind=document.getElementsByClassName('shoppingcartbehind')[0]

var body_= document.getElementsByTagName('body')[0]
// 获取结算
var ball4=document.getElementById('ball4')
// 总钱数
var money4=document.getElementById('money4')
// 第二个
var shoppingcart2=document.getElementsByClassName('shoppingcart2')[0]
// 第三个
var shoppingcart3=document.getElementsByClassName('shoppingcart3')[0]
close1.onclick=function(){
var a=confirm('确定要删除吗')
if(a){
    shoppingcart_.removeChild(shoppingcart1)
      shoppingcart_.style.height=shoppingcart_.offsetHeight-140+'px'
      if(!shoppingcart2.offsetHeight&&!shoppingcart3.offsetHeight){
        shoppingcartbehind.style.display='block'
        body_.removeChild(shoppingcart_)
         }
      if(!shoppingcart1.offsetHeight){
        var aoo1=ball2.innerHTML-0
        var aoo2=ball3.innerHTML-0
        var money10=money2.innerHTML-0
        var money11=money3.innerHTML-0
        ball4.innerHTML=aoo1+aoo2
       money4.innerHTML=money10+money11
      }
      if(!shoppingcart1.offsetHeight&&!shoppingcart2.offsetHeight){var aoo3=ball3.innerHTML-0
        ball4.innerHTML=aoo3
        var money12=money3.innerHTML
       money4.innerHTML=money12
      }
      if(!shoppingcart1.offsetHeight&&!shoppingcart3.offsetHeight){var ty=ball2.innerHTML-0
        var money13=money2.innerHTML-0
        ball4.innerHTML=ty
       money4.innerHTML=money13
      }
}
}
close3_.onclick=function(){
  var b=confirm('确定要删除吗')
  if(b){
    shoppingcart_.removeChild(shoppingcart3)
    shoppingcart_.style.height=shoppingcart_.offsetHeight-150+'px'
    if(!shoppingcart2.offsetHeight&&!shoppingcart1.offsetHeight){
      shoppingcartbehind.style.display='block'
      body_.removeChild(shoppingcart_)
       }
       if(!shoppingcart3.offsetHeight){
        var three1=ball.innerHTML-0
        var three2=ball2.innerHTML-0
        var money18=money1.innerHTML-0
        var money19=money2.innerHTML-0
        ball4.innerHTML=three1+three2
       money4.innerHTML=money18+money19
      }
      if(!shoppingcart3.offsetHeight&&!shoppingcart2.offsetHeight){
        var three3=ball.innerHTML
        ball4.innerHTML=three3
        var money20=money1.innerHTML-0
       money4.innerHTML=money20
      }
      if(!shoppingcart3.offsetHeight&&!shoppingcart1.offsetHeight){
        var three4=ball2.innerHTML
        ball4.innerHTML=three4
        var money21=money2.innerHTML-0
       money4.innerHTML=money21
      }
  }
  }
  close2.onclick=function(){
    var b=confirm('确定要删除吗')
    if(b){
        shoppingcart_.removeChild(shoppingcart2)
        shoppingcart_.style.height=shoppingcart_.offsetHeight-100+'px'
        if(!shoppingcart3.offsetHeight&&!shoppingcart1.offsetHeight){
          shoppingcartbehind.style.display='block'
          body_.removeChild(shoppingcart_)
           }
        if(!shoppingcart2.offsetHeight){
          var two1=ball.innerHTML-0
          var twp3=ball3.innerHTML-0
          var money14=money1.innerHTML-0
          var money15=money3.innerHTML-0
        ball4.innerHTML=two1+twp3
       money4.innerHTML=money14+money15
      }
      if(!shoppingcart1.offsetHeight&&!shoppingcart2.offsetHeight){
        var two4=ball3.innerHTML-0
        var money16=money3.innerHTML-0
        ball4.innerHTML=two4
       money4.innerHTML=money16
      }
      if(!shoppingcart3.offsetHeight&&!shoppingcart2.offsetHeight){
        var two5=ball.innerHTML
        var money17=money1.innerHTML-0
        ball4.innerHTML=two5
       money4.innerHTML=money17
      }
    }
    
    }
    //购物车鼠标放置样式显示
 var shopping=document.getElementsByClassName('shopping')[0]
 shopping.onmouseenter=function ty(){
  shoppingcart_.style.display='block'
 }
 shoppingcartbehind.onmouseleave=function(){
  setTimeout(function(){
    shoppingcartbehind.style.display='none'
  ty()
  },1000)
 }
 shoppingcart_.onmouseleave=function(){
  shoppingcart_.style.display='none'
 }
 shoppingcart_.onmouseleave=function(){
  shoppingcart_.style.display='none'
 }
//  第一加减
var yi=document.getElementById('yi')
// var qwe=yi.innerText
var shoppingcart1=document.getElementsByClassName('shoppingcart1')[0]
var shoppingcart3=document.getElementsByClassName('shoppingcart3')[0]
var shoppingcart2=document.getElementsByClassName('shoppingcart2')[0]
var index=0
var ball=document.getElementById('ball')
var money1=document.getElementById('money1')
var app1=0
var opp=3
var number=3 
// 第一个
function fn(){ 
  if(index>1){ 
    qw()
    index-- 
    app1-=190
    yi.innerHTML=index
    ball.innerHTML=index
    money1.innerHTML=app1
  }else{
 var d=confirm('确定删除')
    if(d){
      shoppingcart_.removeChild(shoppingcart1)
      shoppingcart_.style.height=shoppingcart_.offsetHeight-140+'px'
      if(!shoppingcart3.offsetHeight&&!shoppingcart2.offsetHeight){
        shoppingcartbehind.style.display='block'
        body_.removeChild(shoppingcart_)
         }
      if(!shoppingcart1.offsetHeight){
        var aoo1=ball2.innerHTML-0
        var aoo2=ball3.innerHTML-0
        var money10=money2.innerHTML-0
        var money11=money3.innerHTML-0
        ball4.innerHTML=aoo1+aoo2
       money4.innerHTML=money10+money11
      }
      if(!shoppingcart1.offsetHeight&&!shoppingcart2.offsetHeight){var aoo3=ball3.innerHTML-0
        ball4.innerHTML=aoo3
        var money12=money3.innerHTML
       money4.innerHTML=money12
      }
      if(!shoppingcart1.offsetHeight&&!shoppingcart3.offsetHeight){var ty=ball2.innerHTML-0
        var money13=money2.innerHTML-0
        ball4.innerHTML=ty
       money4.innerHTML=money13
      }
    }else{
      yi.innerHTML=1 
     
    }
  }

}
function fnn(){
 qw()
  index++
  app1+=190
  yi.innerHTML=index
  ball.innerHTML=index
  money1.innerHTML=app1
   
}
// 第二个加减
var yi_=document.getElementById('yi1')
var ball2=document.getElementById('ball2')
var money2=document.getElementById('money2')
var index1=0
var app2=0
console.log(ball4.innerHTML)
function fu(){qw()
  if(index1>1){
    index1-- 
    app2-=5
    yi_.innerHTML=index1
    ball2.innerHTML=index1
    money2.innerHTML=app2
  }else{
 var d=confirm('确定删除') 
    if(d){
      shoppingcart_.removeChild(shoppingcart2)
      shoppingcart_.style.height=shoppingcart_.offsetHeight-100+'px'
      if(!shoppingcart3.offsetHeight&&!shoppingcart1.offsetHeight){
        shoppingcartbehind.style.display='block'
        body_.removeChild(shoppingcart_)
         }
    if(!shoppingcart2.offsetHeight){
      var two1=ball.innerHTML-0
      var twp3=ball3.innerHTML-0
      var money14=money1.innerHTML-0
      var money15=money3.innerHTML-0
    ball4.innerHTML=two1+twp3
   money4.innerHTML=money14+money15
  }
  if(!shoppingcart1.offsetHeight&&!shoppingcart2.offsetHeight){
    var two4=ball3.innerHTML-0
    var money16=money3.innerHTML-0
    ball4.innerHTML=two4
   money4.innerHTML=money16
  }
  if(!shoppingcart3.offsetHeight&&!shoppingcart2.offsetHeight){
    var two5=ball.innerHTML
    var money17=money1.innerHTML-0
    ball4.innerHTML=two5
   money4.innerHTML=money17
  }
    }else{
      yi_.innerHTML=1
      ball2.innerHTML=1
     
    }
  }
 
}
function fuu(){ qw()
  index1++
  app2+=5
  yi_.innerHTML=index1
  ball2.innerHTML=index1
  money2.innerHTML=app2
 
}
// 第三个加减
var yi3=document.getElementById('yi2')
var ball3=document.getElementById('ball3')
var money3=document.getElementById('money3')
var index2=0
var app3=0
function fm(){ qw()
  if(index2>1){
    index2-- 
    ball3.innerHTML=index2
    app3-=758
    yi3.innerHTML=index2
    money3.innerHTML=app3
  }else{
 var d=confirm('确定删除')
    if(d){
      shoppingcart_.removeChild(shoppingcart3)
      shoppingcart_.style.height=shoppingcart_.offsetHeight-150+'px'
      if(!shoppingcart2.offsetHeight&&!shoppingcart1.offsetHeight){
        shoppingcartbehind.style.display='block'
        body_.removeChild(shoppingcart_)
         }
         if(!shoppingcart3.offsetHeight){
          var three1=ball.innerHTML-0
          var three2=ball2.innerHTML-0
          var money18=money1.innerHTML-0
          var money19=money2.innerHTML-0
          ball4.innerHTML=three1+three2
         money4.innerHTML=money18+money19
        }
        if(!shoppingcart3.offsetHeight&&!shoppingcart2.offsetHeight){
          var three3=ball.innerHTML
          ball4.innerHTML=three3
          var money20=money1.innerHTML-0
         money4.innerHTML=money20
        }
        if(!shoppingcart3.offsetHeight&&!shoppingcart1.offsetHeight){
          var three4=ball2.innerHTML
          ball4.innerHTML=three4
          var money21=money2.innerHTML-0
         money4.innerHTML=money21
        }
    }else{
      yi3.innerHTML=1
    }
  }
 
}

function fmm(){
  index2++
  app3+=758
  yi3.innerHTML=index2
  ball3.innerHTML=index2
  money3.innerHTML=app3
  qw()
}
 function qw(){
 var arrr1=money1.innerHTML-0

 var arrr2=money2.innerHTML-0
 var arr3=money3.innerHTML-0
 money4.innerHTML=arrr1+arrr2+arr3
 var tyu=ball.innerHTML-0
 var tyu1=ball2.innerHTML-0
 var ytu3=ball3.innerHTML-0
 ball4.innerHTML=tyu+tyu1+ytu3
 }
 
// 轮播图部分
var mySwiper = new Swiper ('.swiper', {
  direction: 'horizontal', // 垂直切换选项
  loop: true, // 循环模式选项
  // autoplay:true,
  autoplay: {
  delay: 2000,
  stopOnLastSlide: false,
  disableOnInteraction: false,
  },
   pagination: {
    el: '.swiper-pagination',
  //   type:'custom',
    clickable :true,
  },
  
})   
  
// 轮播图 菜单栏部分
var nav =document.getElementsByClassName('nav')[0]
var nav1=nav.children
// console.log(nav1)

var sildeshow1=document.getElementsByClassName('slideshow1')
// 获取轮播图样式
var swiper=document.getElementsByClassName('swiper')[0]

// 第二个
var classifyright=document.getElementsByClassName('classify-right')[0]
// 搜索下拉框的部分
var classify=document.getElementsByClassName('classify')[0]
// console.log(sildeshow1)
for(var i=1;i<nav1.length;i++){
  nav1[i].setAttribute('index',i)
  nav1[i].onmouseover=function(){
    for(var j=1;j<sildeshow1.length;j++){
       index=this.getAttribute('index');
      // console.log(index)
      nav1[j].id = '';
      nav1[index].id = 'li1';
      swiper.style.display='none'
      classifyright.style.display='none'
      
    }
   for(var k=0;k<sildeshow1.length;k++){
    sildeshow1[k].style.display='none'
    sildeshow1[index-1].style.display='block'
    // sildeshow1[k].id='sildeshow1'
    sildeshow1[index-1].id=''
    sildeshow1[index-1].id='slideshow1'
   }
  }
  nav1[i].onmouseout=function(){
    sildeshow1[index-1].id=''
  }

  classify.onmouseleave=function(){
    swiper.style.display='block'
    classifyright.style.display='block'
    sildeshow1[index-1].style.display='none'
    nav1[index].id=''
    
  }
}
