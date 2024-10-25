function sayHello()
{
    function sayHello1(){
        console.log("this is nested function")
    }
    console.log("this is sayhello function")
    console.log("another console statement")
}
function sayHi()
{
    console.log("this is sayHi function")
}
sayHello();
sayHi();
