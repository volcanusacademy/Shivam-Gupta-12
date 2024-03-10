import { Post } from "../Models/Post.js";

export const addPOst = async (req, res) => {
  const { title, description, imgUrl } = req.body;

  const post = await Post.create({
    title,
    description,
    imgUrl,
    user: req.user,
  });
  res.status(200).json({ Message: "Post uploaded...!", post });
};

export const getPOsts = async (req, res) => {
  const posts = await Post.find();
  if (!posts.length == 0) return res.json({ Message: "No Post" });

  res.json({ posts });
};

export const updatePOst = async(req,res) => {
const id = req.params.id;

const {title,description,imgUrl} =req.body;

let post = await Post.findById(id);

if(!post) return res.json({message:"Invalid Id..!"});

post.title = title,
post.description = description,
post.imgUrl = imgUrl

await post.save();

res.json({message:"Your post has been updated....!",post});
};

export const deletePOst = async(req,res) => {
const id = req.params.id;

const post = await Post.findById(id);

if(!post) return res.json({message:"Invalid id...!"});

await post.deleteOne();

res.json({message:" Post delete successfully...!", });

};

export const getPOstById = async (req, res) => {
  const id = req.params.id;

  let post = await Post.findById(id);

  if (!post) return res.json({ message: "User Not Exist...!" });

  res.json({ post });
};

export const removePost = async (req, res) => {
  const id = req.params.id;

  try {
    const post = await Post.findById(id);
    if (!post) return res.json({ message: "Post Not Found...!" });
    res.json({ message: "Post removed successfully...!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
