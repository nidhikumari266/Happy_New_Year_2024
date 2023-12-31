function fun()
{
     console.log(this.response);
}

function fun1()
{
    var request = new XMLHttpRequest();
    request.open('GET','https://dummyjson.com/products/1',true);
    request.onload=fun;
    request.send();
}
