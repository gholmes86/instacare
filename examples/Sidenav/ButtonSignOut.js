

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types"

// @mui material components
import Collapse from "@mui/material/Collapse"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import Icon from "@mui/material/Icon"

// app components
import MDBox from "/components/MDBox"

// Custom styles for the SidenavItem
import {
  item,
  itemContent,
  itemArrow,
} from "/examples/Sidenav/styles/sidenavItem"

// app contexts
import { useMaterialUIController } from "/context"
import SignOut from '../../pages/signout';


function ButtonSignOut({  }) {

  return (
    <>
      <button type="button" onClick={SignOut()}>Sign Out</button>
    </>
  )
}


export default ButtonSignOut
