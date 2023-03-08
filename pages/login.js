

import { useState } from "react"

import Link from "next/link"

// @mui material components
import Switch from "@mui/material/Switch"


// app components
import MDBox from "/components/MDBox"
import MDTypography from "/components/MDTypography"
import MDInput from "/components/MDInput"
import MDButton from "/components/MDButton"

// Authentication layout components
import SignInLayout from "/pagesComponents/authentication/components/SignInLayout"

// Image
import bgImage from "/assets/images/illustrations/illustration-reset.jpg"


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useSession, signIn, getSession} from "next-auth/react"
import { useRouter } from "next/router"



function Login() {
  const [email, setEmail] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const { data: session, status } = useSession()
  const { push } = useRouter()
  const router = useRouter()
  const [rememberMe, setRememberMe] = useState(false)

  // const [email, setEmail] = useState("")

  const [password, setPassword] = useState("")
  if (status === "loading")
    return (
      <>
        {" "}
        <div className=" mx-auto my-auto container flex flex-col items-center justify-center">
          <div
            className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
            role="status"
          ></div>
          <span className="visually-hidden text-white">Loading...</span>
        </div>
      </>
    )

  const handlesubmitemail = (e) => {
    setEmail(e)
  }
  const handlesubmitpassword = (e) => {
    setPassword(e)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const obj1 = {
      email: email,
      password: password,
    }
    console.log(obj1)
    const res = await signIn("credentials", {
      email: obj1.email,
      password: obj1.password,
      redirect:false
    }).then(({ ok, error }) => {
      if (ok) {
        router.push("/dashboard");
        toast.success('Login Successful', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        console.log(error)
        toast.error('Invalid Credentials', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    })
    console.log(res, "res")
  }

  const handleSetRememberMe = () => setRememberMe(!rememberMe)

  return (
    <SignInLayout
      title="Sign In"
      description="Enter your email and password to sign in"
      illustration={bgImage}
    >
      <MDBox component="form" role="form">
        <MDBox mb={2}>
          <MDInput type="email" label="Email" fullWidth
            onChange={(e) => handlesubmitemail(e.target.value)} />
        </MDBox>
        <MDBox mb={2}>
          <MDInput type="password" label="Password" fullWidth
            onChange={(e) => handlesubmitpassword(e.target.value)} />
        </MDBox>
        <MDBox display="flex" alignItems="center" ml={-1}>
          <Switch checked={rememberMe} onChange={handleSetRememberMe} />
          <MDTypography
            variant="button"
            fontWeight="regular"
            color="text"
            onClick={handleSetRememberMe}
            sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
          >
            &nbsp;&nbsp;Remember me
          </MDTypography>
        </MDBox>
        <MDBox mt={4} mb={1}>
          <MDButton variant="gradient" color="dark" size="large" fullWidth
            onClick={handleSubmit}>
            sign in
            <ToastContainer />

          </MDButton>
        </MDBox>
        <MDBox mt={3} textAlign="center">
          <MDTypography variant="button" color="text">
            Don&apost; have an account?{" "}
            <Link href="/authentication/sign-up">
              <a>
                <MDTypography
                  variant="button"
                  color="dark"
                  fontWeight="medium"
                  textGradient
                >
                  Sign up
                  <ToastContainer />
                </MDTypography>
              </a>
            </Link>
          </MDTypography>
        </MDBox>
      </MDBox>
    </SignInLayout>
  )
}

export default Login

export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx)
  if (session)
    return {
      redirect: {
        destination: "/dashboard",
      },
    }

  return {
    props: { session },
  }
}