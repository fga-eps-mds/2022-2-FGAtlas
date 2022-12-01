import Style from "./style"
import Logo from './../../Images/Logo.png'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import buttonTheme from "./themes";
import { ThemeProvider } from "@mui/material";

export default function HomePage() {
    return (
        <Style.FirstPart>
            <Style.ToolBar>
                <img src={Logo} alt="Logo"/>
                <div className="links">
                    <p>Contato</p>
                    <p>Sobre</p>
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
                        <Button variant="contained" color='secondary'>Cadastre-se</Button>
                    </Stack>
                </ThemeProvider>
                <div className="images">

                </div>
            </Style.Right>
        </Style.FirstPart>
    )
}