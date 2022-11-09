//第一个差好按钮
var close1=document.getElementById('close')
//第二个差好按钮
var close2=document.getElementById('close3')
//第三个差好按钮
var close3_=document.getElementById('close2')
// 购物车总样式
// 组合购买
var buy=document.getElementById('buy')
var shoppingcart_=document.getElementsByClassName('shoppingcart')[0]
var body_= document.getElementsByTagName('body')[0]
close1.onclick=function(){
var a=confirm('确定要删除吗')
if(a){
    shoppingcart_.removeChild(shoppingcart1)
      shoppingcart_.style.height=shoppingcart_.offsetHeight-140+'px'
}
}
close3_.onclick=function(){
  var b=confirm('确定要删除吗')
  if(b){
    shoppingcart_.removeChild(shoppingcart3)
    shoppingcart_.style.height=shoppingcart_.offsetHeight-150+'px'
             
  }
  }
  close2.onclick=function(){
    var b=confirm('确定要删除吗')
    if(b){
        shoppingcart_.removeChild(shoppingcart2)
        shoppingcart_.style.height=shoppingcart_.offsetHeight-100+'px'
    }
    }
    //购物车鼠标放置样式显示
 var shopping=document.getElementsByClassName('shopping')[0]
 shopping.onmouseenter=function(){
  shoppingcart_.style.display='block'
 }
 body_.onmouseleave=function(){
  shoppingcart_.style.display='none'
 }
//  第一加减
var yi=document.getElementById('yi')
var shoppingcart1=document.getElementsByClassName('shoppingcart1')[0]
var shoppingcart3=document.getElementsByClassName('shoppingcart3')[0]
var shoppingcart2=document.getElementsByClassName('shoppingcart2')[0]
var index=0
function fn(){
  if(index>1){
    index-- 
    yi.innerHTML=index
   
  }else{
 var d=confirm('确定删除')
    if(d){
      shoppingcart_.removeChild(shoppingcart1)
      shoppingcart_.style.height=shoppingcart_.offsetHeight-140+'px'
    }else{
      yi.innerHTML=1
    }
  }
}
function fnn(){
  index++
  yi.innerHTML=index
}

// 第二个加减
var yi_=document.getElementById('yi1')
// var shoppingcart2=document.getElementsByClassName('shoppingcart2')[0]
var index=0
function fu(){
  if(index>1){
    index-- 
    yi_.innerHTML=index
   
  }else{
 var d=confirm('确定删除')
    if(d){
      shoppingcart_.removeChild(shoppingcart2)
      shoppingcart_.style.height=shoppingcart_.offsetHeight-100+'px'
    }else{
      yi_.innerHTML=1
    }
  }
}
function fuu(){
  index++
  yi_.innerHTML=index
}
// 第三个加减
var yi3=document.getElementById('yi2')
// var shoppingcart3=document.getElementsByClassName('shoppingcart3')[0]
var index=0
function fm(){
  if(index>1){
    index-- 
    yi3.innerHTML=index
   
  }else{
 var d=confirm('确定删除')
    if(d){
      shoppingcart_.removeChild(shoppingcart3)
      shoppingcart_.style.height=shoppingcart_.offsetHeight-150+'px'
   
    }else{
      yi3.innerHTML=1
    }
  }
}
function fmm(){
  index++
  yi3.innerHTML=index
}
// 上面是购物车js 选择商品
// 获取本店价格
var quu=[1786,3000,4000]
var quu2=[3886,4886,5886]
var price1=document.getElementById('price-1')
// 参考价格】
var price2=document.getElementById('price-2')
// 获取尺码
var sizedimension=document.getElementsByClassName('sizedimension')
// 获取颜色选择
var colorselection=document.getElementsByClassName('colorselection')
for(var i=0;i<sizedimension.length;i++){
  sizedimension[i].setAttribute('index',i)
  sizedimension[i].onclick=function(){
    for(var j=0;j<sizedimension.length;j++){
  var index=this.getAttribute('index')
  sizedimension[j].id=''
  sizedimension[index].id='sizedimension1'
  price1.innerHTML=quu[index]
  price2.innerHTML=quu2[index]
    }
  }
}
var quu1=[6000,8000]
var quu3=[3886,8767]
for(var k=0;k<colorselection.length;k++){
    colorselection[k].setAttribute('index1',k)
    colorselection[k].onclick=function(){
    for(var y=0;y<colorselection.length;y++){var index1=this.getAttribute('index1')
   colorselection[y].id=''
   colorselection[index1].id='colorselection1' }
    price1.innerHTML=quu1[index1]
    price2.innerHTML=quu3[index1]
    }
}
// 爱心
var attention=document.getElementById('attention')
var index=0
attention.onclick=function(){
        index++
        if(index%2==0){
            attention.style.backgroundImage="url(images/care.png)"
        }else{
            attention.style.backgroundImage="url('images/heart.png')"
        }
   }
// 组合购买js
// 获取单选按钮
var checkbox1=document.getElementById('checkbox1')
var checkbox2=document.getElementById('checkbox2')
var checkbox3=document.getElementById('checkbox3')
// var checkbox4=document.getElementsByClassName('checkbox1')
// console.log(checkbox4)
// 获取span的值
var basketball1=document.getElementById('basketball1')
var basketball2=document.getElementById('basketball2')
var basketball3=document.getElementById('basketball3')
var basketball4=document.getElementById('basketball4')

