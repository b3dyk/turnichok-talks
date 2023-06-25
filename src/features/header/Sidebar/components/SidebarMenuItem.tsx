import { TChangeSidebarState, TSidebarListItemVariant } from '../interface';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';
import { useSidebarListItemStyle } from '../hooks';
import Link from 'next/link';

interface Props {
  variant: TSidebarListItemVariant;
  text: string;
  href: string;
  onClickItemLink: TChangeSidebarState;
}

export const SidebarMenuItem = ({ variant, text, href, onClickItemLink }: Props) => {
  const sx = useSidebarListItemStyle(variant);
  return (
    <ListItem disablePadding>
      <Link href={href}>
        <ListItemButton component="a" href={href} sx={sx.listItemButton} onClick={onClickItemLink}>
          <ListItemText primary={text} sx={sx.listItemText} />
        </ListItemButton>
      </Link>
    </ListItem>
  );
};
