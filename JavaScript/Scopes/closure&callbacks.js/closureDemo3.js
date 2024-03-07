function test(){
    for(var i = 0;i < 3;i++){
        setTimeout(function exec(){
            console.log(`i: ${i}`);
        },i*1000);
    }
}

test();

/**
 * NOTE:var acts as funcion scope
 * DRY RUN:
 * i = 0;    timer = 0 * 1000 = 0ms     block  = 1
 * i = 1;    timer = 1 * 1000 = 1ms     block  = 2
 * i = 2;    timer = 2 * 1000 = 2ms     block  = 3
 * i = 3;    for loop ends
 * now executin on timer will be executed
 * as variable will be remembered not its value, by function
 * NOTE: Timers gets executed after some time even if the given time is 0ms
 * OUTPUT:
 * i : 3  (timer oms)
 * i : 3  (timer 1ms)
 * i : 3  (timer 2ms)
 */