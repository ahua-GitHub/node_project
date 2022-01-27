const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.json(["xiaoming", "ahua", "tingting"])
    res.end("获取用户列表")
})
router.get('/:id', (req, res, next) => {
    res.json(`${req.params.id}用户信息`)
})
router.post('/', (req, res, next) => {
    res.json("create user success~")
})

module.exports = router