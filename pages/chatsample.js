import react from 'react';

import DashboardNavbar from "/examples/Navbars/DashboardNavbar";
import DashboardLayout from "/examples/LayoutContainers/DashboardLayout";

import ChatBot from 'react-simple-chatbot';
import { signOut, getSession } from "next-auth/react"
import Post from "./post"




export default function ChatSample() {
    
    return (
        <>
            <DashboardLayout>
                <DashboardNavbar />
                <ChatBot
                width="5"
                    steps={[
                    {
                        id: 'q-firstname',
                        message: 'What is your first name?',
                        trigger: 'firstname',
                    },
                    {
                        id: 'firstname',
                        user: true,
                        trigger: 'q-lastname'
                    },
                    {
                        id: 'q-lastname',
                        message: 'What is your last name?',
                        trigger: 'lastname',
                    },
                    {
                        id: 'lastname',
                        user: true,
                        trigger: 'greeting',
                    },
                    {
                        id: 'greeting',
                        // user: true,
                        message: 'Nice to meet you {previousValue} greeting?',
                        trigger: 'q-email'
                    },
                    {
                        id: 'q-email',
                        message: 'Finally. what is you email?',
                        trigger: 'email',
                    },
                    {
                        id: 'email',
                        user: true,
                        trigger: 'q-submit'
                    },
                    {
                        id: 'q-submit',
                        message: 'Do you wish to submit?',
                        trigger: 'submit'
                    },
                    {
                        id: 'submit',
                        options: [
                            { value: 'y', label: 'Yes', trigger: 'end-message' },
                            { value: 'n', label: 'No', trigger: 'no-submit' },
                            { value: 'm', label: 'M', trigger: 'no-submit' },
                        ]
                    },
                    {
                        id: 'no-submit',
                        message: 'Your information was not submitted.',
                        end: true,
                    },
                    {
                        id: 'end-message',
                        component: <Post />,
                        asMessage: true,
                        end: true,
                    },
                ]} />
            </DashboardLayout>

        </>
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