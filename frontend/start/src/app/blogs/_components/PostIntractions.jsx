"use client"

import { bookmarkPostApi, likePostApi } from "@/services/postServices";
import ButtonIcon from "@/ui/ButtonIcon";
import { toPersianDigits } from "@/utils/numberFormatter";
import { BookmarkIcon, ChatBubbleOvalLeftEllipsisIcon, HeartIcon } from "@heroicons/react/24/outline";
import React from "react";
import toast from "react-hot-toast";

function PostIntraction({post}) {

   const likeHandler = async (postId)=>{
try {
  const {message} = await likePostApi(postId)
  toast.success(message)
} catch (error) {
  toast.error(error.message)
}}
   const bookMarkHandler = async (postId)=>{
try {
  const {message} = await bookmarkPostApi(postId)
  toast.success(message)
} catch (error) {
  toast.error(error.message)
}}
   



   
  return (
    <div className="flex items-center gap-x-4 pt-4">
      <ButtonIcon variant="secondary">
        <ChatBubbleOvalLeftEllipsisIcon />
        {toPersianDigits(post.commentsCount)}
      </ButtonIcon>
      <ButtonIcon variant="red" onClick={()=>likeHandler(post._id)}>
        <HeartIcon/>
        {toPersianDigits(post.likesCount)}
      </ButtonIcon>
      <ButtonIcon variant="primary" onClick={()=>bookMarkHandler(post._id)}>
        <BookmarkIcon />
      </ButtonIcon>
    </div>
  );

}
export default PostIntraction;
