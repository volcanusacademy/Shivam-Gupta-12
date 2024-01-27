import React, { useEffect, useState } from "react";
import { AppContext } from "./App_Context";
import axios from "axios";

const App_State = (props) => {
  const [data, setData] = useState(10);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState("");
  const [posts, setPosts] = useState([]);
  const [reload, setReload] = useState(false);
 

  const url = "http://localhost:3000/api";
  useEffect(() => {
    const fetchBlog = async () => {
      const api = await axios.get(`${url}/posts`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      console.log(api.data.posts);
      setPosts(api.data.posts)
    };
    fetchBlog();

    const jwtToken = window.localStorage.getItem("token");
    // console.log("jwttoken",jwtToken);
    setToken(jwtToken);

    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [token,reload]);
  // Login
  const login = async (email, password) => {
    try {
      const api = await axios.post(
        `${url}/login`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json"
            
          },
          withCredentials: true,
        }
      );
      // return api.data;
      console.log(api.data);

      // setting to local storage
      window.localStorage.setItem(`token`, api.data.token);
      setToken(api.data.token);
    return api.data;

    } catch (error) {
      if (error.response) {
        console.log("Error response status:", error.response.status);
        console.log("Response data:", error.response.data);
        return error.response.data
      } else if (error.request) {
        console.log("No response received");
      } else {
        console.error("Error message:", error.message);
      }
    }
  };
  //Register 
  const Register = async (name, email, password) => {
    try {
      const api = await axios.post(
        `${url}/register`,
        {
          name,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
  
     
      if (api.status === 200) {
        console.log("Registration successful:", api.data);
        window.localStorage.setItem("token", api.data.token);
        setToken(api.data.token);
        return api.data;
      } else {
        console.error("Registration failed. Server response:", api.data);
        return api.data;
      }
    } catch (error) {
      console.error("Error during registration:", error);
      return { error: "An error occurred during registration." };
    }
  };
  
  
// Logout
  const logOut = () => {
    window.localStorage.removeItem("token");
    setToken("");
    isAuthenticated(false);
  };

  const addPost = async( title,description,imgUrl)=>{
    const api = await axios.post(`${url}/addpost`, {
      title,
      description,
      imgUrl
    },{
      headers: {
        "Content-Type": "application/json",
        "Auth":token
      },
      withCredentials: true,
    });
    console.log(api);
    return api.data;
  };
  // Delete
  const deletePost= async (id)=>{

    const api = await axios.delete(`${url}/post/${id}`,
     {
      headers: {
        "Content-Type": "application/json",
        "Auth":token
      },
      withCredentials: true,
    });
    console.log(api);
    return api.data;
  }
  //Like Post
  const likePostById = async (Id) => {
    try {
      const api = await axios.post(
        `${url}/post/like/${Id}`,
        { id:Id }, 
        {
          headers: {
            "Content-Type": "application/json",
            "Auth": token,
          },
          withCredentials: true,
        }
      );
  
      console.log(api.data);
      return api.data;
    } catch (error) {
      console.error("Error liking post:", error);
      return { error: "An error occurred while liking the post." };
    }
  };
  return (
    <AppContext.Provider
      value={{
        data,
        setData,
        url,
        Register,
        login,
        token,
        setToken,
        isAuthenticated,
        setIsAuthenticated,
        logOut,
        posts,
        setPosts,
        addPost,
        deletePost,
        reload,
        setReload,
        likePostById,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default App_State;