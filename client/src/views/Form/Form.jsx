import { useState } from "react";
import { postActivity } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import validation from "./validation"
import style from './Form.module.css';


const Form = () => {

    const dispatch = useDispatch();
    const countries = useSelector(state => state.allCountries)

    const [errors, setErrors] = useState({})
    const [selected, setSelected] = useState("");

    let countriesList = countries.map(country => {
        return ({
            name: country.name,
        })
    });



    const [form, setForm] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        pais: [],

    })
    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
        setErrors(validation({
            ...form,
            [event.target.name]: event.target.value
        }))
    }

    const handleCountries = (event) => {
        if (event.target.value !== 'Select a Country' && !form.pais.includes(event.target.value)) {
            setForm({
                ...form,
                pais: [...form.pais, event.target.value]
            })
            setErrors(validation({
                ...form,
                pais: [...form.pais, event.target.value]
            }))
        }
    }


    const handleSeasons = (event) => {
        if (event.target.value !== 'Select Season' && !form.season.includes(event.target.value)) {
            setForm({
                ...form,
                season: event.target.value
            })
            setErrors(validation({
                ...form,
                season: event.target.value
            }))
        }
    }

    const deleteCountry = (event) => {
        setForm({
            ...form,
            pais: form.pais.filter((country) => country !== event.target.value)
        })
        setErrors(validation({
            ...form,
            pais: form.pais.filter((country) => country !== event.target.value)
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (form.name === '' && form.duration === '' && form.difficulty === '' && form.season === '' && form.pais === '') return alert('You must complete all fields')
        dispatch(postActivity(form))
        alert("The activity was created successfully")
        setForm({
            name: "",
            difficulty: "",
            duration: "",
            season: "",
            pais: [],
        })
    }

    const handleErrors = (event) => {
        event.preventDefault();
        setErrors(validation({
            ...form,
            pais: [...form.pais, event.target.value]
        }))
        handleSubmit(event)
    }

    const disabled = (form.name === "" || form.difficulty === "" || form.duration === "" || form.season === "" || form.pais.length === 0);


    return (
        <div className={style.formContain}>
            <form onSubmit={handleSubmit} className={style.formSubContain}>
                <div className={style.formContainTitle}>
                    <h1 className={style.formTitle}>Create Activity</h1>
                </div>
                <div>
                    <div>
                        <label>Name: </label>
                    </div>
                    <input className={style.formInput} type="text" onChange={handleChange} value={form.name} name="name" />
                    {errors.name && <p className={style.formError}>{errors.name}</p>}
                </div>

                <div>
                    <div>
                        <label>Difficulty: </label>
                    </div>
                    <input className={style.formInput} type="text" onChange={handleChange} value={form.difficulty} name="difficulty" />
                    {errors.difficulty && <p className={style.formError}>{errors.difficulty}</p>}
                </div>

                <div>
                    <div>
                        <label>Duration: </label>
                    </div>
                    <input className={style.formInput} type="text" onChange={handleChange} value={form.duration} name="duration" /> hs
                    {errors.duration && <p className={style.formError}>{errors.duration}</p>}
                </div>

                <div>
                    <select className={style.formInput} onChange={handleSeasons}>
                        <option className={style.formOption}>Select Season</option>
                        <option className={style.formOption} value="Verano">Summer</option>
                        <option className={style.formOption} value="Otoño">Autum</option>
                        <option className={style.formOption} value="Invierno">Winter</option>
                        <option className={style.formOption} value="Primavera">Spring</option>
                    </select>
                    {errors.season && <p className={style.formError}>{errors.season}</p>}
                </div>

                <select className={style.formInput} value={selected} onChange={event => [handleCountries(event), setSelected(event)]}>
                    <option>Select a Country</option>
                    {countriesList?.map(country => {
                        return (
                            <option className={style.formOption} key={country.name}>
                                {country.name}
                            </option>
                        )
                    })}
                </select>
                {errors.pais && <p className={style.formError}>{errors.pais}</p>}
                <div>
                    {form.pais.map((country) => {
                        return (
                            <div className={style.formContainCountry} key={country}>
                                <p>{country}</p>
                                <button className={style.formBtnCountry} onClick={deleteCountry} value={country}> X </button>
                            </div>
                        )
                    })}
                </div>
                <div className={style.formContainBtn}>
                    <div>
                        <NavLink to={'/home'}>
                            <button className={style.formBtn}>Home</button>
                        </NavLink>
                    </div>
                    <div>
                        <button className={style.formBtn} type="submit" disabled={disabled ||
                            errors.name ||
                            errors.difficulty ||
                            errors.duration ||
                            errors.pais ||
                            errors.season} onClick={handleErrors}>
                            Create Actvitiy
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}


export default Form;