import {
    signOut,
    getSession,
} from "next-auth/react"
import DashboardNavbar from "/examples/Navbars/DashboardNavbar";

import DashboardLayout from "/examples/LayoutContainers/DashboardLayout";


export default function Dashboard() {
    return (
        <DashboardLayout>
            <DashboardNavbar />
            <h1>Hello</h1>
            user table
            implement prisma adapter in nextjs
            create migration file
            prisma adapter
        </DashboardLayout>
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