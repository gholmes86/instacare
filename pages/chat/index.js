import react from 'react';

import DashboardNavbar from "/examples/Navbars/DashboardNavbar";
import DashboardLayout from "/examples/LayoutContainers/DashboardLayout";

import ChatBot from 'react-simple-chatbot';
import { signOut, getSession } from "next-auth/react"
import Post from "../post"




export default function Chat() {
    
    return (
        <>
            <DashboardLayout>
                <DashboardNavbar />
                <ChatBot
                width="5"
                    steps={[
                    {
                        id: 'question',    
                        message:"he",                    
                        // user: true,
                        trigger: 'q-result',
                    },
                    {
                        id: 'q-result',
                        // message: (<input
                        //     type="text"
                        //     // name="animal"
                        //     placeholder="Enter an animal"
                        //     // value={animalInput}
                        //     // onChange={(e) => setAnimalInput(e.target.value)}
                        // /> ),
                        trigger: 'submit'
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
                            { value: 'n', label: 'No', trigger: 'no-submit' }
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