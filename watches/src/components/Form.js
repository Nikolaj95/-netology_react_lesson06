import React, {useState} from "react";
import shortid from "shortid"
import WatchModel from "../models/Watch";
import PropTypes from 'prop-types';

export default function Form({handleAdd}) {

    const [form, setForm] = useState({nameCity: "", timeZone: ""});

    const handleChange = e => {
        console.log(e.target.name)
        const {name, value} = e.target;
        setForm(prevForm => ({...prevForm, [name]: value}));
    };

    const handleSubmit = e => {
        e.preventDefault();
        const watch = new WatchModel(form.nameCity, form.timeZone, shortid.generate());
        handleAdd(watch);
        setForm({nameCity: "", timeZone: ""});
    };

    return (
        <form onSubmit={handleSubmit}>
            <div style={{display: 'inline-block'}}>
                <label htmlFor="name-city">Название</label> <br/>
                <input type="text" id="name-city" name="nameCity" value={form.nameCity} onChange={handleChange}/>
            </div>
            <div style={{display: 'inline-block'}}>
                <label htmlFor="time-zone">Временная зона</label><br/>
                <input type="text" id="time-zone" name="timeZone" value={form.timeZone} onChange={handleChange}/>
            </div>
            <button type="submit">Добавить</button>
        </form>
    )
}
Form.propTypes = {
    handleAdd: PropTypes.func.isRequired
};