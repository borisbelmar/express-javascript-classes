class TestController {
  constructor () {
    this.discount = 30
    this.renderTestPage = this.renderTestPage.bind(this)
    this.calculateTotalPrice = this.calculateTotalPrice.bind(this)
    this.renderDiscount = this.renderDiscount.bind(this)
  }

  calculateTotalPrice (normalPrice) {
    return normalPrice - (normalPrice * (this.discount / 100))
  }

  renderTestPage (req, res) {
    res.render('test', {
      discount: this.discount
    })
  }

  renderDiscount (req, res) {
    const discount = parseInt(req.body.discount)
    const normalPrice = parseInt(req.body.normalPrice)

    if (discount) {
      this.discount = discount
    }

    res.render('test', {
      discount: this.discount,
      normalPrice,
      finalPrice: this.calculateTotalPrice(normalPrice)
    })
  }
}

module.exports = TestController
