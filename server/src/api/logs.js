const { Router } = require('express')

const LogEntry = require('../models/LogEntry')

const router = Router();

router.get('/', async (req, res, next) => {
    try {
        let entries = await LogEntry.find();
        res.json(entries);
    } catch (e) {
        next(e)
    }
    
})

router.post('/', async (req, res, next) => {
    try {
        const logEntry = new LogEntry(req.body)
        const createdEntry = await logEntry.save()
        res.json(createdEntry)
    } catch (e) {
        if(e.name === 'ValidationError') {
            res.status(422)
        }
        next(e)
    }
})

module.exports = router