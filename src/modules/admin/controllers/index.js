import getAllUsers from "./user/getAllUsers.js";
import deleteUser from "./user/deleteUser.js";
import updateAccountStatus from "./user/updateAccountStatus.js";
import searchUser from "./user/searchUser.js";
import updateUserRole from "./user/updateUserRole.js";
import getUserDetails from "./user/getUserDetails.js";
import getAllPosts from "./post/getAllPosts.js";
import updateVerificationStatus from "./user/updateVerificationStatus.js";
import getAllComments from "./comment/getAllComments.js";
import adminLogin from "./auth/login.js";
import getProgress from "./stats/getProgress.js";
import forgotAdminPassword from "./auth/forgotPassword.js";
import resetAdminPassword from "./auth/resetPassword.js";
import changeAdminPassword from "./auth/changePassword.js";
import getStats from "./stats/getStats.js";

const adminController = {};

adminController.adminLogin = adminLogin;
adminController.getAllUsers = getAllUsers;
adminController.deleteUser = deleteUser;
adminController.updateAccountStatus = updateAccountStatus;
adminController.searchUser = searchUser;
adminController.updateUserRole = updateUserRole;
adminController.getUserDetails = getUserDetails;
adminController.getAllPosts = getAllPosts;
adminController.updateVerificationStatus = updateVerificationStatus;
adminController.getAllComments = getAllComments;
adminController.getProgress = getProgress;
adminController.getStats = getStats;
adminController.adminForgotPassword = forgotAdminPassword;
adminController.adminResetPassword = resetAdminPassword;
adminController.changeAdminPassword = changeAdminPassword;

export default adminController;
