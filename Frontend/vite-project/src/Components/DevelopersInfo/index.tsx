import { Typography } from '@mui/material';
import Image from '../ImageDeveloperInfo';
import { styles } from './styleds/muiStyles';
import Styles from './styleds/styles';

export default function DevelopersInfo (image:any) {
  console.log(image)
  return (
    <Styles.Container>
        <Image img={image.image}/>
      <Typography sx={styles.developerInfo}> Estudante de Engenharia de Software</Typography>
    </Styles.Container>
  );
}
