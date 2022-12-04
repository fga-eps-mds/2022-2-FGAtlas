import Style from "./style"
import Logo from './../../Images/Logo.png'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import buttonTheme from "./themes";
import { ThemeProvider, Typography } from "@mui/material";
import AboutPage from "../AboutPage";

const styles = {
  button: {
    color: '#ffffff',
  }
};

export default function HomePage() {
    return (
        <>
            <Style.FirstPart>
                <Style.ToolBar>
                    <img src={Logo} alt="Logo"/>
                    <div className="links">
                        <p onClick={() => window.scrollTo(0, 2000)}>Contato</p>
                        <p onClick={() => window.scrollTo(0, 1000)}>Sobre</p>
                        <p>Login</p>
                    </div>
                </Style.ToolBar>
                <div className="left"></div>
                <Style.Right>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori
                    </p>

                    <ThemeProvider theme={buttonTheme}>
                        <Stack direction="row" spacing={2}>
                            <Button variant="contained" sx={styles.button}>Cadastre-se</Button>
                        </Stack>
                    </ThemeProvider>
                    <div className="images">

                    </div>
                </Style.Right>
            </Style.FirstPart>
            <AboutPage/>
        </>
    )
}