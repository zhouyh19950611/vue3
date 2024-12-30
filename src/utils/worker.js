function doSome(){
    for(let i=0; i<100; i++){
        console.log(i);
        if(i ==100){
            console.log("我是创建线程执行")
        }
    }
}
doSome()
self.postMessage('doSome')