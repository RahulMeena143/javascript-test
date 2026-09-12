let a = 300;

if (true) {
  let a = 200;
  const b = 420;
  //console.log("INNER:", a)
}
//console.log(a);

function One() {
  const userName = "Rahul";

  function Two() {
    const website = "instagram";
    //console.log(userName);
  }

  Two();
  //console.log(website);
}
One();

if (true) {

  const username = "hitesh";

  if (username === "hitesh") {

    const website = "you tube";

    //console.log(username + website);
  }
  //console.log(website);
}
//console.log(userName);