var nternationa=document.getElementById('nternationa4-1')
checkbox1.onclick=function(){
  if(checkbox1.checked==true){
    basketball4.innerHTML=76
    nternationa.innerHTML=1
    buy.onclick=function (){
      // var box20=document.getElementsByClassName('shoppingcart1-2')[0]
      //  box20.className=shoppingcart1-2
      //   shoppingcart_.className='shoppingcart'
    
       var div1=document.createElement('div');
       div1.className='shoppingcart1-2'
    // 
       var div2=document.createElement('div');
       div2.className='shoppingcart1-1-img'
       var img=document.createElement('img');
       img.setAttribute('src', './images/mat_1.jpg' );
       div2.appendChild(img)
    // 
    
      var ul=document.createElement('ul');
      ul.className='treasure'
      var li1=document.createElement('li')
      li1.innerHTML='海瞳ui水滴形天然珍珠项链'
      var button1=document.createElement('button')
      button1.id='close2'
      var img2=document.createElement('img');
      img2.setAttribute('src', './images/a_close.png' );
     
      var li2=document.createElement('li')
      li2.innerHTML='天然珍珠项链'
      // 
      var li3=document.createElement('li')
      var button2=document.createElement('button')
      button2.innerHTML='-'
      button2.id='jian2'
      var span1=document.createElement('span')
      span1.innerHTML='1'
      span1.id='yi1'
      var button3=document.createElement('button')
      button2.id='jia2'
      button3.innerHTML='+'
      var span2=document.createElement('span')
      span2.innerHTML='￥198.00'
      // 
      
     li1.appendChild(button1)
    button1.appendChild(img2)
    li1.appendChild(button1)
    li3.appendChild(button2)
    li3.appendChild(span1)
    li3.appendChild(button3)
    li3.appendChild(span2)
     ul.appendChild(li1)
     ul.appendChild(li2)
     ul.appendChild(li3)
     div1.appendChild(div2)
    div1.appendChild(ul)
      shoppingcart_.insertBefore(div1, shoppingcart_.firstElementChild);
    }
  }
  if(checkbox2.checked==true&&checkbox1.checked==true){
    basketball4.innerHTML=152
    nternationa.innerHTML=2
    buy.onclick=function (){
       var div1=document.createElement('div');
       div1.className='shoppingcart1-2'
   
       var div2=document.createElement('div');
       div2.className='shoppingcart1-1-img'
       var img=document.createElement('img');
       img.setAttribute('src', './images/mat_1.jpg' );
       div2.appendChild(img)
     
    
      var ul=document.createElement('ul');
      ul.className='treasure'
      var li1=document.createElement('li')
      li1.innerHTML='海瞳ui水滴形天然珍珠项链'
      var button1=document.createElement('button')
      button1.id='close2'
      var img2=document.createElement('img');
      img2.setAttribute('src', './images/a_close.png' );
     
      var li2=document.createElement('li')
      li2.innerHTML='天然珍珠项链'
      // 
      var li3=document.createElement('li')
      var button2=document.createElement('button')
      button2.innerHTML='-'
      button2.id='jian2'
      var span1=document.createElement('span')
      span1.innerHTML='1'
      span1.id='yi1'
      var button3=document.createElement('button')
      button2.id='jia2'
      button3.innerHTML='+'
      var span2=document.createElement('span')
      span2.innerHTML='￥198.00'
      // 
      
     li1.appendChild(button1)
    button1.appendChild(img2)
    li1.appendChild(button1)
    li3.appendChild(button2)
    li3.appendChild(span1)
    li3.appendChild(button3)
    li3.appendChild(span2)
     ul.appendChild(li1)
     ul.appendChild(li2)
     ul.appendChild(li3)
     div1.appendChild(div2)
    div1.appendChild(ul)
      shoppingcart_.insertBefore(div1, shoppingcart_.firstElementChild);
    }
    var div1=document.createElement('div');
       div1.className='shoppingcart1-2'
    // 
       var div2=document.createElement('div');
       div2.className='shoppingcart1-1-img'
       var img=document.createElement('img');
       img.setAttribute('src', './images/mat_2.jpg' );
       div2.appendChild(img)
    // 
    
      var ul=document.createElement('ul');
      ul.className='treasure'
      var li1=document.createElement('li')
      li1.innerHTML='海瞳ui水滴形天然珍珠项链'
      var button1=document.createElement('button')
      button1.id='close2'
      var img2=document.createElement('img');
      img2.setAttribute('src', './images/a_close.png' );
     
      var li2=document.createElement('li')
      li2.innerHTML='天然珍珠项链'
      // 
      var li3=document.createElement('li')
      var button2=document.createElement('button')
      button2.innerHTML='-'
      button2.id='jian2'
      var span1=document.createElement('span')
      span1.innerHTML='1'
      span1.id='yi1'
      var button3=document.createElement('button')
      button2.id='jia2'
      button3.innerHTML='+'
      var span2=document.createElement('span')
      span2.innerHTML='￥198.00'
      // 
      
     li1.appendChild(button1)
    button1.appendChild(img2)
    li1.appendChild(button1)
    li3.appendChild(button2)
    li3.appendChild(span1)
    li3.appendChild(button3)
    li3.appendChild(span2)
     ul.appendChild(li1)
     ul.appendChild(li2)
     ul.appendChild(li3)
     div1.appendChild(div2)
    div1.appendChild(ul)
      shoppingcart_.insertBefore(div1, shoppingcart_.firstElementChild);
  }
  if(checkbox3.checked==true&&checkbox1.checked==true){
    basketball4.innerHTML=152
    nternationa.innerHTML=2
    buy.onclick=function (){
      var div1=document.createElement('div');
      div1.className='shoppingcart1-2'
  
      var div2=document.createElement('div');
      div2.className='shoppingcart1-1-img'
      var img=document.createElement('img');
      img.setAttribute('src', './images/mat_1.jpg' );
      div2.appendChild(img)
    
   
     var ul=document.createElement('ul');
     ul.className='treasure'
     var li1=document.createElement('li')
     li1.innerHTML='海瞳ui水滴形天然珍珠项链'
     var button1=document.createElement('button')
     button1.id='close2'
     var img2=document.createElement('img');
     img2.setAttribute('src', './images/a_close.png' );
    
     var li2=document.createElement('li')
     li2.innerHTML='天然珍珠项链'
     // 
     var li3=document.createElement('li')
     var button2=document.createElement('button')
     button2.innerHTML='-'
     button2.id='jian2'
     var span1=document.createElement('span')
     span1.innerHTML='1'
     span1.id='yi1'
     var button3=document.createElement('button')
     button2.id='jia2'
     button3.innerHTML='+'
     var span2=document.createElement('span')
     span2.innerHTML='￥198.00'
     // 
     
    li1.appendChild(button1)
   button1.appendChild(img2)
   li1.appendChild(button1)
   li3.appendChild(button2)
   li3.appendChild(span1)
   li3.appendChild(button3)
   li3.appendChild(span2)
    ul.appendChild(li1)
    ul.appendChild(li2)
    ul.appendChild(li3)
    div1.appendChild(div2)
   div1.appendChild(ul)
     shoppingcart_.insertBefore(div1, shoppingcart_.firstElementChild);
     var div1=document.createElement('div');
      div1.className='shoppingcart1-2'
  
      var div2=document.createElement('div');
      div2.className='shoppingcart1-1-img'
      var img=document.createElement('img');
      img.setAttribute('src', './images/mat_3.jpg' );
      div2.appendChild(img)
    
   
     var ul=document.createElement('ul');
     ul.className='treasure'
     var li1=document.createElement('li')
     li1.innerHTML='海瞳ui水滴形天然珍珠项链'
     var button1=document.createElement('button')
     button1.id='close2'
     var img2=document.createElement('img');
     img2.setAttribute('src', './images/a_close.png' );
    
     var li2=document.createElement('li')
     li2.innerHTML='天然珍珠项链'
     // 
     var li3=document.createElement('li')
     var button2=document.createElement('button')
     button2.innerHTML='-'
     button2.id='jian2'
     var span1=document.createElement('span')
     span1.innerHTML='1'
     span1.id='yi1'
     var button3=document.createElement('button')
     button2.id='jia2'
     button3.innerHTML='+'
     var span2=document.createElement('span')
     span2.innerHTML='￥198.00'
     // 
     
    li1.appendChild(button1)
   button1.appendChild(img2)
   li1.appendChild(button1)
   li3.appendChild(button2)
   li3.appendChild(span1)
   li3.appendChild(button3)
   li3.appendChild(span2)
    ul.appendChild(li1)
    ul.appendChild(li2)
    ul.appendChild(li3)
    div1.appendChild(div2)
   div1.appendChild(ul)
     shoppingcart_.insertBefore(div1, shoppingcart_.firstElementChild);
   }
  }
  if(checkbox2.checked==true&&checkbox1.checked==true&&checkbox3.checked==true){
    basketball4.innerHTML=228
    nternationa.innerHTML=3
    buy.onclick=function (){
      var div1=document.createElement('div');
      div1.className='shoppingcart1-2'
  
      var div2=document.createElement('div');
      div2.className='shoppingcart1-1-img'
      var img=document.createElement('img');
      img.setAttribute('src', './images/mat_1.jpg' );
      div2.appendChild(img)
    
   
     var ul=document.createElement('ul');
     ul.className='treasure'
     var li1=document.createElement('li')
     li1.innerHTML='海瞳ui水滴形天然珍珠项链'
     var button1=document.createElement('button')
     button1.id='close2'
     var img2=document.createElement('img');
     img2.setAttribute('src', './images/a_close.png' );
    
     var li2=document.createElement('li')
     li2.innerHTML='天然珍珠项链'
     // 
     var li3=document.createElement('li')
     var button2=document.createElement('button')
     button2.innerHTML='-'
     button2.id='jian2'
     var span1=document.createElement('span')
     span1.innerHTML='1'
     span1.id='yi1'
     var button3=document.createElement('button')
     button2.id='jia2'
     button3.innerHTML='+'
     var span2=document.createElement('span')
     span2.innerHTML='￥198.00'
     // 
     
    li1.appendChild(button1)
   button1.appendChild(img2)
   li1.appendChild(button1)
   li3.appendChild(button2)
   li3.appendChild(span1)
   li3.appendChild(button3)
   li3.appendChild(span2)
    ul.appendChild(li1)
    ul.appendChild(li2)
    ul.appendChild(li3)
    div1.appendChild(div2)
   div1.appendChild(ul)
     shoppingcart_.insertBefore(div1, shoppingcart_.firstElementChild);
      div1=document.createElement('div');
      div1.className='shoppingcart1-2'
  
      var div2=document.createElement('div');
      div2.className='shoppingcart1-1-img'
      var img=document.createElement('img');
      img.setAttribute('src', './images/mat_3.jpg' );
      div2.appendChild(img)
    
   
     var ul=document.createElement('ul');
     ul.className='treasure'
     var li1=document.createElement('li')
     li1.innerHTML='海瞳ui水滴形天然珍珠项链'
     var button1=document.createElement('button')
     button1.id='close2'
     var img2=document.createElement('img');
     img2.setAttribute('src', './images/a_close.png' );
    
     var li2=document.createElement('li')
     li2.innerHTML='天然珍珠项链'
     // 
     var li3=document.createElement('li')
     var button2=document.createElement('button')
     button2.innerHTML='-'
     button2.id='jian2'
     var span1=document.createElement('span')
     span1.innerHTML='1'
     span1.id='yi1'
     var button3=document.createElement('button')
     button2.id='jia2'
     button3.innerHTML='+'
     var span2=document.createElement('span')
     span2.innerHTML='￥198.00'
     // 
     
    li1.appendChild(button1)
   button1.appendChild(img2)
   li1.appendChild(button1)
   li3.appendChild(button2)
   li3.appendChild(span1)
   li3.appendChild(button3)
   li3.appendChild(span2)
    ul.appendChild(li1)
    ul.appendChild(li2)
    ul.appendChild(li3)
    div1.appendChild(div2)
   div1.appendChild(ul)
     shoppingcart_.insertBefore(div1, shoppingcart_.firstElementChild);
    }
  }
  if(checkbox1.checked==false){
    basketball4.innerHTML=152
    nternationa.innerHTML=2
  }
  if(checkbox1.checked==false&&checkbox2.checked==false){
    basketball4.innerHTML=76
    nternationa.innerHTML=1
  }
  if(checkbox1.checked==false&&checkbox3.checked==false){
    basketball4.innerHTML=76
    nternationa.innerHTML=1
  }
  if(checkbox1.checked==false&&checkbox2.checked==false&&checkbox3.checked==false){
    basketball4.innerHTML=0
    nternationa.innerHTML=0
  }
}
checkbox2.onclick=function(){
  if(checkbox2.checked==true){
    basketball4.innerHTML=76
    nternationa.innerHTML=1
    buy.onclick=function (){
      // var box20=document.getElementsByClassName('shoppingcart1-2')[0]
      //  box20.className=shoppingcart1-2
      //   shoppingcart_.className='shoppingcart'
    
       var div1=document.createElement('div');
       div1.className='shoppingcart1-2'
    // 
       var div2=document.createElement('div');
       div2.className='shoppingcart1-1-img'
       var img=document.createElement('img');
       img.setAttribute('src', './images/mat_2.jpg' );
       div2.appendChild(img)
    // 
    
      var ul=document.createElement('ul');
      ul.className='treasure'
      var li1=document.createElement('li')
      li1.innerHTML='海瞳ui水滴形天然珍珠项链'
      var button1=document.createElement('button')
      button1.id='close2'
      var img2=document.createElement('img');
      img2.setAttribute('src', './images/a_close.png' );
     
      var li2=document.createElement('li')
      li2.innerHTML='天然珍珠项链'
      // 
      var li3=document.createElement('li')
      var button2=document.createElement('button')
      button2.innerHTML='-'
      button2.id='jian2'
      var span1=document.createElement('span')
      span1.innerHTML='1'
      span1.id='yi1'
      var button3=document.createElement('button')
      button2.id='jia2'
      button3.innerHTML='+'
      var span2=document.createElement('span')
      span2.innerHTML='￥198.00'
      // 
      
     li1.appendChild(button1)
    button1.appendChild(img2)
    li1.appendChild(button1)
    li3.appendChild(button2)
    li3.appendChild(span1)
    li3.appendChild(button3)
    li3.appendChild(span2)
     ul.appendChild(li1)
     ul.appendChild(li2)
     ul.appendChild(li3)
     div1.appendChild(div2)
    div1.appendChild(ul)
      shoppingcart_.insertBefore(div1, shoppingcart_.firstElementChild);
    }
  }
 if(checkbox2.checked==true&&checkbox1.checked==true){
    basketball4.innerHTML=152
    nternationa.innerHTML=2
    buy.onclick=function (){
     
       var div1=document.createElement('div');
       div1.className='shoppingcart1-2'
    // 
       var div2=document.createElement('div');
       div2.className='shoppingcart1-1-img'
       var img=document.createElement('img');
       img.setAttribute('src', './images/mat_1.jpg' );
       div2.appendChild(img)
    // 
    
      var ul=document.createElement('ul');
      ul.className='treasure'
      var li1=document.createElement('li')
      li1.innerHTML='海瞳ui水滴形天然珍珠项链'
      var button1=document.createElement('button')
      button1.id='close2'
      var img2=document.createElement('img');
      img2.setAttribute('src', './images/a_close.png' );
     
      var li2=document.createElement('li')
      li2.innerHTML='天然珍珠项链'
      // 
      var li3=document.createElement('li')
      var button2=document.createElement('button')
      button2.innerHTML='-'
      button2.id='jian2'
      var span1=document.createElement('span')
      span1.innerHTML='1'
      span1.id='yi1'
      var button3=document.createElement('button')
      button2.id='jia2'
      button3.innerHTML='+'
      var span2=document.createElement('span')
      span2.innerHTML='￥198.00'
      // 
      
     li1.appendChild(button1)
    button1.appendChild(img2)
    li1.appendChild(button1)
    li3.appendChild(button2)
    li3.appendChild(span1)
    li3.appendChild(button3)
    li3.appendChild(span2)
     ul.appendChild(li1)
     ul.appendChild(li2)
     ul.appendChild(li3)
     div1.appendChild(div2)
    div1.appendChild(ul)
      shoppingcart_.insertBefore(div1, shoppingcart_.firstElementChild);
      var div1=document.createElement('div');
      div1.className='shoppingcart1-2'
   // 
      var div2=document.createElement('div');
      div2.className='shoppingcart1-1-img'
      var img=document.createElement('img');
      img.setAttribute('src', './images/mat_1.jpg' );
      div2.appendChild(img)
   // 
   
     var ul=document.createElement('ul');
     ul.className='treasure'
     var li1=document.createElement('li')
     li1.innerHTML='海瞳ui水滴形天然珍珠项链'
     var button1=document.createElement('button')
     button1.id='close2'
     var img2=document.createElement('img');
     img2.setAttribute('src', './images/a_close.png' );
    
     var li2=document.createElement('li')
     li2.innerHTML='天然珍珠项链'
     // 
     var li3=document.createElement('li')
     var button2=document.createElement('button')
     button2.innerHTML='-'
     button2.id='jian2'
     var span1=document.createElement('span')
     span1.innerHTML='1'
     span1.id='yi1'
     var button3=document.createElement('button')
     button2.id='jia2'
     button3.innerHTML='+'
     var span2=document.createElement('span')
     span2.innerHTML='￥198.00'
     // 
     
    li1.appendChild(button1)
   button1.appendChild(img2)
   li1.appendChild(button1)
   li3.appendChild(button2)
   li3.appendChild(span1)
   li3.appendChild(button3)
   li3.appendChild(span2)
    ul.appendChild(li1)
    ul.appendChild(li2)
    ul.appendChild(li3)
    div1.appendChild(div2)
   div1.appendChild(ul)
     shoppingcart_.insertBefore(div1, shoppingcart_.firstElementChild);
    }
  }
  if(checkbox2.checked==true&&checkbox3.checked==true){
    basketball4.innerHTML=152
    nternationa.innerHTML=2
    buy.onclick=function (){
     
      var div1=document.createElement('div');
      div1.className='shoppingcart1-2'
   // 
      var div2=document.createElement('div');
      div2.className='shoppingcart1-1-img'
      var img=document.createElement('img');
      img.setAttribute('src', './images/mat_2.jpg' );
      div2.appendChild(img)
   // 
   
     var ul=document.createElement('ul');
     ul.className='treasure'
     var li1=document.createElement('li')
     li1.innerHTML='海瞳ui水滴形天然珍珠项链'
     var button1=document.createElement('button')
     button1.id='close2'
     var img2=document.createElement('img');
     img2.setAttribute('src', './images/a_close.png' );
    
     var li2=document.createElement('li')
     li2.innerHTML='天然珍珠项链'
     // 
     var li3=document.createElement('li')
     var button2=document.createElement('button')
     button2.innerHTML='-'
     button2.id='jian2'
     var span1=document.createElement('span')
     span1.innerHTML='1'
     span1.id='yi1'
     var button3=document.createElement('button')
     button2.id='jia2'
     button3.innerHTML='+'
     var span2=document.createElement('span')
     span2.innerHTML='￥198.00'
     // 
     
    li1.appendChild(button1)
   button1.appendChild(img2)
   li1.appendChild(button1)
   li3.appendChild(button2)
   li3.appendChild(span1)
   li3.appendChild(button3)
   li3.appendChild(span2)
    ul.appendChild(li1)
    ul.appendChild(li2)
    ul.appendChild(li3)
    div1.appendChild(div2)
   div1.appendChild(ul)
     shoppingcart_.insertBefore(div1, shoppingcart_.firstElementChild);
     var div1=document.createElement('div');
     div1.className='shoppingcart1-2'
  // 
     var div2=document.createElement('div');
     div2.className='shoppingcart1-1-img'
     var img=document.createElement('img');
     img.setAttribute('src', './images/mat_3.jpg' );
     div2.appendChild(img)
  // 
  
    var ul=document.createElement('ul');
    ul.className='treasure'
    var li1=document.createElement('li')
    li1.innerHTML='海瞳ui水滴形天然珍珠项链'
    var button1=document.createElement('button')
    button1.id='close2'
    var img2=document.createElement('img');
    img2.setAttribute('src', './images/a_close.png' );
   
    var li2=document.createElement('li')
    li2.innerHTML='天然珍珠项链'
    // 
    var li3=document.createElement('li')
    var button2=document.createElement('button')
    button2.innerHTML='-'
    button2.id='jian2'
    var span1=document.createElement('span')
    span1.innerHTML='1'
    span1.id='yi1'
    var button3=document.createElement('button')
    button2.id='jia2'
    button3.innerHTML='+'
    var span2=document.createElement('span')
    span2.innerHTML='￥198.00'
    // 
    
   li1.appendChild(button1)
  button1.appendChild(img2)
  li1.appendChild(button1)
  li3.appendChild(button2)
  li3.appendChild(span1)
  li3.appendChild(button3)
  li3.appendChild(span2)
   ul.appendChild(li1)
   ul.appendChild(li2)
   ul.appendChild(li3)
   div1.appendChild(div2)
  div1.appendChild(ul)
    shoppingcart_.insertBefore(div1, shoppingcart_.firstElementChild);
   }
  }
  if(checkbox2.checked==true&&checkbox1.checked==true&&checkbox3.checked==true){
    basketball4.innerHTML=228
    nternationa.innerHTML=3
    buy.onclick=function (){
     
      var div1=document.createElement('div');
      div1.className='shoppingcart1-2'
   // 
      var div2=document.createElement('div');
      div2.className='shoppingcart1-1-img'
      var img=document.createElement('img');
      img.setAttribute('src', './images/mat_2.jpg' );
      div2.appendChild(img)
   // 
   
     var ul=document.createElement('ul');
     ul.className='treasure'
     var li1=document.createElement('li')
     li1.innerHTML='海瞳ui水滴形天然珍珠项链'
     var button1=document.createElement('button')
     button1.id='close2'
     var img2=document.createElement('img');
     img2.setAttribute('src', './images/a_close.png' );
    
     var li2=document.createElement('li')
     li2.innerHTML='天然珍珠项链'
     // 
     var li3=document.createElement('li')
     var button2=document.createElement('button')
     button2.innerHTML='-'
     button2.id='jian2'
     var span1=document.createElement('span')
     span1.innerHTML='1'
     span1.id='yi1'
     var button3=document.createElement('button')
     button2.id='jia2'
     button3.innerHTML='+'
     var span2=document.createElement('span')
     span2.innerHTML='￥198.00'
     // 
     
    li1.appendChild(button1)
   button1.appendChild(img2)
   li1.appendChild(button1)
   li3.appendChild(button2)
   li3.appendChild(span1)
   li3.appendChild(button3)
   li3.appendChild(span2)
    ul.appendChild(li1)
    ul.appendChild(li2)
    ul.appendChild(li3)
    div1.appendChild(div2)
   div1.appendChild(ul)
     shoppingcart_.insertBefore(div1, shoppingcart_.firstElementChild);
     var div1=document.createElement('div');
     div1.className='shoppingcart1-2'
  // 
     var div2=document.createElement('div');
     div2.className='shoppingcart1-1-img'
     var img=document.createElement('img');
     img.setAttribute('src', './images/mat_3.jpg' );
     div2.appendChild(img)
  // 
  
    var ul=document.createElement('ul');
    ul.className='treasure'
    var li1=document.createElement('li')
    li1.innerHTML='海瞳ui水滴形天然珍珠项链'
    var button1=document.createElement('button')
    button1.id='close2'
    var img2=document.createElement('img');
    img2.setAttribute('src', './images/a_close.png' );
   
    var li2=document.createElement('li')
    li2.innerHTML='天然珍珠项链'
    // 
    var li3=document.createElement('li')
    var button2=document.createElement('button')
    button2.innerHTML='-'
    button2.id='jian2'
    var span1=document.createElement('span')
    span1.innerHTML='1'
    span1.id='yi1'
    var button3=document.createElement('button')
    button2.id='jia2'
    button3.innerHTML='+'
    var span2=document.createElement('span')
    span2.innerHTML='￥198.00'
    // 
    
   li1.appendChild(button1)
  button1.appendChild(img2)
  li1.appendChild(button1)
  li3.appendChild(button2)
  li3.appendChild(span1)
  li3.appendChild(button3)
  li3.appendChild(span2)
   ul.appendChild(li1)
   ul.appendChild(li2)
   ul.appendChild(li3)
   div1.appendChild(div2)
  div1.appendChild(ul)
    shoppingcart_.insertBefore(div1, shoppingcart_.firstElementChild);

    var div1=document.createElement('div');
      div1.className='shoppingcart1-2'
   // 
      var div2=document.createElement('div');
      div2.className='shoppingcart1-1-img'
      var img=document.createElement('img');
      img.setAttribute('src', './images/mat_1.jpg' );
      div2.appendChild(img)
   // 
   
     var ul=document.createElement('ul');
     ul.className='treasure'
     var li1=document.createElement('li')
     li1.innerHTML='海瞳ui水滴形天然珍珠项链'
     var button1=document.createElement('button')
     button1.id='close2'
     var img2=document.createElement('img');
     img2.setAttribute('src', './images/a_close.png' );
    
     var li2=document.createElement('li')
     li2.innerHTML='天然珍珠项链'
     // 
     var li3=document.createElement('li')
     var button2=document.createElement('button')
     button2.innerHTML='-'
     button2.id='jian2'
     var span1=document.createElement('span')
     span1.innerHTML='1'
     span1.id='yi1'
     var button3=document.createElement('button')
     button2.id='jia2'
     button3.innerHTML='+'
     var span2=document.createElement('span')
     span2.innerHTML='￥198.00'
     // 
     
    li1.appendChild(button1)
   button1.appendChild(img2)
   li1.appendChild(button1)
   li3.appendChild(button2)
   li3.appendChild(span1)
   li3.appendChild(button3)
   li3.appendChild(span2)
    ul.appendChild(li1)
    ul.appendChild(li2)
    ul.appendChild(li3)
    div1.appendChild(div2)
   div1.appendChild(ul)
     shoppingcart_.insertBefore(div1, shoppingcart_.firstElementChild);
   }
  }

  if(checkbox2.checked==false){
    basketball4.innerHTML=152
    nternationa.innerHTML=2
  }
  if(checkbox1.checked==false&&checkbox2.checked==false){
    basketball4.innerHTML=76
    nternationa.innerHTML=1
  }
  if(checkbox3.checked==false&&checkbox2.checked==false){
    basketball4.innerHTML=76
    nternationa.innerHTML=1
  }
  if(checkbox1.checked==false&&checkbox2.checked==false&&checkbox3.checked==false){
    basketball4.innerHTML=0
    nternationa.innerHTML=0
  }
}
// 
checkbox3.onclick=function bn(){
  if(checkbox3.checked==true){
    basketball4.innerHTML=76
    nternationa.innerHTML=1
    buy.onclick=function (){
      // var box20=document.getElementsByClassName('shoppingcart1-2')[0]
      //  box20.className=shoppingcart1-2
      //   shoppingcart_.className='shoppingcart'
    
       var div1=document.createElement('div');
       div1.className='shoppingcart1-2'
    // 
       var div2=document.createElement('div');
       div2.className='shoppingcart1-1-img'
       var img=document.createElement('img');
       img.setAttribute('src', './images/mat_3.jpg' );
       div2.appendChild(img)
    // 
    
      var ul=document.createElement('ul');
      ul.className='treasure'
      var li1=document.createElement('li')
      li1.innerHTML='海瞳ui水滴形天然珍珠项链'
      var button1=document.createElement('button')
      button1.id='close2'
      var img2=document.createElement('img');
      img2.setAttribute('src', './images/a_close.png' );
     
      var li2=document.createElement('li')
      li2.innerHTML='天然珍珠项链'
      // 
      var li3=document.createElement('li')
      var button2=document.createElement('button')
      button2.innerHTML='-'
      button2.id='jian2'
      var span1=document.createElement('span')
      span1.innerHTML='1'
      span1.id='yi1'
      var button3=document.createElement('button')
      button2.id='jia2'
      button3.innerHTML='+'
      var span2=document.createElement('span')
      span2.innerHTML='￥198.00'
      // 
      
     li1.appendChild(button1)
    button1.appendChild(img2)
    li1.appendChild(button1)
    li3.appendChild(button2)
    li3.appendChild(span1)
    li3.appendChild(button3)
    li3.appendChild(span2)
     ul.appendChild(li1)
     ul.appendChild(li2)
     ul.appendChild(li3)
     div1.appendChild(div2)
    div1.appendChild(ul)
      shoppingcart_.insertBefore(div1, shoppingcart_.firstElementChild);
    }
  }
  if(checkbox3.checked==true&&checkbox1.checked==true){
    basketball4.innerHTML=152
    nternationa.innerHTML=2
    buy.onclick=function (){
      // var box20=document.getElementsByClassName('shoppingcart1-2')[0]
      //  box20.className=shoppingcart1-2
      //   shoppingcart_.className='shoppingcart'
    
       var div1=document.createElement('div');
       div1.className='shoppingcart1-2'
    // 
       var div2=document.createElement('div');
       div2.className='shoppingcart1-1-img'
       var img=document.createElement('img');
       img.setAttribute('src', './images/mat_3.jpg' );
       div2.appendChild(img)
    // 
    
      var ul=document.createElement('ul');
      ul.className='treasure'
      var li1=document.createElement('li')
      li1.innerHTML='海瞳ui水滴形天然珍珠项链'
      var button1=document.createElement('button')
      button1.id='close2'
      var img2=document.createElement('img');
      img2.setAttribute('src', './images/a_close.png' );
     
      var li2=document.createElement('li')
      li2.innerHTML='天然珍珠项链'
      // 
      var li3=document.createElement('li')
      var button2=document.createElement('button')
      button2.innerHTML='-'
      button2.id='jian2'
      var span1=document.createElement('span')
      span1.innerHTML='1'
      span1.id='yi1'
      var button3=document.createElement('button')
      button2.id='jia2'
      button3.innerHTML='+'
      var span2=document.createElement('span')
      span2.innerHTML='￥198.00'
      // 
      
     li1.appendChild(button1)
    button1.appendChild(img2)
    li1.appendChild(button1)
    li3.appendChild(button2)
    li3.appendChild(span1)
    li3.appendChild(button3)
    li3.appendChild(span2)
     ul.appendChild(li1)
     ul.appendChild(li2)
     ul.appendChild(li3)
     div1.appendChild(div2)
    div1.appendChild(ul)
      shoppingcart_.insertBefore(div1, shoppingcart_.firstElementChild);
      var div1=document.createElement('div');
      div1.className='shoppingcart1-2'
   // 
      var div2=document.createElement('div');
      div2.className='shoppingcart1-1-img'
      var img=document.createElement('img');
      img.setAttribute('src', './images/mat_1.jpg' );
      div2.appendChild(img)
   // 
   
     var ul=document.createElement('ul');
     ul.className='treasure'
     var li1=document.createElement('li')
     li1.innerHTML='海瞳ui水滴形天然珍珠项链'
     var button1=document.createElement('button')
     button1.id='close2'
     var img2=document.createElement('img');
     img2.setAttribute('src', './images/a_close.png' );
    
     var li2=document.createElement('li')
     li2.innerHTML='天然珍珠项链'
     // 
     var li3=document.createElement('li')
     var button2=document.createElement('button')
     button2.innerHTML='-'
     button2.id='jian2'
     var span1=document.createElement('span')
     span1.innerHTML='1'
     span1.id='yi1'
     var button3=document.createElement('button')
     button2.id='jia2'
     button3.innerHTML='+'
     var span2=document.createElement('span')
     span2.innerHTML='￥198.00'
     // 
     
    li1.appendChild(button1)
   button1.appendChild(img2)
   li1.appendChild(button1)
   li3.appendChild(button2)
   li3.appendChild(span1)
   li3.appendChild(button3)
   li3.appendChild(span2)
    ul.appendChild(li1)
    ul.appendChild(li2)
    ul.appendChild(li3)
    div1.appendChild(div2)
   div1.appendChild(ul)
     shoppingcart_.insertBefore(div1, shoppingcart_.firstElementChild);
    }
  }
  if(checkbox3.checked==true&&checkbox2.checked==true){
    basketball4.innerHTML=152
    nternationa.innerHTML=2
    buy.onclick=function (){
      // var box20=document.getElementsByClassName('shoppingcart1-2')[0]
      //  box20.className=shoppingcart1-2
      //   shoppingcart_.className='shoppingcart'
    
       var div1=document.createElement('div');
       div1.className='shoppingcart1-2'
    // 
       var div2=document.createElement('div');
       div2.className='shoppingcart1-1-img'
       var img=document.createElement('img');
       img.setAttribute('src', './images/mat_3.jpg' );
       div2.appendChild(img)
    // 
    
      var ul=document.createElement('ul');
      ul.className='treasure'
      var li1=document.createElement('li')
      li1.innerHTML='海瞳ui水滴形天然珍珠项链'
      var button1=document.createElement('button')
      button1.id='close2'
      var img2=document.createElement('img');
      img2.setAttribute('src', './images/a_close.png' );
     
      var li2=document.createElement('li')
      li2.innerHTML='天然珍珠项链'
      // 
      var li3=document.createElement('li')
      var button2=document.createElement('button')
      button2.innerHTML='-'
      button2.id='jian2'
      var span1=document.createElement('span')
      span1.innerHTML='1'
      span1.id='yi1'
      var button3=document.createElement('button')
      button2.id='jia2'
      button3.innerHTML='+'
      var span2=document.createElement('span')
      span2.innerHTML='￥198.00'
      // 
      
     li1.appendChild(button1)
    button1.appendChild(img2)
    li1.appendChild(button1)
    li3.appendChild(button2)
    li3.appendChild(span1)
    li3.appendChild(button3)
    li3.appendChild(span2)
     ul.appendChild(li1)
     ul.appendChild(li2)
     ul.appendChild(li3)
     div1.appendChild(div2)
    div1.appendChild(ul)
      shoppingcart_.insertBefore(div1, shoppingcart_.firstElementChild);
      var div1=document.createElement('div');
      div1.className='shoppingcart1-2'
   // 
      var div2=document.createElement('div');
      div2.className='shoppingcart1-1-img'
      var img=document.createElement('img');
      img.setAttribute('src', './images/mat_2.jpg' );
      div2.appendChild(img)
   // 
   
     var ul=document.createElement('ul');
     ul.className='treasure'
     var li1=document.createElement('li')
     li1.innerHTML='海瞳ui水滴形天然珍珠项链'
     var button1=document.createElement('button')
     button1.id='close2'
     var img2=document.createElement('img');
     img2.setAttribute('src', './images/a_close.png' );
    
     var li2=document.createElement('li')
     li2.innerHTML='天然珍珠项链'
     // 
     var li3=document.createElement('li')
     var button2=document.createElement('button')
     button2.innerHTML='-'
     button2.id='jian2'
     var span1=document.createElement('span')
     span1.innerHTML='1'
     span1.id='yi1'
     var button3=document.createElement('button')
     button2.id='jia2'
     button3.innerHTML='+'
     var span2=document.createElement('span')
     span2.innerHTML='￥198.00'
     // 
     
    li1.appendChild(button1)
   button1.appendChild(img2)
   li1.appendChild(button1)
   li3.appendChild(button2)
   li3.appendChild(span1)
   li3.appendChild(button3)
   li3.appendChild(span2)
    ul.appendChild(li1)
    ul.appendChild(li2)
    ul.appendChild(li3)
    div1.appendChild(div2)
   div1.appendChild(ul)
     shoppingcart_.insertBefore(div1, shoppingcart_.firstElementChild);
    }
  }
  if(checkbox2.checked==true&&checkbox1.checked==true&&checkbox3.checked==true){
    basketball4.innerHTML=228
    nternationa.innerHTML=3

    buy.onclick=function (){
       var div1=document.createElement('div');
       div1.className='shoppingcart1-2'
    // 
       var div2=document.createElement('div');
       div2.className='shoppingcart1-1-img'
       var img=document.createElement('img');
       img.setAttribute('src', './images/mat_3.jpg' );
       div2.appendChild(img)
    // 
    
      var ul=document.createElement('ul');
      ul.className='treasure'
      var li1=document.createElement('li')
      li1.innerHTML='海瞳ui水滴形天然珍珠项链'
      var button1=document.createElement('button')
      button1.id='close2'
      var img2=document.createElement('img');
      img2.setAttribute('src', './images/a_close.png' );
     
      var li2=document.createElement('li')
      li2.innerHTML='天然珍珠项链'
      // 
      var li3=document.createElement('li')
      var button2=document.createElement('button')
      button2.innerHTML='-'
      button2.id='jian2'
      var span1=document.createElement('span')
      span1.innerHTML='1'
      span1.id='yi1'
      var button3=document.createElement('button')
      button2.id='jia2'
      button3.innerHTML='+'
      var span2=document.createElement('span')
      span2.innerHTML='￥198.00'
      // 
      
     li1.appendChild(button1)
    button1.appendChild(img2)
    li1.appendChild(button1)
    li3.appendChild(button2)
    li3.appendChild(span1)
    li3.appendChild(button3)
    li3.appendChild(span2)
     ul.appendChild(li1)
     ul.appendChild(li2)
     ul.appendChild(li3)
     div1.appendChild(div2)
    div1.appendChild(ul)
      shoppingcart_.insertBefore(div1, shoppingcart_.firstElementChild);
      var div1=document.createElement('div');
      div1.className='shoppingcart1-2'
   // 
      var div2=document.createElement('div');
      div2.className='shoppingcart1-1-img'
      var img=document.createElement('img');
      img.setAttribute('src', './images/mat_2.jpg' );
      div2.appendChild(img)
   // 
   
     var ul=document.createElement('ul');
     ul.className='treasure'
     var li1=document.createElement('li')
     li1.innerHTML='海瞳ui水滴形天然珍珠项链'
     var button1=document.createElement('button')
     button1.id='close2'
     var img2=document.createElement('img');
     img2.setAttribute('src', './images/a_close.png' );
    
     var li2=document.createElement('li')
     li2.innerHTML='天然珍珠项链'
     // 
     var li3=document.createElement('li')
     var button2=document.createElement('button')
     button2.innerHTML='-'
     button2.id='jian2'
     var span1=document.createElement('span')
     span1.innerHTML='1'
     span1.id='yi1'
     var button3=document.createElement('button')
     button2.id='jia2'
     button3.innerHTML='+'
     var span2=document.createElement('span')
     span2.innerHTML='￥198.00'
     // 
     
    li1.appendChild(button1)
   button1.appendChild(img2)
   li1.appendChild(button1)
   li3.appendChild(button2)
   li3.appendChild(span1)
   li3.appendChild(button3)
   li3.appendChild(span2)
    ul.appendChild(li1)
    ul.appendChild(li2)
    ul.appendChild(li3)
    div1.appendChild(div2)
   div1.appendChild(ul)
     shoppingcart_.insertBefore(div1, shoppingcart_.firstElementChild);
     var div1=document.createElement('div');
       div1.className='shoppingcart1-2'
    // 
       var div2=document.createElement('div');
       div2.className='shoppingcart1-1-img'
       var img=document.createElement('img');
       img.setAttribute('src', './images/mat_1.jpg' );
       div2.appendChild(img)
    // 
    
      var ul=document.createElement('ul');
      ul.className='treasure'
      var li1=document.createElement('li')
      li1.innerHTML='海瞳ui水滴形天然珍珠项链'
      var button1=document.createElement('button')
      button1.id='close2'
      var img2=document.createElement('img');
      img2.setAttribute('src', './images/a_close.png' );
     
      var li2=document.createElement('li')
      li2.innerHTML='天然珍珠项链'
      // 
      var li3=document.createElement('li')
      var button2=document.createElement('button')
      button2.innerHTML='-'
      button2.id='jian2'
      var span1=document.createElement('span')
      span1.innerHTML='1'
      span1.id='yi1'
      var button3=document.createElement('button')
      button2.id='jia2'
      button3.innerHTML='+'
      var span2=document.createElement('span')
      span2.innerHTML='￥198.00'
      // 
      
     li1.appendChild(button1)
    button1.appendChild(img2)
    li1.appendChild(button1)
    li3.appendChild(button2)
    li3.appendChild(span1)
    li3.appendChild(button3)
    li3.appendChild(span2)
     ul.appendChild(li1)
     ul.appendChild(li2)
     ul.appendChild(li3)
     div1.appendChild(div2)
    div1.appendChild(ul)
      shoppingcart_.insertBefore(div1, shoppingcart_.firstElementChild);
    }
  }
  if(checkbox3.checked==false){
    basketball4.innerHTML=152
    nternationa.innerHTML=2
  }
  if(checkbox3.checked==false&&checkbox2.checked==false){
    basketball4.innerHTML=76
    nternationa.innerHTML=1
  }
  if(checkbox3.checked==false&&checkbox1.checked==false){
    basketball4.innerHTML=76
    nternationa.innerHTML=1
  }
  if(checkbox1.checked==false&&checkbox2.checked==false&&checkbox3.checked==false){
    basketball4.innerHTML=0
    nternationa.innerHTML=0
  }
}
