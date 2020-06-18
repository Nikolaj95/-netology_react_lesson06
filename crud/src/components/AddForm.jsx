import React, {useState} from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import NoteModel from "../models/NoteModel";
import Reload from "../reload.png"
import Add from "../add.png"

export default function AddForm({handleAdd, loadData}) {
    const [form, setForm] = useState({content: ""});

    const handleChange = evt => {
        const {value} = evt.target;
        setForm({content: value});
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        const note = new NoteModel(shortid.generate(), form.content);
        handleAdd(note);
        setForm({content: ""});
    };
    return (
        <div >
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="newNote">New Note</label>
                    <div className="new-note">
                        <textarea rows="3" id="newNote" name="newNote" value={form.content} onChange={handleChange}/>
                        <button type="submit">
                            <img src={Add} alt=""/>
                        </button>
                        <button type="button" onClick={loadData}>
                            <img src={Reload} alt=""/>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

AddForm.propTypes = {
    handleAdd: PropTypes.func.isRequired,
    loadData: PropTypes.func.isRequired
};