import { Typography } from "@mui/material";
import DevelopersInfo from "../../Components/DevelopersInfo";
import { styles } from "./muiStyles";
import Style from "./style";
import { TfiEmail } from "react-icons/tfi";

export default function AboutPage() {
  return (
    <Style.Container>
      <Style.ContainerAbout>
        <Typography sx={styles.firstText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores similique nam dolore, reiciendis ut, repellendus itaque iste veniam non vitae laborum voluptate quaerat quae nulla id quia quo a tempore.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt odit rem, numquam nihil aut aperiam provident velit non consequuntur officia sit voluptate laborum alias ab! Atque impedit aliquam eaque quam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, aspernatur dolorum? Minus itaque animi tempora obcaecati, facere nisi earum architecto nostrum nam, commodi facilis unde. Nostrum nihil harum architecto autem.
        </Typography>
        <Style.DevelopersContainer>
          <DevelopersInfo></DevelopersInfo>
          <DevelopersInfo></DevelopersInfo>
          <DevelopersInfo></DevelopersInfo>
          <DevelopersInfo></DevelopersInfo>
          <DevelopersInfo></DevelopersInfo>
          <DevelopersInfo></DevelopersInfo>
          <DevelopersInfo></DevelopersInfo>
        </Style.DevelopersContainer>
        
      </Style.ContainerAbout>
      <Style.Footer>
        <div>
          <h1><TfiEmail/><span/> fgatlas@gmail.com</h1>
          <h1>fga-eps/2022-2-Squad04</h1>
        </div>
      </Style.Footer> 
    </Style.Container>
  );
}