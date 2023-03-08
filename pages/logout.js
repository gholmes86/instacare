import { useRouter } from "next/router"
import {
    signOut,
    getSession,

} from "next-auth/react"
import { useEffect, useState } from "react"
import DashboardNavbar from "/examples/Navbars/DashboardNavbar";
import DashboardLayout from "/examples/LayoutContainers/DashboardLayout";


import { Dna } from 'react-loader-spinner'
function Logout() {
    const { push } = useRouter()
    const router = useRouter()
    const [isLoading, setIsloading] = useState(false);
    useEffect(() => {
        signOut().then(() => {
            router.push("/login")
        })

    })
    return (
        <>
            {true &&
                <div>
                <div class="loading">
               <DashboardLayout disable={true} />
                       </div>                   
                    <Dna
                        visible={true}
                        height="400"
                        width="400"
                        ariaLabel="dna-loading"
                        wrapperStyle={{
                            marginTop: 200,
                            marginLeft: 700,
                            width: 300,
                            height:300,
}}
                        wrapperClass="dna-wrapper"
                    />
                </div>
            }
        </>
    )
}

export default Logout;
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