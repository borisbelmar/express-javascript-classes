const express = require('express')
const PageController = require('./controllers/PageController')
const TestController = require('./controllers/TestController')

const router = express.Router()

// Controllers
const pageController = new PageController()
const testController = new TestController()

// Routes
router.get('/', pageController.renderHome)
router.get('/test', testController.renderTestPage)
router.post('/test', testController.renderDiscount)

router.get('*', pageController.renderNotFound)

module.exports = router
