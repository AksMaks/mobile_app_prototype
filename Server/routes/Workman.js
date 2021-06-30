const {Router} = require("express")
const {check, validationResult} = require("express-validator")
const controller = require("../controllers/Workman")

const router = Router()

router.post(
  '/SELECT',
  [], 
  controller.Get
)

router.post(
  '/SEARCH',
  [],
  controller.Search
)

router.post(
  '/INSERT',
  [], 
  controller.Insert
)

router.post(
  '/UPDATE',
  [], 
  controller.Update
)

router.post(
  '/DELETE',
  [], 
  controller.Delete
)

module.exports = router