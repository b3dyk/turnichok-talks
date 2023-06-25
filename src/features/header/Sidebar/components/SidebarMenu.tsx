import List from '@mui/material/List';
import React from 'react';
import { SidebarMenuListItem } from './SidebarMenuListItem';
import { SidebarMenuItem } from './SidebarMenuItem';
import { useNavigateData } from 'src/common/hooks/useNavigateData';
import { useSidebarMenuList } from '../hooks';
import { TChangeSidebarState } from '../interface';

interface Props {
  onClickItemLink: TChangeSidebarState
}

export const SidebarMenu = ({ onClickItemLink }: Props) => {
  const navigationData = useNavigateData('extended');
  const { expanded, handleChange } = useSidebarMenuList();

  return (
    <List
      sx={{ display: 'flex', flexDirection: 'column', gap: '17px', mb: 'auto', pb: '40px' }}
    >
      {navigationData.map(({ id, title, items, type, href }) =>
        type === 'list' ? (
          <SidebarMenuListItem
            key={id} title={title} items={items}
            isExpanded={expanded === `panel-${id}`}
            onChange={handleChange(`panel-${id}`)}
            onClickItemLink={onClickItemLink}
          />
        ) : (
          <SidebarMenuItem key={id} variant="normal" text={title} href={href} onClickItemLink={onClickItemLink}/>
        )
      )}
    </List>
  );
};
