const express = require("express");
const app = express();
app.use(express.json())
let users = [
  { name: "mohamed", email: "mohamed@gmail.com",id:1  },
  { name: "ahmed", email: "ahmed@gmail.com",id:2  },
  { name: "maged", email: "maged@gmail.com",id:3 },
];



let posts = [
  { head: "mohamed", title: "mohameddeveloper",id:1  },
  { head: "ahmed", title: "ahmeddeveloper",id:2  },
  { head: "maged", title: "mageddeveloper",id:3 },
];

app.get("/allusers", (req, res) => {
  res.send(users);
});


app.post("/adduser",(req,res)=>{
    let isExist = users.find(ele=>ele.email == req.body.email)
    if (isExist){
        res.end("email already existed")

    }else{
        users.push(req.body)
        res.end("added")    }
    
})



app.delete("/deleteuser",(req, res)=>{
  let userIndex = users.findIndex(ele=>ele.email== req.body.email)
  if(userIndex > -1 ){
    users.splice(userIndex,1)
    res.end("deleted")
  }else{
    res.end("enter a valid email")
  }
})


app.patch("/updateuser",(req,res)=>{
  let userIndex= users.findIndex(ele=>ele.id == req.body.id)
  if(userIndex > -1){
users[userIndex].name = req.body.name
res.end("updated")
  }else{
    res.end("not valid")
  }

})



app.get("/searchuser",(req,res)=>{
  let foundItem = users.find(ele=>ele.id == req.body.id)
  res.send(foundItem)
})


app.get("/sortuser",(req,res)=>{
  let sortedUsers = users.sort((a,b)=>a.name.localeCompare(b.name))// users.sort().reverse()
  res.send(sortedUsers)
})



app.get("/allposts", (req, res) => {
  res.send(posts);
});




app.post("/addpost",(req,res)=>{
  let isExist = posts.find(ele=>ele.head == req.body.head)
  if (isExist){
      res.send("head already existed")

  }else{
      posts.push(req.body)
      res.send("hello from add post")    }
  
})


app.delete("/deletepost",(req, res)=>{
  let postIndex = posts.findIndex(ele=>ele.title== req.body.title)
  if(postIndex > -1 ){
    posts.splice(postIndex,1)
    res.send("deleted")
  }else{
    res.send("enter a valid title")
  }
})



app.patch("/updatepost",(req,res)=>{
  let findIndex= posts.findIndex(ele=>ele.title == req.body.title)
  if(findIndex > -1){
posts[findIndex].head = req.body.head
res.send("updated")
  }else{
    res.send("not valid")
  }

})



app.get("/searchpost",(req,res)=>{
  let foundItem = posts.find(ele=>ele.id == req.body.id)
  res.send(foundItem)
})



app.get("/sortpost",(req,res)=>{
  let sortedPosts = posts.sort((a,b)=>a.name.localeCompare(b.name))// users.sort().reverse()
  res.send(sortedPosts)
})

app.listen(3000, () => {
  console.log("server running now ...g.");
}); 






