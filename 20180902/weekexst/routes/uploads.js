
const express = require('express');
const router = express.Router();

const multer = require('multer');
const path = require('path');
// let upload = multer({dest:'uploads/'});
let storage = multer.diskStorage({
  destination:function(req,file,callback){
    callback(null,"uploads/")
  },
  filename:function(req,file,callback){
    let extension = path.extname(file.originalname);
    let basename = path.basename(file.originalname, extension);
    callback(null,basename+" - "+Date.now()+extension)
  }
})

let upload = multer({
  storage:storage
})

// 뷰 페이지 경로
router.route('/show')
  .get(function(req,res){
    res.render('board')
  })

// 파일 업로드 처리
router.route('/create')
.post(upload.fields({uploadImage:'imgFile'}),function(req,res){
  let file = req.file;
  let result = {
    originalName : file.originalname,
    size : file.size,
  }
  res.render('modal',{msg:"업로드가 완료 되었습니다.",path:"show"})
  // res.json(result);
})

module.exports = router;