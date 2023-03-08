import React, { Component } from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { storeConversation } from "../apis/index"


export default function Post(props) {
    const { steps } = props;
    const { submit, question} = steps;
const [response, setResponse]= useState("")
    const [state, setState] = useState({ submit, question});
   


    useEffect( async () => {
        const userObject = {
            question:state.question.value,
            submit:state.submit.value
        };
        console.log(userObject, "userObject");
        await storeConversation(userObject).then(async (data) => {
            const res = await data.json
            setResponse(res.result);
            console.log(res)
        })
        // axios.post('/pages/conversation/conversation', userObject)
        //     .then(res => {
        //         console.log(res.status)
        //     }).catch(function (error) {
        //         console.log(error);
        //     });
    }
)

        return( <h1>{response}</h1>)

};

