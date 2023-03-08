import  Message  from "./message";
import { useSession } from "next-auth/react"
import { useState, useEffect } from "react"


import { signOut, getSession } from "next-auth/react"

import SmartToyRoundedIcon from '@mui/icons-material/SmartToyRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import MDBox from './MDBox/index';

export default function Chat() {

    const {data: session} = useSession()
    const [conversation, setConversation] = useState([])

    return (
        <div>
            {/* <MDBox sx={{ height: '80%' }}><SmartToyRoundedIcon />
                {conversation.map(chat => {
                    return (
                        <>
                            <MDTypography
                                variant="button"
                                color={chat.type === "bot" ? "white" : "primary"}
                                fontWeight="medium"
                                className='flex-row-reverse'
                            >
                                {chat.value}
                            </MDTypography><br />
                            <PersonRoundedIcon />
                        </>
                    )
                })}
            </MDBox> */}
        </div>
    ) 
}

export const getServerSideProps = async (ctx) => {
    const session = await getSession(ctx)
    if (!session)
        return {
            redirect: {
                destination: "/login",
            },
        }

    return {
        props: { session },
    }
}