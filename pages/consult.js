import react from 'react';

import {
    signOut,
    getSession,
} from "next-auth/react"




import DashboardNavbar from "/examples/Navbars/DashboardNavbar";

import DashboardLayout from "/examples/LayoutContainers/DashboardLayout";


export default function ChatSample() {
    return (
        <>
            <DashboardLayout>
                <DashboardNavbar />
                <h1>Consultancy</h1>

            </DashboardLayout></>
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