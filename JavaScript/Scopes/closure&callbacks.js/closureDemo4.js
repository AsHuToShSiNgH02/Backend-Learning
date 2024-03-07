function test(){
    for(let i = 0;i < 3;i++){
        setTimeout(function exec(){
            console.log(`i: ${i}`);
        },i*1000);
    }
    /**
     * for(let i = 0){                   i = 0 within this block
     *   setTimeout(function exec(){
            console.log(`i: ${i}`);
         },i*1000);
     * }
        --------
     * for(let i = 1){                   i = 1 within this block
     *   setTimeout(function exec(){
            console.log(`i: ${i}`);
         },i*1000);
     * }
        --------
     * for(let i = 2){                   i = 2 within this block
     *   setTimeout(function exec(){
            console.log(`i: ${i}`);
         },i*1000);
     * }
     */
}
test();

/**
 * NOTE: let is block scoped (means for every block of iteration have diff value)
 * DRY RUN:
 * i = 0;        timer = 0*1000 = 0              block = 1
 * i = 1;        timer = 1*1000 = 1              block = 2
 * i = 2;        timer = 2*1000 = 2              block = 3
 * now for every block variable i will pe printed, now as "let" is blocked scoped therefore
 * different value of i will be printed for diffrent block
 * OUTPUT:
 * i : 0   (timer oms)  for block 1
 * i : 1   (timer 1ms)  for block 2
 * i : 2   (timer 2ms)  for block 3
 */