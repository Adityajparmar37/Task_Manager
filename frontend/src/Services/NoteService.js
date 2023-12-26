import axios from "axios";


export const getNotes = async (filters, sort) => {
    try {
        // Set default values for filters and sort
        filters = filters || {};
        sort = sort || 'new';

        console.log("filters == ", filters, "sort ", sort);

        // Use URLSearchParams to serialize the filters object etla k object nae string ma convert kari dai
        const params = new URLSearchParams(filters);

        const { data } = await axios.get(`/api/notes/mynotes?${params.toString()}&sort=${sort}`);
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
        console.log("id==>", id)
        const { data } = await axios.delete(`/api/notes/delete/${id}`);
        console.log("Delete api ==> ", data);
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

