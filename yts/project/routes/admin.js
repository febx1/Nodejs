var express = require('express');
var router = express.Router();
var productHelper = require('../helpers/product-helpers')

/* GET users listing. */
router.get('/', function (req, res, next) {
  let products =
    [
      {
        name: "Iphoen 11",
        category: 'mobile',
        description: "This is an Apple I phone",
        image: "https://www.reliancedigital.in/medias/iPhone-11-128GB-Black-491901644-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMTEzOTR8aW1hZ2UvanBlZ3xpbWFnZXMvaDU4L2g1NS85NDIxOTE4NDcwMTc0LmpwZ3w1OGQ0YWJiYzI2ZjljZjA4Nzg5ZGIwYzA3MWRiMmIyMDA2MjQ1NDhjYTM1MTI3YWQ2ODY3YThhNDBiMzM1Nzk2"
      },
      {
        name: "Iphoen 12",
        category: 'mobile',
        description: "This is an Apple I phone",
        image: "https://www.reliancedigital.in/medias/iPhone-11-128GB-Black-491901644-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMTEzOTR8aW1hZ2UvanBlZ3xpbWFnZXMvaDU4L2g1NS85NDIxOTE4NDcwMTc0LmpwZ3w1OGQ0YWJiYzI2ZjljZjA4Nzg5ZGIwYzA3MWRiMmIyMDA2MjQ1NDhjYTM1MTI3YWQ2ODY3YThhNDBiMzM1Nzk2"
      }, {
        name: "Iphoen 13",
        category: 'mobile',
        description: "This is an Apple I phone",
        image: "https://www.reliancedigital.in/medias/iPhone-11-128GB-Black-491901644-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMTEzOTR8aW1hZ2UvanBlZ3xpbWFnZXMvaDU4L2g1NS85NDIxOTE4NDcwMTc0LmpwZ3w1OGQ0YWJiYzI2ZjljZjA4Nzg5ZGIwYzA3MWRiMmIyMDA2MjQ1NDhjYTM1MTI3YWQ2ODY3YThhNDBiMzM1Nzk2"
      }, {
        name: "Iphoen 14",
        category: 'mobile',
        description: "This is an Apple I phone",
        image: "https://www.reliancedigital.in/medias/iPhone-11-128GB-Black-491901644-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMTEzOTR8aW1hZ2UvanBlZ3xpbWFnZXMvaDU4L2g1NS85NDIxOTE4NDcwMTc0LmpwZ3w1OGQ0YWJiYzI2ZjljZjA4Nzg5ZGIwYzA3MWRiMmIyMDA2MjQ1NDhjYTM1MTI3YWQ2ODY3YThhNDBiMzM1Nzk2"
      }, {
        name: "Iphoen 15",
        category: 'mobile',
        description: "This is an Apple I phone",
        image: "https://www.reliancedigital.in/medias/iPhone-11-128GB-Black-491901644-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMTEzOTR8aW1hZ2UvanBlZ3xpbWFnZXMvaDU4L2g1NS85NDIxOTE4NDcwMTc0LmpwZ3w1OGQ0YWJiYzI2ZjljZjA4Nzg5ZGIwYzA3MWRiMmIyMDA2MjQ1NDhjYTM1MTI3YWQ2ODY3YThhNDBiMzM1Nzk2"
      }
    ]
  res.render('admin/view-products', { admin: true, products })

});
router.get('/add-product', function (req, res) {
  res.render('admin/add-product')
})
router.post('/add-product', (req, res) => {
  console.log(req.body)
  console.log(req.files.Image)

  productHelper.addProduct(req.body, (id) => {
    res.render("admin/add-product")
    // let image = req.files.Image
    // image.mv('./public/product-images/' + id + '.jpg', (err, done) => {
    //   if (!err) {
    //     res.render("admin/add-product")
    //   } else {
    //     console.log('err')
    //   }
    // })
  })
})

module.exports = router;
