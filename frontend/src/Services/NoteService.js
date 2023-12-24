import axios from "axios";

export const getNotes = async () => {

    try {
        const { data } = await axios.get('/api/notes/mynotes');
        console.log("Note for user ==> ", data);
        return data;
    } catch (error) {
        return error.response.data;
    }
}


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
        const { data } = await axios.delete(`/api/notes/delete/${id}`);
        return data;
    } catch (error) {
        return error.response.data;
    }
}

