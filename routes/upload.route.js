const {Router}= require("express")
const fileMiddleware=require('../middleware/file')

const router = Router()

router.post('/upload', fileMiddleware.single('avatar'),(req,res)=>{
    try{
if (req.file){
    console.log(req.file)
    res.json(req.file)
    
}
    }catch(e){
       console.log(error) 
    }
})

module.exports=router