

// app components
import MDAvatar from "/components/MDAvatar"

// @mui icons
import Icon from "@mui/material/Icon"

// Images
import profilePicture from "/assets/images/team-3.jpg"

const routes = [
  {
    type: "collapse",
    name: "Gabrial",
    key: "Gabrial",
    icon: <MDAvatar src={profilePicture.src} alt="InstaCare" size="sm" />,
    collapse: [


  {
    type: "collapse",
    name: "My Profile",
    key: "my-profile",
    route: "/profile/profile-overview",
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Settings",
    key: "profile-settings",
    route: "/account/settings",
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Logout",
    key: "logout",
    route: "/logout",
    noCollapse: true,
      },
    ]
  },
  { type: "divider", key: "divider-0" },
  {
    type: "collapse",
    name: "Chat",
    key: "Chat",
    route: "/chatgpt",
    // icon: <Icon fontSize="medium">receipt_long</Icon>,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Consult",
    key: "Consult",
    route: "/consult",
    // icon: <Icon fontSize="medium">receipt_long</Icon>,
    noCollapse: true,
  },

]

export default routes
