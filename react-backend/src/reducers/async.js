var a = {
  phone: "+40957685994",
  firstname: "samsepi0l",
  surname:"Domityrif",
  company:"Hoyt",
  email:"dhfh@yh.net"
};

async function f () {
var res = await fetch('/users');
 a = await res.json();
 console.log(a);
}

f();


export default function (){
 return [
    a
  ]
}
