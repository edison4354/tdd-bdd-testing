const mocha = require("mocha")
const chai = require("chai")
const utils = require("../utils")
const { util } = require("chai")
const expect = chai.expect

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

it("should say hello", function() {
  const hello = utils.sayHello()
  expect(hello).to.be.a("string")
  expect(hello).to.equal("Hello")
  expect(hello).with.lengthOf(5)
})

// ========================================================
// Level 1 Challenges
// 1. Write the pending tests check that they are pending, like this:
//    it("should do something that you want done")
// 2. Next, write the test and see that it fails.
// 3. Write the code in the utils.js file to make the test pass.
// 4. Finally see if you would like to refactor your code at all.
// This is called "Red-Green-Refactor"
// ========================================================
it("Should return the area of a rectangle", function() {
  const w = 10 
  const h = 10
  const area = utils.area(w, h)
  expect(area).to.be.a('number')
  expect(area).to.equal(100)
})

it("Should return the perimeter of a rectangle", function() {
  const w = 10 
  const h = 5
  const perimeter = utils.perimeter(w, h)
  expect(perimeter).to.be.a('number')
  expect(perimeter).to.equal(30)
})

it("Should return the area of a circle", function() {
  const r = 5
  const circleArea = utils.circleArea(r)
  expect(circleArea).to.be.a('number')
  expect(circleArea).to.equal(78.54)
})



// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.
// ========================================================

beforeEach((done) => {
  utils.clearCart()
  done()
})

it("Should create a new (object) Item with name and price", function() {
  const item = utils.createItem("apple", 0.99)
  expect(item).to.be.a("object")
  expect(item).to.have.property("name", "apple")
  expect(item).to.have.property("price", 0.99)
  expect(item).to.have.property("quantity", 1)
})

it("Should return an array containing all items in cart", function() {
  const cartItems = utils.getShoppingCart()
  const item1 = utils.createItem('chicken', 4.99)
  const item2 = utils.createItem('turkey', 3.99)
  const item3 = utils.createItem('beef', 7.99)

  utils.addItemToCart(item1)
  utils.addItemToCart(item2)
  utils.addItemToCart(item3)

  expect(cartItems).to.be.a("array")
  expect(cartItems).to.have.members([item1, item2, item3])
  expect(cartItems).to.have.lengthOf(3)
})

it("Should add a new item to the shopping cart", function() {
  const item = utils.createItem('chicken', 4.99)
  const cart = utils.getShoppingCart()

  utils.addItemToCart(item)

  expect(cart).to.have.members([item])
})

it("Should return the number of items in the cart", function() {
  const item1 = utils.createItem('chicken', 4.99)
  const item2 = utils.createItem('turkey', 3.99)
  const item3 = utils.createItem('beef', 7.99)

  utils.addItemToCart(item1)
  utils.addItemToCart(item2)
  utils.addItemToCart(item3)

  const cartSize = utils.getNumItemsInCart()
  expect(cartSize).to.be.a('number')
  expect(cartSize).to.equal(3)
})

it("Should remove items from cart", function() {
  const item = utils.createItem('chicken', 4.99)
  utils.addItemToCart(item)

  utils.removeItemFromCart(item)
  const cart = utils.getShoppingCart()
  expect(cart).to.be.a('array')
  expect(cart).to.not.have.members([item])
})

// ========================================================
// Stretch Challenges
// ========================================================

it("Should update the count of items in the cart")

it("Should validate that an empty cart has 0 items")

it("Should return the total cost of all items in the cart")
