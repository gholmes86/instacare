

import Link from "next/link"

// @mui material components
import Card from "@mui/material/Card"

// app components
import MDBox from "/components/MDBox"
import MDTypography from "/components/MDTypography"
import MDInput from "/components/MDInput"
import MDButton from "/components/MDButton"
import { useState } from "react"
// Authentication layout components
import CoverLayout from "/pagesComponents/authentication/components/CoverLayout"
import { signUp } from "../../../apis"
import Child from "/components/SignUp/Child"
// Images
import bgImage from "/assets/images/bg-sign-up-cover.jpeg"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignUp(props) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [state, setState] = useState("")
  const [children, setChildren] = useState([])
  // const [inputList, setInputList] = useState([{ name:"",email:"", password:""}])

  const handleSubmitName = (e) => {
    setName(e)
  }
  const handleSubmitEmail = (e) => {
    setEmail(e)
  }
  const handlePhoneNumber = (e) => {
    setPhoneNumber(e)
  }
  const handleSubmitPassword = (e) => {
    setPassword(e)
  }
  const handleConfirmPassword = (e) => {
   
   try{ 
    if (setPassword() !== (e)) {
      alert("Password did not matched")
    }
    setConfirmPassword(e)
   }catch(e){
    console.log(e,"error")
   } 
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const obj = {
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      password: password,
      confirmPassword: confirmPassword,
    }
    console.log(children)
    await signUp(obj).then(async (data) => {
      const result = await data.json
      console.log(result)
    })
  }

  const handleNameChange = async (data) => {
    children.map(child => {
      if (child.id === data.id) {
        child.name = data.value
      }
    })
  }

  const handleAgeChange = async (data) => {
    children.map(child => {
      if (child.id === data.id) {
        child.age = data.value
      }
    })
  }
  const handleDobChange = async (data) => {
    children.map(child => {
      if (child.id === data.id) {
        child.dob = data.value
      }
    })
  }
  const handleGenderChange = async (data) => {
    children.map(child => {
      if (child.id === data.id) {
        child.gender = data.value
      }
    })
  }
  const handleDeleteChild = async (child) => {

    try {
  const newChildren= children.filter(x => x.id !== child)
      
      setChildren(newChildren)
      
  // const list = [...children]
  // list.splice(data, 1)
  // setChildren(list)
  // console.log(list, list.length, "list length")
} catch (error) {
  console.log(error, "error deleting child")
}


  }

  const addChild = () => {
    const newChild = {
      id: children.length + 1,
      name: "",
      age: "",
      dob: "",
      gender: ""
    }
    setChildren([...children, newChild])
  }
  // const handleAddList = async (e) => {
  //   e.preventDefault()
  //   const obj1 = {
  //     childName: childName,
  //     childemail: childEmail,
  //     childpassword: childPassword,
  //   }
  //   setInputList([...inputList, { name: "", age: "", dateOfBirth:"", gender:"" }]);
  // }
  console.log(props, "props")
  return (
    <CoverLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="dark"
          borderRadius="lg"
          coloredShadow="dark"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Join us today
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Enter your email and password to register
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput
                type="text"
                label="Name"
                variant="standard"
                onChange={(e) => handleSubmitName(e.target.value)}
                fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="email"
                label="Email"
                variant="standard"
                onChange={(e) => handleSubmitEmail(e.target.value)}
                fullWidth
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="tel"
                label="Phone Number"
                variant="standard"
                onChange={(e) => handlePhoneNumber(e.target.value)}
                fullWidth
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="password"
                label="Password"
                variant="standard"
                onChange={(e) => handleSubmitPassword(e.target.value)}
                fullWidth
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="password"
                label="Confirm Password"
                variant="standard"
                onChange={(e) => handleConfirmPassword(e.target.value)}
                fullWidth
              />
            </MDBox>
            <MDBox mt={1}>
              {children.map((x, i) => {
                return <Child key={i} child={x.id}
                  onNameChange={handleNameChange}
                  onAgeChange={handleAgeChange}
                  onDobChange={handleDobChange}
                  onGenderChange={handleGenderChange}
                  onClickDelete={handleDeleteChild}
                />
              })}
            </MDBox>

            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="dark" fullWidth onClick={addChild}>
                Add More Childs
              </MDButton>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="dark" fullWidth onClick={handleSubmit}>
                sign up
              </MDButton>
            </MDBox>

            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Already have an account?{" "}
                <Link href="/authentication/sign-in/cover">
                  <a>
                    <MDTypography
                      variant="button"
                      color="dark"
                      fontWeight="medium"
                      textGradient
                    >
                      Sign In
                      <ToastContainer />
                    </MDTypography>
                  </a>
                </Link>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  )
}

export default SignUp


export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}