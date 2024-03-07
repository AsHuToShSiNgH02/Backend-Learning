var fun = 10;
function gun(){
    console.log("hello world");
}
gun();
fun(); //type error

/**
 *Phase 1 : parsing
    => fun(global) -> global scope
    => gun(global) -> global scope
 *Phase 2 : Execution
    => fun(global) = "10";
    => gun() called
    => hello world prints
    => fun() -> return typeError bcoz variable name and function name is of same name
 */