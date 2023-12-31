import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { createTheme } from "@mui/material/styles";
import { ContainerBackground } from "../pages/signin/styles";
import { Link } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF59BD",
    },
    secondary: {
      main: "#2a0134",
    },
  },
});

function Header() {
  return (
    <ContainerBackground>
      <AppBar theme={theme} color="secondary" /* position="static" */>
        <Toolbar>
          {/*Inside the IconButton, we 
     can render various icons*/}
          <IconButton
            theme={theme}
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/*This is a simple Menu 
       Icon wrapped in Icon */}

            <MenuIcon />
          </IconButton>
          {/* The Typography component applies 
     default font weights and sizes */}

          <Typography
            theme={theme}
            variant="h5"
            fontFamily={"Poppins"}
            component="div"
            sx={{ flexGrow: 1 }}
            color="primary"
          >
            Allergic Mania
          </Typography>
          <Button>
            <Link
              to="/"
              style={{
                fontFamily: "Poppins",
                fontSize: "3vh",
                textDecoration: "none",
                color: "#FF59BD",
              }}
            >
              <strong>SIGNIN</strong>
            </Link>
          </Button>
          <Button theme={theme} color="primary">
            <strong style={{ fontFamily: "Poppins", fontSize: "3vh" }}>
              SIGNUP
            </strong>
          </Button>
        </Toolbar>
      </AppBar>
    </ContainerBackground>
  );
}

export default Header;
