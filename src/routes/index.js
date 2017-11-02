import mongoose from 'mongoose';
import { Router } from 'express';
import Blog from '../model/blog';
import bodyParser from 'body-parser';

let router = Router();

router.get('/', (req,res)=> {
  Blog.find({},(err,posts)=>{
    if(err){
      res.send(err);
    }
    res.json(posts)
  })
})

// router.get('/:id',(req,res) => {
//   Blog.findById(req.params.id, (err, post) => {
//     if(err){
//       res.send(err);
//     }
//     res.json(post);
//   });
// });

router.post('/add', bodyParser.urlencoded({extended : true}) ,(req, res) => {
  let newPost = new Blog();

  newPost.Title = req.body.Title;
  newPost.Content = req.body.Content;
  newPost.Author = req.body.Author;

  newPost.save((err) => {
    if (err) {
      res.send(err);
    }
    res.redirect('http://localhost:3000');
  });
});

export default router
