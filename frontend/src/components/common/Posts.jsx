import React, { useEffect } from 'react'
import Post from './Post';
import PostSkeleton from '../skeletons/PostSkeleton';
import { POSTS } from '../../utils/db/dummy';
import { useQuery } from '@tanstack/react-query';

function Posts({feedType,username,userId,filterMovieTitle}) {
  const getEndPoint = ()=>{
    if (filterMovieTitle) {
      return `/api/posts/searchByMovie?movieTitle=${encodeURIComponent(filterMovieTitle)}`;
    }
    switch (feedType){
      case "forYou":
        return "/api/posts/all";
      case "following":
        return "/api/posts/following";
      case "posts":
        return `/api/posts/user/${username}`;
      case "likes":
        return `/api/posts/likes/${userId}`;
      default:
        return "/api/posts/all";
    }
  }

  const POST_ENDPOINT = getEndPoint();
  const {data:posts,isLoading,refetch,isRefetching}  = useQuery({
    queryKey: ["posts", POST_ENDPOINT],
    queryFn: async()=>{
      try {
        const res = await fetch(POST_ENDPOINT, { credentials: "include" })
        const data = await res.json()

        if(!res.ok) throw new Error(data.error || "Something went wrong!")
        return data;

      } catch (error) {
        throw new Error(error.message)
      }
    }
  })

  useEffect(()=>{
    refetch()
  },[feedType,refetch,username,filterMovieTitle])

  return (
    <>
    {(isLoading || isRefetching) && (
      <>
        <PostSkeleton />
        <PostSkeleton />
        <PostSkeleton />
      </>
   
    )}
    {!isLoading && !isRefetching && posts?.length === 0 && <p className='noPosts'>No posts in this tab. Switch 👻</p>}
    {!isLoading && !isRefetching && posts && (
      <div>
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    )}
  </>
  )
}

export default Posts
