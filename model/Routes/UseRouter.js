const express = require("express");
const router = express.Router();
const User=require('../form')
// const Admin=require('../model/Admin')
const {  registerUser, loginUser, createEvent, loginAdmin, getEvents, deleteEvent, editEvent, }=require('../Controllers/userControllers')


router.post('/usersignup',registerUser);
// router.post('/registeradmin',registerAdmin);
router.post('/userlogin',loginUser)
router.post('/Event',createEvent)
router.post('/adminlogin', loginAdmin);
router.get('/enquiries',getEvents)
router.delete('/enquiries/:id',deleteEvent)
router.put('/events/:eventId', editEvent);

module.exports = router;