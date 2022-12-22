var express = require('express');
var router = express.Router();

const multer = require('multer');
const storage = multer.memoryStorage()
const upload = multer({
  storage: storage,
  limits: {fileSize: 20 * 1024 * 1024}});



const postController = require('../controllers/post');
router.param('postId', postController.load);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET author*/
router.get('/author', function(req, res, next) {
  res.render('author');
});

/* Route to post attachment */
router.get('/posts',                     postController.index);
router.get('/posts/:postId(\\d+)',       postController.show);
router.get('/posts/new',                 postController.new);
router.post('/posts',                    upload.single('../public/images/foto.jpg'),  postController.create);
router.get('/posts/:postId(\\d+)/edit',  postController.edit);
router.put('/posts/:postId(\\d+)',       upload.single('../public/images/foto.jpg'),  postController.update);
router.delete('/posts/:postId(\\d+)',    postController.destroy);
router.get('/posts/:postId(\\d+)/attachment', postController.attachment);


module.exports = router;