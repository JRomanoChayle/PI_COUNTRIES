const validation = (form) => {
    const errors = {}

    // validation name

        if(!/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(form.name)){
            errors.name  = "Only letters and spaces are allowed";
        }
        else{
            errors.name  = "";
        }
        
    // validation difficulty

        if(!/^([1-5])$/.test(form.difficulty)){
            errors.difficulty = "Only numbers from 1 to 5 are allowed";
        }
        else{
            errors.difficulty = "";
        }

    // validation duration 

    if(!/^([1-9]|1[0-9]|2[0-4])$/.test(form.duration)){
        errors.duration = "Invalid duration (Min 1 / Max. 24)";
    }

    // validation season 

    if(!form.season){
        errors.season = "Empty field, select one season";
    }


    
    if(!form.pais.length){
        errors.pais = "Empty field, select at least one country";
    };
    
    return errors;
}

export default validation;