import { Router } from 'express'
import * as skillDb from '../data/skill-db.js'
import * as skillsCtrl from '../controllers/skills.js'
const router = Router()

/* GET users listing. */
router.get('/', skillsCtrl.index)

router.get('/skills', function(req, res) {
  skillDb.find({}, function(error, skills) {
    res.render('skills/index', {
      skills: skills,
      error: error
    })
  })
})

router.get('/:id', skillsCtrl.show)

export {
  router
}
