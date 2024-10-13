const express = require('express')
const router = express.Router()
const login = express.Login

router.post('/', (req, res) => {
    const { name } = req.body;
    if (name) {
        return res.status(200).send(`wellcome ${name}`)
    }
    res.status(401).send('please provide credentionals')
})

module.exports = router