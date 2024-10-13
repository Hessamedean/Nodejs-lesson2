const express = require('express');
const router = express.Router();
const { getPeople,
    createPeople,
    createPeoplePostman,
    editPeople,
    deletePeople } = require('../controllers.js/people-controller')

// router.get('/', getPeople)
// router.post('/', createPeople)
// router.post('/postman', createPeoplePostman)
// router.put('/:id', editPeople)
// router.delete('/:id', deletePeople)

router.route('/').get(getPeople).post(createPeople)
router.route('/postman').post(createPeoplePostman)
router.route('/:id').put(editPeople).delete(deletePeople)

module.exports = router
