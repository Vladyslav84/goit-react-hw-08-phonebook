import axios from 'axios';

    axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';
   
    export async function fetcContacts ()  {
        const response = await axios.get(`/contacts`);
        console.log(response.data)
         return response.data;
};

    export async function postContacts (newContact)  {
        const response = await axios.post(`/contacts`, (newContact))
         console.log(response)
         return response.data;
};

    export async function deleteContacts (deleteContacts)  {
        const response = await axios.delete(`/contacts/${deleteContacts}` );
         return response.data;
};
