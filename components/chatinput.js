import react, { FormEvent } from 'react';
import { useState, useEffect } from "react"
import { getResponse } from "../apis/index"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image'
import bot from '../assets/images/robot-outline.jpg';
import person from '../assets/images/person.jpg';
import Chat from './chat';
import MDInput from "./MDInput/index"
import MDButton from "./MDButton/index"
import MDTypography from "./MDTypography/index"
import MDBox from './MDBox/index';
import { PaperAirplaneIcon } from "@heroicons/react/24/solid"
import { Icon, Paper } from '@mui/material';
import icon from './../assets/theme-dark/components/icon';
import SmartToyRoundedIcon from '@mui/icons-material/SmartToyRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

export default function ChatInput() {
    const [prompt, setPrompt] = useState("")
    const [chatResponse, setChatResponse] = useState([])
    const [component, setComponent] = useState([])
    const [conversation, setConversation] = useState([])
    const model = `${process.env.OPENAI_MODEL}`



    useEffect(() => {
        window.localStorage.setItem('MY_QS_STATE', prompt);
    }, [prompt]);

    useEffect(() => {
        const data = window.localStorage.getItem('MY_QS_STATE');
        if (data !== null) setPrompt(data);
    }, []);

    useEffect(() => {
        window.localStorage.setItem('MY_RS_STATE', chatResponse);
    }, [chatResponse]);

    useEffect(() => {
        const data = window.localStorage.getItem('MY_RS_STATE');
        if (data !== null) setChatResponse(data);
    }, []);


    const sendMessage = async (e) => {
        e.preventDefault()
        if (!prompt) return;
        const input = prompt.trim()
        const notification = toast.loading("Test GPT is thinking")
        const response = await getResponse(input)
        const data = await response.json()
        if (response.status !== 200) {
            throw data.error || new Error(`Request failed with status ${response.status}`)
        }
        // setChatResponse(data.result)
        setConversation(oldConversation => [...oldConversation,
        {
            type: "user",
            value: prompt,

        },
        {
            type: "bot",
            value: data.result
        }
        ])

        console.log(conversation)
    }


    const handleSubmit = () => {
        console.log("CLick submit button")
        {
            component.map((x, i) => {
                return <MDTypography key={i} child={x.id}
                />
            })
        }
    }
    const handleChange = () => {
        console.log("Handle Change")
        // 
    }
    return (
        <>
            <MDBox sx={{ height: '80%' }}>
                {conversation.map(chat => {
                    return (
                        <>
                            <MDTypography
                                variant="button"
                                color={chat.type === "bot" ? "dark" : "dark"}
                                fontWeight="medium"
                                className={chat.type === "bot" ? 
                                " bg-blue-200 m-1 p-1  flex flew-row w-2/4 rounded-lg absolute "
                                 : 
                                " bg-green-200  m-1 p-1 rounded-lg w-1/4 absolute flex flex-row-reverse right-0 ..."}
                            >
                                 {chat.type === "bot" ?
                                    <Image height='30%' className='flex flew-row bg-gray-400 m- p- rounded-lg ' width='50%'  src={person} alt="user" />
                                    :
                                    <Image alt="bot" height='30%' className='m-1 p-1 rounded-lg  absolute flex flex-row-reverse right-0 ...' width='30%' src={bot} />
                                    }
                                {chat.value}
                            </MDTypography><br />
                        </>
                    )
                })}
            </MDBox>
            <div className='bg-grey-700/50 text-gray-400 rounded-lg text-sm  ' >
                <form className=' p-5 space-x-5 flex' onSubmit={e => sendMessage(e)}>
                    <MDInput
                        name="userQuery"
                        value={prompt}
                        className='flex-1'
                        color="success"
                        // disabled={!session}
                        onChange={e => {
                            setPrompt(e.target.value)
                        }}
                        type="text" placeholder="Enter your question?" />
                    <MDButton type="submit"

                        variant="contained" 
                        color='dark'
                        disabled={!prompt}
                        onClick={sendMessage}>
                        </MDButton>
                </form>
            </div>
        </>
    )
}