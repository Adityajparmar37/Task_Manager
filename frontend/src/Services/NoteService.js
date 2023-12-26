import axios from "axios";

export const getNotes = async (search, sort) => {
    try {

        console.log("Search == ", search, "sort ", sort)
        const { data } = await axios.get(`/api/notes/mynotes?search=${search}&sort=${sort}`);
        return data;
    } catch (error) {
        return error.response.data;
    }
};


export const createNote = async (noteData) => {
    try {
        console.log("API note data  ==> ", noteData);
        const { data } = await axios.post('/api/notes/create', noteData);
        return data;
    } catch (error) {
        return error.response.data;
    }
}

export const deleteNote = async (id) => {
    try {
        // console.log("id==>", id)
        const { data } = await axios.delete(`/ api / notes / delete /${id}`);
        return data;
    } catch (error) {
        return error.response.data;
    }
}


export const updateNote = async (id, updateNoteData) => {
    try {
        const { data } = await axios.put(`/api/notes/update/${id}`, updateNoteData);
        console.log("Update api frontend ==> ", data);
        return data;
    } catch (error) {
        return error.response.data;
    }
}

