const { Router } = require('express')

const LogEntry = require('../models/LogEntry')

const router = Router();

router.get('/', (req, res) => {
    res.json({
        message: 'globe'
    })
})

router.post('/', (req, res) => {
    console.log(req.body)
})

module.exports = router