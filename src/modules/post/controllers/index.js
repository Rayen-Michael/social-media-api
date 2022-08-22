import createPost from "./post/createPost.js";
import getPosts from "./post/getPosts.js";
import likeUnlikePost from "./post/likeUnlikePost.js";
import deletePost from "./post/deletePost.js";
import getPostDetails from "./post/getPostDetails.js";
import addComment from "./comment/addComment.js";
import getComments from "./comment/getComments.js";
import likeUnlikeComment from "./comment/likeUnlikeComment.js";
import deleteComment from "./comment/deleteComment.js";
import createUploadPost from "./post/createUploadPost.js";

const postController = {};

postController.createPost = createPost;
postController.getPosts = getPosts;
postController.likeUnlikePost = likeUnlikePost;
postController.deletePost = deletePost;
postController.getPostDetails = getPostDetails;
postController.addComment = addComment;
postController.getComments = getComments;
postController.likeUnlikeComment = likeUnlikeComment;
postController.deleteComment = deleteComment;
postController.createUploadPost = createUploadPost;

export default postController;
