function fun()
{
    console.log(this.response);
}

function fun1()
{
    var req = new XMLHttpRequest();
    req.open('GET','https://dummyjson.com/products/1',true);
    req.onload=fun;
    req.send();
}