$(document).ready(function(){function t(){if(e<p.length)for(var o=0;o<p[e].length;o++)o==p[e].length-1?x.eq(o).transition(p[e][o],h,i,function(){e++,t()}):x.eq(o).transition(p[e][o],h,i);else e=0,$("#miBoton_animar").val("Animar")}var p=[[{top:"0",left:"0",width:"100px",height:"100px"},{top:"100px",left:"0",width:"100px",height:"100px"},{top:"0",left:"100px",width:"200px",height:"200px"},{top:"0",left:"300px",width:"100px",height:"100px"},{top:"100px",left:"300px",width:"100px",height:"100px"},{top:"200px",left:"0",width:"400px",height:"100px"}],[{top:"0",left:"0",width:"200px",height:"200px"},{top:"200px",left:"0",width:"100px",height:"100px"},{top:"200px",left:"100px",width:"100px",height:"100px"},{top:"0",left:"200px",width:"100px",height:"100px"},{top:"0",left:"300px",width:"100px",height:"100px"},{top:"100px",left:"200px",width:"200px",height:"200px"}],[{top:"0",left:"0",width:"400px",height:"100px"},{top:"100px",left:"0",width:"100px",height:"100px"},{top:"100px",left:"100px",width:"100px",height:"100px"},{top:"100px",left:"200px",width:"100px",height:"100px"},{top:"100px",left:"300px",width:"100px",height:"100px"},{top:"200px",left:"0",width:"400px",height:"100px"}],[{top:"0",left:"0",width:"100px",height:"100px"},{top:"100px",left:"0",width:"100px",height:"200px"},{top:"0",left:"100px",width:"200px",height:"200px"},{top:"0",left:"300px",width:"100px",height:"100px"},{top:"200px",left:"100px",width:"200px",height:"100px"},{top:"100px",left:"300px",width:"100px",height:"200px"}],[{top:"0",left:"0",width:"100px",height:"300px"},{top:"0",left:"100px",width:"100px",height:"300px"},{top:"0",left:"200px",width:"100px",height:"100px"},{top:"100px",left:"200px",width:"100px",height:"100px"},{top:"200px",left:"200px",width:"100px",height:"100px"},{top:"0",left:"300px",width:"100px",height:"300px"}],[{top:"0",left:"0",width:"300px",height:"100px"},{top:"0",left:"300px",width:"100px",height:"100px"},{top:"100px",left:"0",width:"200px",height:"100px"},{top:"100px",left:"200px",width:"200px",height:"100px"},{top:"200px",left:"0",width:"300px",height:"100px"},{top:"200px",left:"300px",width:"100px",height:"100px"}],[{top:"0",left:"0",width:"200px",height:"100px"},{top:"0",left:"200px",width:"200px",height:"100px"},{top:"100px",left:"0",width:"200px",height:"100px"},{top:"100px",left:"200px",width:"200px",height:"100px"},{top:"200px",left:"0",width:"200px",height:"100px"},{top:"200px",left:"200px",width:"200px",height:"100px"}],[{top:"0",left:"0",width:"300px",height:"100px"},{top:"0",left:"300px",width:"100px",height:"300px"},{top:"100px",left:"0",width:"100px",height:"200px"},{top:"100px",left:"100px",width:"200px",height:"100px"},{top:"200px",left:"100px",width:"100px",height:"100px"},{top:"200px",left:"200px",width:"100px",height:"100px"}],[{top:"0",left:"0",width:"200px",height:"100px"},{top:"100px",left:"0",width:"100px",height:"200px"},{top:"100px",left:"100px",width:"100px",height:"200px"},{top:"0",left:"200px",width:"100px",height:"200px"},{top:"0",left:"300px",width:"100px",height:"200px"},{top:"200px",left:"200px",width:"200px",height:"100px"}],[{top:"0",left:"0",width:"200px",height:"300px"},{top:"0",left:"200px",width:"100px",height:"100px"},{top:"0",left:"300px",width:"100px",height:"100px"},{top:"100px",left:"200px",width:"200px",height:"100px"},{top:"200px",left:"200px",width:"100px",height:"100px"},{top:"200px",left:"300px",width:"100px",height:"100px"}]],x=$(".cuadro"),h=1e3,i="easeInCubic",e=0;$("#miBoton_animar").on("click",function(){"Animar"==$(this).val()&&(t(),$(this).val("Animación en Proceso"))})});