import { Menu, Box } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { NavListItem } from './NavListItem';
import { useNavList } from '../hooks/useNavList';
import { NavListButton } from './NavListButton';

interface Props {
  title: string;
  items: Array<{
    id: number;
    title: string;
    href: string;
  }>;
}

export const NavList = ({ title, items }: Props) => {
  const { handleClick, handleClose, isOpen, anchorEl } = useNavList();

  return (
    <Box component="li" sx={{ alignSelf: 'stretch', display: 'flex' }}>
      <NavListButton onClick={handleClick} isOpen={isOpen} title={title}/>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{
          top: 0,
          '& .MuiPaper-root': {
            backgroundColor: 'secondary.main',
            color: 'secondary.lightText',
            borderRadius: 0,
          },
          '& .MuiList-root': {
            paddingY: 0,
          },
        }}
      >
        {items.map(({ id, title, href }) => (
          <MenuItem
            key={id}
            onClick={handleClose}
            sx={{
              width: '250px',
              p: 0,
            }}
          >
            <NavListItem href={`/${href}`} title={title}/>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};
