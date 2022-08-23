// Next.js API route support: https://nextjs.org/doecs/api-routes/introduction

// http://localhost:3000/api/getblog?slug=how-to-learn-flask

import * as fs from 'fs';

export default function handler(req, res) {


   fs.readFile(`blogdata/${req.query.slug}.json`, 'utf-8' , (err ,data)=>{
      if(err){
        res.status(500).json({error:" No any bolg found for such querry "})
  
      }
    // console.log(req.query.slug)
    // console.log(JSON.parse(data))
     res.status(200).json(JSON.parse(data))
  })
}
