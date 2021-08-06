const router = require('express').Router();

let Lead = require('../models/lead.model');

router.route('/').get((req, res) => {
    Lead.find()
        .then(leads => res.json(leads))
        .catch(err => res.status(400).json('Error' + err))
})

router.route('/create').post((req, res) => {

    const name = req.body.name;
    const company = req.body.company;
    const domain = req.body.domain;
    const conversionStatus = req.body.conversionStatus;
    const broadcastStatus = req.body.broadcastStatus;
    const createdBy = req.body.createdBy;

    const newLead = new Lead({
        name,
        company,
        domain,
        conversionStatus,
        broadcastStatus,
        createdBy
    })

    newLead.save()
        .then(() => { res.json('Lead Created.') })
        .catch(err => { res.status(400).json('Error ' + err) })
});

router.route('/:id').delete((req, res) => {
    Lead.findByIdAndDelete(req.params.id)
        .then(() => res.json('Lead deleted.'))
        .catch(err => res.status(400).json('Error ' + err))
});

router.route('/:id').patch((req, res) => {
    const updateObject  = req.body;
    const id = req.params.id
    Lead.updateOne({_id  : Object(id)}, {$set: updateObject})
        .then(() => res.json('Lead updated.'))
        .catch(err => res.status(400).json('Error ' + err))
});
module.exports = router;