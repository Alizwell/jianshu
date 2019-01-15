//防抖  
export const boundce = function(func, time){
	var  timer;
	return function(){
		let arg = arguments;
		if( timer ) clearTimeout( timer );
		timer = setTimeout(()=>{
			timer = null;
			func.apply(this, arg);
		}, time);
	}
}

//节流
export const throttling = function(func, time){
	var timer;
	return function(){
		let arg = arguments;
		if(  !timer ){
			timer = setTimeout(()=>{
				timer = null;
				func.apply(this, arg);
			}, time);
		}		
	}
}