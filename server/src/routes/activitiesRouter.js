const express = require ('express')
const Activity = require('../db')
const router = express.Router()
const {postActivities} = require ('../controllers/postActivities')
const {getAllActivities} = require ('../controllers/getAllActivities')
const {deleteActivities} = require ('../controllers/deleteActivity')

router.post('/', async (req, res) => {
    const{name, difficulty, duration, season, pais} = req.body
        try {
            if(!name || !difficulty || !duration || !season || !pais){
                throw Error('Missing information to create the activity')
            }
            const newActivity = await postActivities (name, difficulty, duration, season, pais)
       return res.status(200).json(newActivity) 
    } catch (error) {
        res.status(500).json({error:error.message})
    }
        
    })

router.get('/', async (req, res) => {
    try {
        const allActivities = await getAllActivities()
        res.status(200).json(allActivities)
    } catch (error) {
        res.status(500).json({error:error.message})
        
    }
})

router.delete('/:id', async (req, res) => {
    const {id} = req.params;

    try {
        if(!id){
            throw Error(`No activity with id: ${id}`)
        }else{
            const deleteActivity = await deleteActivities(id)
            res.status(200).send('Activity deleted successfully')
        }
        
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})



module.exports = router