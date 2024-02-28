import {
  AppBar,
  Backdrop,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { Suspense, lazy, useState } from "react";
import { orange } from "../../constants/color";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import Groups3Icon from "@mui/icons-material/Groups3";
import LogoutIcon from "@mui/icons-material/Logout";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

// Lazy import
const Search = lazy(() => import("../speific/Search"));
const Notication = lazy(() => import("../speific/Notifications"));
const NewGroup = lazy(() => import("../speific/NewGroup"));

const Header = () => {
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [isNotification, setIsNotification] = useState(false);

  const hanldeMobile = () => {
    console.log("Clicked");
    setIsMobile(!isMobile);
  };

  const openSearchDialog = () => {
    console.log("Search");
    setIsSearch(!isSearch);
  };

  const openNewGroup = () => {
    console.log("Group Opened");
    setIsNewGroup(!isNewGroup);
  };

  const openNotifcation = () => {
    setIsNotification(!isNotification);
  };

  const navigateToGroup = () => {
    navigate("/groups");
  };

  const logoutHanlder = () => {
    console.log("Logged Out");
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar position="static" sx={{ bgcolor: orange }}>
          <Toolbar>
            <Typography
              variant="h6"
              display={{ xs: "none", sm: "block" }}
              fontWeight={900}
            >
              Chat Buddy
            </Typography>
            <Box display={{ xs: "block", sm: "none" }}>
              <IconButton color="inherit" onClick={hanldeMobile}>
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box>
              <Tooltip title="Search Here">
                <IconButton color="inherit" size="" onClick={openSearchDialog}>
                  <SearchIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="New Group">
                <IconButton color="inherit" size="" onClick={openNewGroup}>
                  <AddIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Manage Group">
                <IconButton color="inherit" size="" onClick={navigateToGroup}>
                  <Groups3Icon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Your Notifications">
                <IconButton color="inherit" size="" onClick={openNotifcation}>
                  <NotificationsActiveIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Logout">
                <IconButton color="inherit" size="" onClick={logoutHanlder}>
                  <LogoutIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      {isSearch && (
        <Suspense fallback={<Backdrop open />}>
          <Search />
        </Suspense>
      )}
      {isNotification && (
        <Suspense fallback={<Backdrop open />}>
          <Notication />
        </Suspense>
      )}
      {isNewGroup && (
        <Suspense fallback={<Backdrop open />}>
          <NewGroup />
        </Suspense>
      )}
    </>
  );
};

export default Header;
