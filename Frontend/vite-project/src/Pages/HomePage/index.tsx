//Colocar link nos botões

import Style from "./style"
import Logo from './../../Images/Logo.png'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import buttonTheme from "../../GlobalStyles/ButtonStyle/themes";
import { TfiEmail, TfiGithub } from "react-icons/tfi";
import { ThemeProvider, Typography } from "@mui/material";
import DevelopersInfo from "../../Components/DevelopersInfo";
import muiStyle from "../../GlobalStyles/ButtonStyle/muiStyles";
import arrayImagesDevelopers from "./arrayImagesDevelopers";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
const navigate = useNavigate();

    return (
        <>
            <Style.FirstPart>
                <Style.ToolBar>
                    <img src={Logo} alt="Logo"/>
                    <div className="links">
                        <p onClick={() => window.scrollTo(0, 2000)}>Contato</p>
                        <p onClick={() => window.scrollTo(0, 1000)}>Sobre</p>
                        <p>Mapa</p>
                    </div>
                </Style.ToolBar>
                <Style.Left>
                    <div className="image"></div>
                </Style.Left>
                <Style.Right>
                    <div>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori
                        </p>

                        <ThemeProvider theme={buttonTheme}>
                            <Stack direction="row" spacing={2}>
                                <Button onClick={() => navigate('/subjects')} variant="contained" sx={muiStyle.style.button}>Encontrar sala</Button>
                            </Stack>
                        </ThemeProvider>
                    </div>
                </Style.Right>
            </Style.FirstPart>
            <Style.Container>
        <Style.ContainerAbout>
            <Typography sx={muiStyle.style.firstText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores similique nam dolore, reiciendis ut, repellendus itaque iste veniam non vitae laborum voluptate quaerat quae nulla id quia quo a tempore.
            </Typography>
            <Style.DevelopersContainer>
                {arrayImagesDevelopers.map((image:any, index:number) => 
                  <DevelopersInfo image={image}></DevelopersInfo>
                )}
            </Style.DevelopersContainer>
            </Style.ContainerAbout>
            
        </Style.Container>
        <Style.Footer>
                <div>
                    <h1><TfiEmail/><span/> fgatlas@gmail.com</h1>
                    <h1><TfiGithub /><span/>fga-eps/2022-2-Squad04</h1>
                </div>
            </Style.Footer> 
        </>
    )
}