$(document).ready(function(){function t(){if(console.log("numAnimacion: "+x),x<h.length)for(var o=0;o<h[x].length;o++)p.eq(o).css(h[x][o]),p.eq(o).addClass(i).one(e,function(){$(this).removeClass(i)}),o==h[x].length-1&&setTimeout(function(){x++,t()},1500);else x=0,$("#miBoton_animar").val("Animar")}var p=$(".cuadro"),x=0,h=[[{top:"0",left:"0",width:"100px",height:"100px"},{top:"100px",left:"0",width:"100px",height:"100px"},{top:"0",left:"100px",width:"200px",height:"200px"},{top:"0",left:"300px",width:"100px",height:"100px"},{top:"100px",left:"300px",width:"100px",height:"100px"},{top:"200px",left:"0",width:"400px",height:"100px"}],[{top:"0",left:"0",width:"200px",height:"200px"},{top:"200px",left:"0",width:"100px",height:"100px"},{top:"200px",left:"100px",width:"100px",height:"100px"},{top:"0",left:"200px",width:"100px",height:"100px"},{top:"0",left:"300px",width:"100px",height:"100px"},{top:"100px",left:"200px",width:"200px",height:"200px"}],[{top:"0",left:"0",width:"400px",height:"100px"},{top:"100px",left:"0",width:"100px",height:"100px"},{top:"100px",left:"100px",width:"100px",height:"100px"},{top:"100px",left:"200px",width:"100px",height:"100px"},{top:"100px",left:"300px",width:"100px",height:"100px"},{top:"200px",left:"0",width:"400px",height:"100px"}],[{top:"0",left:"0",width:"100px",height:"100px"},{top:"100px",left:"0",width:"100px",height:"200px"},{top:"0",left:"100px",width:"200px",height:"200px"},{top:"0",left:"300px",width:"100px",height:"100px"},{top:"200px",left:"100px",width:"200px",height:"100px"},{top:"100px",left:"300px",width:"100px",height:"200px"}],[{top:"0",left:"0",width:"100px",height:"300px"},{top:"0",left:"100px",width:"100px",height:"300px"},{top:"0",left:"200px",width:"100px",height:"100px"},{top:"100px",left:"200px",width:"100px",height:"100px"},{top:"200px",left:"200px",width:"100px",height:"100px"},{top:"0",left:"300px",width:"100px",height:"300px"}],[{top:"0",left:"0",width:"300px",height:"100px"},{top:"0",left:"300px",width:"100px",height:"100px"},{top:"100px",left:"0",width:"200px",height:"100px"},{top:"100px",left:"200px",width:"200px",height:"100px"},{top:"200px",left:"0",width:"300px",height:"100px"},{top:"200px",left:"300px",width:"100px",height:"100px"}],[{top:"0",left:"0",width:"200px",height:"100px"},{top:"0",left:"200px",width:"200px",height:"100px"},{top:"100px",left:"0",width:"200px",height:"100px"},{top:"100px",left:"200px",width:"200px",height:"100px"},{top:"200px",left:"0",width:"200px",height:"100px"},{top:"200px",left:"200px",width:"200px",height:"100px"}],[{top:"0",left:"0",width:"300px",height:"100px"},{top:"0",left:"300px",width:"100px",height:"300px"},{top:"100px",left:"0",width:"100px",height:"200px"},{top:"100px",left:"100px",width:"200px",height:"100px"},{top:"200px",left:"100px",width:"100px",height:"100px"},{top:"200px",left:"200px",width:"100px",height:"100px"}],[{top:"0",left:"0",width:"200px",height:"100px"},{top:"100px",left:"0",width:"100px",height:"200px"},{top:"100px",left:"100px",width:"100px",height:"200px"},{top:"0",left:"200px",width:"100px",height:"200px"},{top:"0",left:"300px",width:"100px",height:"200px"},{top:"200px",left:"200px",width:"200px",height:"100px"}],[{top:"0",left:"0",width:"200px",height:"300px"},{top:"0",left:"200px",width:"100px",height:"100px"},{top:"0",left:"300px",width:"100px",height:"100px"},{top:"100px",left:"200px",width:"200px",height:"100px"},{top:"200px",left:"200px",width:"100px",height:"100px"},{top:"200px",left:"300px",width:"100px",height:"100px"}]],i="animated fadeInRight",e="webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";$("#miBoton_animar").on("click",function(){"Animar"==$(this).val()&&($(this).val("Animación en Proceso"),t())})});