import express from "express";
import {createPost, deletePost, getAllPosts, patchPost, getPost} from "./api/posts";
import {getAllUsers, getUser, createUser, deleteUser, patchUser} from "./api/users";
import {createAccountData, getAccountData, getAllAccountData, deleteAccountData, patchAccountData} from "./api/accountData";
import {getAllImages, getImage, createImage, patchImage, deleteImage} from "./api/images";
import {getAllEvents, getEvent, patchEvent, deleteEvent, createEvent} from "./api/events";

const router = express.Router()
router.use(express.json())
router.get('/', async (req, res, next) => {
    res.json({'api': 'working'});
});

router.get('/posts/', getAllPosts)
router.get('/posts/:id', getPost)
router.post('/posts/', createPost)
router.patch('/posts/:id', patchPost)
router.delete('/posts/:id', deletePost)

router.get('/users/', getAllUsers)
router.get('/users/:id', getUser)
router.post('/users/', createUser)
router.patch('/users/:id', patchUser)
router.delete('/users/:id', deleteUser)

router.get('/accountdata/', getAllAccountData)
router.get('/accountdata/:id', getAccountData)
router.post('/accountdata/', createAccountData)
router.patch('/accountdata/:id', patchAccountData)
router.delete('/accountdata/:id', deleteAccountData)

router.get('/images/', getAllImages)
router.get('/images/:id', getImage)
router.post('/images/', createImage)
router.patch('/images/:id', patchImage)
router.delete('/images/:id', deleteImage)

router.get('/events/', getAllEvents)
router.get('/events/:id', getEvent)
router.post('/events/', createEvent)
router.patch('/events/:id', patchEvent)
router.delete('/events/:id', deleteEvent)

export {router};