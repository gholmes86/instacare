import react from 'react';

import DashboardNavbar from "/examples/Navbars/DashboardNavbar";
import DashboardLayout from "/examples/LayoutContainers/DashboardLayout";

import { signOut, getSession } from "next-auth/react"




export default function ProfileOverview() {
    return (
        <>
            <DashboardLayout>
                <DashboardNavbar />
                <h1>Hello this is Gabrial</h1>
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