// app components
import MDBox from "/components/MDBox"
import MDInput from "/components/MDInput"
import MDButton from "/components/MDButton"
import { useState } from "react"
import MDTypography from "/components/MDTypography"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MDDatePicker from "/components/MDDatePicker"

export default function Child(props) {
    const [childName, setChildName] = useState("")
    const [childAge, setChildAge] = useState("")
    const [childDob, setChildDob] = useState("")
    const [childGender, setChildGender] = useState("")
    const [deleteChild, setDeleteChild] = useState([])
    // const [inputList, setInputList] = useState([{ name:"",email:"", password:""}])


    const handleName = (e) => {
        setChildName(e)
    }
    const handleAge = (e) => {
        setChildAge(e)
    }
    const handleDob = (e) => {
        setChildDob(e)
    }
    const handleGender = (e) => {
        setChildGender(e)
    }
    const handleDelete = (e) => {
        setDeleteChild(e)
        console.log(e,"eee")
    }
    

    return (

        <MDBox mb={2} pt={4}>
            <MDTypography display="block" variant="button" color="dark" my={1}>
                Child # {props.child}
            </MDTypography>
            <MDBox mb={2}>
                <MDInput
                    type="text"
                    label="Name"
                    variant="standard"
                    onChange={(e) => handleName(props.onNameChange({ id: props.child, value: e.target.value }))}
                    fullWidth />
            </MDBox>
            <MDBox mb={2}>
                <MDInput
                    type="number"
                    label="Age"
                    variant="standard"
                    onChange={(e) => handleAge(props.onAgeChange({ id: props.child, value: e.target.value }))}
                    fullWidth
                />
            </MDBox>
            <MDBox mb={2}>
                <MDDatePicker
                    label="Date of Birth"
                    onChange={(e) => handleDob(props.onDobChange({ id: props.child, value: e }))}
                    sx={{ m: 1, width: '100px' }}
                    fullWidth
                />
            </MDBox>
            <MDBox mb={2}>
                <MDInput
                    type="text"
                    label="Gender"
                    variant="standard"
                    onChange={(e) => handleGender(props.onGenderChange({ id: props.child, value: e.target.value }))}
                    fullWidth
                />
            </MDBox>
            <MDBox mt={2} mb={1}>
                <MDButton variant="gradient" color="dark" onClick={(e) => props.onClickDelete(props.child)} >
                    Delete Child
                </MDButton>
            </MDBox>
        </MDBox>



    )
}

export async function getServerSideProps(context) {
    return {
        props: {}, // will be passed to the page component as props
    }
}