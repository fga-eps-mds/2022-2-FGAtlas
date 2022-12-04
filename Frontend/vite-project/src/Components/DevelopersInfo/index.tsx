import { Typography } from '@mui/material';
import Image from '../ImageDeveloperInfo';
import Narutin from '../../Images/naruto.jpg';
import { styles } from './styleds/muiStyles';
import Styles from './styleds/styles';

export default function DevelopersInfo () {
  return (
    <Styles.Container>
        <Image img={Narutin}/>
      <Typography sx={styles.developerInfo}> Estudante de Engenharia de Software</Typography>
    </Styles.Container>
  );
}
