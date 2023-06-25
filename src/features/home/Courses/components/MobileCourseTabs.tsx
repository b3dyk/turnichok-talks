import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CourseInterface, HandleValueChange } from '../interfaces';

type HandleChange = (value: string) => void;

type HandleExpandedChange = (value: boolean) => void;

interface Props {
  expanded: string | boolean;
  selectedItem: string;
  courseVariant: CourseInterface[];
  handlePanelChange: HandleChange;
  handleMenuItemClick: HandleChange;
  handleExpandedChange: HandleExpandedChange;
  handleValueChange: HandleValueChange;
}

export const MobileCourseTabs = ({
  expanded,
  selectedItem,
  courseVariant,
  handlePanelChange,
  handleMenuItemClick,
  handleExpandedChange,
  handleValueChange,
}: Props) => (
  <Accordion
    expanded={expanded === 'panel'}
    onChange={handlePanelChange('panel')!}
    sx={{ borderRadius: '10px', overflow: 'hidden' }}
  >
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      sx={{
        backgroundColor: 'button.main',
        width: '266px',
        height: '48px',

        '&.Mui-expanded': {
          minHeight: '45px',
        },

        '& .Mui-expanded': {
          m: '0',
        },
      }}
    >
      <Typography sx={{ m: 'auto', fontSize: '18px' }}>
        {selectedItem}
      </Typography>
    </AccordionSummary>
    <AccordionDetails
      sx={{
        p: '0',
        backgroundColor: 'secondary.main',
      }}
    >
      {courseVariant.map(({ id, title }) => (
        <Typography
          key={id}
          onClick={e => {
            handleMenuItemClick(title);
            handleExpandedChange(false);
            handleValueChange(e, id);
          }}
          sx={{
            fontSize: '18px',
            lineHeight: '26px',
            p: '9px',
            color: 'lightPrimary.main',
            '&:not(:last-child)': {
              borderBottom: ' 1px solid #000000',
            },
          }}
        >
          {title}
        </Typography>
      ))}
    </AccordionDetails>
  </Accordion>
);
