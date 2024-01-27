import React, { useContext, useState } from 'react';
import { AppContext } from '../context/App_Context';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaHeart, FaRegComments } from 'react-icons/fa';

const Post = () => {
  const data = useContext(AppContext);

  const [likedPosts, setLikedPosts] = useState([]);

  const handleLike = async (Id) => {
    try {
      const res = await data.likePostById(Id);
      console.log('liked', res);
      toast.success(res.message, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
        transition: Bounce,
      });
      setLikedPosts((LikedPosts) => [...LikedPosts,Id]);
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="container">
        <div className="row my-5">
          {data.posts?.map((d) => (
            <div key={d._id} className="col-md-4 my-3">
              <div className="container d-flex justify-content-center align-items-center">
                <div className="card text-center bg-primary" style={{ width: '18rem' }}>
                  <div className="img d-flex justify-content-center align-items-center">
                    <img src={d.imgUrl} className="card-img-top" alt="post" style={{ height: '180px', width: '250px' }} />
                  </div>
                  <div className="card-body text-center text-light">
                    <h4 className="card-title">{d.title}</h4>
                    <p className="card-text">{d.description}</p>
                    <button
                      onClick={async () => {
                        const res = await data.deletePost(d._id);
                        console.log('deleted', res);
                        toast.success(res.message, {
                          position: 'top-right',
                          autoClose: 3000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: 'dark',
                          transition: Bounce,
                        });
                        data.setReload(!data.reload);
                      }}
                      className="btn btn-success mx-1"
                    >
                      Delete
                    </button>
                    <button className="btn btn-warning mx-1">Edit</button>
                    <button
                      className={`btn btn-danger mx-1 ${likedPosts.includes(d._id) ? 'liked' : ''}`}
                      onClick={() => handleLike(d._id)}
                    >
                      <FaHeart /> 
                      <span className="mx-1">{likedPosts.filter((id) => id === d._id).length}</span>
                    </button>
                    
                    <div className="btn btn-light mx-1">
                      <FaRegComments />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Post;
