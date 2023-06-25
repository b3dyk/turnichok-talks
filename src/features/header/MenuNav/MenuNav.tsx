import { Box } from '@mui/system';
import { NavItem, NavList } from './components';
import { useNavigateData } from 'src/common/hooks/useNavigateData';

export const MenuNav = () => {
  const navigation = useNavigateData('normal');
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          marginRight: 'auto',
          marginLeft: '30px',
        }}
        component="ul"
      >
        {navigation.map(({ id, title, type, href, items }) =>
          type === 'link' ? (
            <NavItem key={id} title={title} href={`${href}`}/>
          ) : (
            <NavList key={id} title={title} items={items}/>
          )
        )}
      </Box>
    </Box>
  );
};
