//第一个差好按钮
var close1=document.getElementById('close')
//第二个差好按钮
var close2=document.getElementById('close3')
//第三个差好按钮
var close3_=document.getElementById('close2')
// 购物车总样式
var shoppingcart_=document.getElementsByClassName('shoppingcart')[0]
var body_= document.getElementsByTagName('body')[0]
close1.onclick=function(){
var a=confirm('确定要删除吗')
if(a){
  body_.removeChild(shoppingcart_)
}
}
close3_.onclick=function(){
  var b=confirm('确定要删除吗')
  if(b){
    body_.removeChild(shoppingcart_)                
  }
  }
  close2.onclick=function(){
    var b=confirm('确定要删除吗')
    if(b){
      body_.removeChild(shoppingcart_)
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
var arrt=new Array()
// 获取加入购物车按钮
var box5=document.getElementsByClassName('box5')
  box5[0].onclick=function (){
    // var box20=document.getElementsByClassName('shoppingcart1-2')[0]
    //  box20.className=shoppingcart1-2
    //   shoppingcart_.className='shoppingcart'

     var div1=document.createElement('div');
     div1.className='shoppingcart1-2'
// 
     var div2=document.createElement('div');
     div2.className='shoppingcart1-1-img'
     var img=document.createElement('img');
     img.setAttribute('src', './images/per_1.jpg' );
     div2.appendChild(img)
// 

    var ul=document.createElement('ul');
    ul.className='treasure'
    var li1=document.createElement('li')
    li1.innerHTML=' 明星款玛瑙天然淡水珍珠'
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
//
box5[1].onclick=function (){
  // var box20=document.getElementsByClassName('shoppingcart1-2')[0]
  //  box20.className=shoppingcart1-2
  //   shoppingcart_.className='shoppingcart'

   var div1=document.createElement('div');
   div1.className='shoppingcart1-2'
// 
   var div2=document.createElement('div');
   div2.className='shoppingcart1-1-img'
   var img=document.createElement('img');
   img.setAttribute('src', './images/per_2.jpg' );
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
  span2.innerHTML='￥1980.00'
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
// 
box5[2].onclick=function (){
  // var box20=document.getElementsByClassName('shoppingcart1-2')[0]
  //  box20.className=shoppingcart1-2
  //   shoppingcart_.className='shoppingcart'

   var div1=document.createElement('div');
   div1.className='shoppingcart1-2'
// 
   var div2=document.createElement('div');
   div2.className='shoppingcart1-1-img'
   var img=document.createElement('img');
   img.setAttribute('src', './images/per_3.jpg' );
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
  span2.innerHTML='￥670.00'
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


// 
box5[3].onclick=function (){
  // var box20=document.getElementsByClassName('shoppingcart1-2')[0]
  //  box20.className=shoppingcart1-2
  //   shoppingcart_.className='shoppingcart'

   var div1=document.createElement('div');
   div1.className='shoppingcart1-2'
// 
   var div2=document.createElement('div');
   div2.className='shoppingcart1-1-img'
   var img=document.createElement('img');
   img.setAttribute('src', './images/per_4.jpg' );
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
  span2.innerHTML='￥618.00'
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

// 
box5[4].onclick=function (){
  // var box20=document.getElementsByClassName('shoppingcart1-2')[0]
  //  box20.className=shoppingcart1-2
  //   shoppingcart_.className='shoppingcart'

   var div1=document.createElement('div');
   div1.className='shoppingcart1-2'
// 
   var div2=document.createElement('div');
   div2.className='shoppingcart1-1-img'
   var img=document.createElement('img');
   img.setAttribute('src', './images/per_5.jpg' );
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

// 
box5[5].onclick=function (){
  // var box20=document.getElementsByClassName('shoppingcart1-2')[0]
  //  box20.className=shoppingcart1-2
  //   shoppingcart_.className='shoppingcart'

   var div1=document.createElement('div');
   div1.className='shoppingcart1-2'
// 
   var div2=document.createElement('div');
   div2.className='shoppingcart1-1-img'
   var img=document.createElement('img');
   img.setAttribute('src', './images/per_2.jpg' );
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
// 
box5[6].onclick=function (){
  // var box20=document.getElementsByClassName('shoppingcart1-2')[0]
  //  box20.className=shoppingcart1-2
  //   shoppingcart_.className='shoppingcart'

   var div1=document.createElement('div');
   div1.className='shoppingcart1-2'
// 
   var div2=document.createElement('div');
   div2.className='shoppingcart1-1-img'
   var img=document.createElement('img');
   img.setAttribute('src', './images/per_6.jpg' );
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
// 
box5[6].onclick=function (){
  // var box20=document.getElementsByClassName('shoppingcart1-2')[0]
  //  box20.className=shoppingcart1-2
  //   shoppingcart_.className='shoppingcart'

   var div1=document.createElement('div');
   div1.className='shoppingcart1-2'
// 
   var div2=document.createElement('div');
   div2.className='shoppingcart1-1-img'
   var img=document.createElement('img');
   img.setAttribute('src', './images/per_6.jpg' );
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
}// 
box5[7].onclick=function (){
  // var box20=document.getElementsByClassName('shoppingcart1-2')[0]
  //  box20.className=shoppingcart1-2
  //   shoppingcart_.className='shoppingcart'

   var div1=document.createElement('div');
   div1.className='shoppingcart1-2'
// 
   var div2=document.createElement('div');
   div2.className='shoppingcart1-1-img'
   var img=document.createElement('img');
   img.setAttribute('src', './images/per_8.jpg' );
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
// 
box5[8].onclick=function (){
  // var box20=document.getElementsByClassName('shoppingcart1-2')[0]
  //  box20.className=shoppingcart1-2
  //   shoppingcart_.className='shoppingcart'

   var div1=document.createElement('div');
   div1.className='shoppingcart1-2'
// 
   var div2=document.createElement('div');
   div2.className='shoppingcart1-1-img'
   var img=document.createElement('img');
   img.setAttribute('src', './images/per_9.jpg' );
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

// 
box5[9].onclick=function (){
  // var box20=document.getElementsByClassName('shoppingcart1-2')[0]
  //  box20.className=shoppingcart1-2
  //   shoppingcart_.className='shoppingcart'

   var div1=document.createElement('div');
   div1.className='shoppingcart1-2'
// 
   var div2=document.createElement('div');
   div2.className='shoppingcart1-1-img'
   var img=document.createElement('img');
   img.setAttribute('src', './images/per_10.jpg' );
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

// 
box5[10].onclick=function (){
  // var box20=document.getElementsByClassName('shoppingcart1-2')[0]
  //  box20.className=shoppingcart1-2
  //   shoppingcart_.className='shoppingcart'

   var div1=document.createElement('div');
   div1.className='shoppingcart1-2'
// 
   var div2=document.createElement('div');
   div2.className='shoppingcart1-1-img'
   var img=document.createElement('img');
   img.setAttribute('src', './images/per_11.jpg' );
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

// 
box5[11].onclick=function (){
  // var box20=document.getElementsByClassName('shoppingcart1-2')[0]
  //  box20.className=shoppingcart1-2
  //   shoppingcart_.className='shoppingcart'

   var div1=document.createElement('div');
   div1.className='shoppingcart1-2'
// 
   var div2=document.createElement('div');
   div2.className='shoppingcart1-1-img'
   var img=document.createElement('img');
   img.setAttribute('src', './images/per_12.jpg' );
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

// 
box5[12].onclick=function (){
  // var box20=document.getElementsByClassName('shoppingcart1-2')[0]
  //  box20.className=shoppingcart1-2
  //   shoppingcart_.className='shoppingcart'

   var div1=document.createElement('div');
   div1.className='shoppingcart1-2'
// 
   var div2=document.createElement('div');
   div2.className='shoppingcart1-1-img'
   var img=document.createElement('img');
   img.setAttribute('src', './images/per_13.jpg' );
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

// 
box5[12].onclick=function (){
  // var box20=document.getElementsByClassName('shoppingcart1-2')[0]
  //  box20.className=shoppingcart1-2
  //   shoppingcart_.className='shoppingcart'

   var div1=document.createElement('div');
   div1.className='shoppingcart1-2'
// 
   var div2=document.createElement('div');
   div2.className='shoppingcart1-1-img'
   var img=document.createElement('img');
   img.setAttribute('src', './images/per_14.jpg' );
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

// 
box5[14].onclick=function (){
  // var box20=document.getElementsByClassName('shoppingcart1-2')[0]
  //  box20.className=shoppingcart1-2
  //   shoppingcart_.className='shoppingcart'

   var div1=document.createElement('div');
   div1.className='shoppingcart1-2'
// 
   var div2=document.createElement('div');
   div2.className='shoppingcart1-1-img'
   var img=document.createElement('img');
   img.setAttribute('src', './images/per_15.jpg' );
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

// 
box5[15].onclick=function (){
  // var box20=document.getElementsByClassName('shoppingcart1-2')[0]
  //  box20.className=shoppingcart1-2
  //   shoppingcart_.className='shoppingcart'

   var div1=document.createElement('div');
   div1.className='shoppingcart1-2'
// 
   var div2=document.createElement('div');
   div2.className='shoppingcart1-1-img'
   var img=document.createElement('img');
   img.setAttribute('src', './images/per_16.jpg' );
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

// 
box5[16].onclick=function (){
  // var box20=document.getElementsByClassName('shoppingcart1-2')[0]
  //  box20.className=shoppingcart1-2
  //   shoppingcart_.className='shoppingcart'

   var div1=document.createElement('div');
   div1.className='shoppingcart1-2'
// 
   var div2=document.createElement('div');
   div2.className='shoppingcart1-1-img'
   var img=document.createElement('img');
   img.setAttribute('src', './images/per_17.jpg' );
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

// 
box5[17].onclick=function (){
  // var box20=document.getElementsByClassName('shoppingcart1-2')[0]
  //  box20.className=shoppingcart1-2
  //   shoppingcart_.className='shoppingcart'

   var div1=document.createElement('div');
   div1.className='shoppingcart1-2'
// 
   var div2=document.createElement('div');
   div2.className='shoppingcart1-1-img'
   var img=document.createElement('img');
   img.setAttribute('src', './images/per_18.jpg' );
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

// 
box5[18].onclick=function (){
  // var box20=document.getElementsByClassName('shoppingcart1-2')[0]
  //  box20.className=shoppingcart1-2
  //   shoppingcart_.className='shoppingcart'

   var div1=document.createElement('div');
   div1.className='shoppingcart1-2'
// 
   var div2=document.createElement('div');
   div2.className='shoppingcart1-1-img'
   var img=document.createElement('img');
   img.setAttribute('src', './images/per_19.jpg' );
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

// 
box5[19].onclick=function (){
  // var box20=document.getElementsByClassName('shoppingcart1-2')[0]
  //  box20.className=shoppingcart1-2
  //   shoppingcart_.className='shoppingcart'

   var div1=document.createElement('div');
   div1.className='shoppingcart1-2'
// 
   var div2=document.createElement('div');
   div2.className='shoppingcart1-1-img'
   var img=document.createElement('img');
   img.setAttribute('src', './images/per_12.jpg' );
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