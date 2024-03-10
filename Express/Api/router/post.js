import  express  from "express";
import {addPOst, getPOsts,getPOstById, updatePOst, deletePOst, removePost} from "../controllers/post.js"
import { Authenticate } from '../middlewares/auth.js'

export const postRouter = express.Router();


postRouter.post('/addpost',Authenticate, addPOst);

postRouter.get('/posts/:id', getPOsts);   

postRouter.get('/post/:id',Authenticate,getPOstById);

postRouter.put('/post/:id',Authenticate,updatePOst); 

postRouter.delete('/post/:id',Authenticate,deletePOst);

postRouter.delete('/removepost/:id', Authenticate,removePost);  