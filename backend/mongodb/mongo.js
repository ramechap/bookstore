const mongoose=require("mongoose")
mongoose.set('strictQuery', false)
mongoose.connect('mongodb://localhost:27017/bookstore',{
  useNewUrlParser: true,
   useUnifiedTopology: true,
  

}
)
.then(()=>console.log("Connection successfully..."))
.catch((err)=> console.log(err));