import { Typography } from '@mui/material';

interface Props {
  techInfo: string;
}

export const TechInfo = ({ techInfo }: Props) => (
  <>
    <Typography variant="p2" component="p">
      {techInfo}
    </Typography>
    <br />
  </>
);
