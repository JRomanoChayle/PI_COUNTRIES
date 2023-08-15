const express = require ('express')
const router = express.Router()
const {getCountries} = require ('../controllers/getCountries')
const {getCountryById} = require ('../controllers/getCountryById')
const {getCountryByName} = require ('../controllers/getCountryByName')



router.get('/:id', async (req, res)=> {
    
    const { id } = req.params
    try {
        if(id){
        const countryId = await getCountryById(id.toUpperCase())
            
            if(!countryId.length) throw Error(`No country with id: ${id}`)
            else {
            return res.status(200).json(countryId)
            }
       } 
    } catch (error) {
        res.status(500).json({error:error.message})
    }   
});


router.get('/', async (req, res)=>{
    const { name } = req.query

    try {
        if(name){
            const countryName = await getCountryByName(name)
           
                if(!countryName.length){
                    throw Error(`${name} does not represent any country`)
                } else {
                return res.status(200).json(countryName)
                }
        } else {
            const allCountries = await getCountries();
            return res.status(200).json(allCountries)
        }
        
    } catch (error) {
        res.status(500).json({error:error.message})
    }
});





router.all('*', (req, res) => {
    res.status(404).send(`Unknown Route: ${req.method} ${req.originalUrl}`);
});


module.exports = router