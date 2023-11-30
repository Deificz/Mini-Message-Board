const express = require('express');
const router = express.Router();

const msg_controller = require("../controller/msgController");

router.get('/', msg_controller.message_get);
router.get('/new', msg_controller.message_new);
router.post('/new', msg_controller.message_post);


module.exports = router;