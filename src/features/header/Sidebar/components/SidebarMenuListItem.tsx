import ListItem from '@mui/material/ListItem';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { ArrowDown } from 'src/common/icons/ArrowDown';
import List from '@mui/material/List';
import React from 'react';
import { SidebarMenuItem } from './SidebarMenuItem';
import { INavigateInnerItem } from 'src/common/interfaces';
import { TChangeSidebarState, TOnChange } from '..';

interface Props {
  title: string;
  items: INavigateInnerItem[];
  isExpanded: boolean;
  onChange: TOnChange;
  onClickItemLink: TChangeSidebarState
}

export const SidebarMenuListItem = (
  {
    title,
    items,
    isExpanded,
    onChange,
    onClickItemLink,
  }: Props) => {
  return (
    <ListItem disablePadding>
      <Accordion
        expanded={isExpanded}
        onChange={onChange}
        sx={{
          flexGrow: 1,
          '& .MuiAccordionSummary-root, & .MuiAccordionSummary-root.Mui-expanded': {
            minHeight: '48px',
          },
          '& .MuiAccordionSummary-content': {
            my: '12px',
          },
          '& .MuiAccordionDetails-root': {
            pt: '5px',
            px: 0,
            mb: '-20px',
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ArrowDown/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            minHeight: '48px',
            '& .MuiAccordionDetails-root': {
              backgroundColor: 'red',
            },
          }}
        >
          <Typography
            sx={{
              fontSize: '24px',
              lineHeight: '28px',
              fontWeight: 700,
            }}
          >
            {title}
          </Typography>
        </AccordionSummary>

        <AccordionDetails
          sx={{
            pt: '10px',
            pb: 0,
          }}
        >
          <List disablePadding>
            {items.map(({ id, title, href }) => (
              <SidebarMenuItem
                key={id}
                variant="inner"
                text={title}
                href={href}
                onClickItemLink={onClickItemLink}
              />
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
    </ListItem>
  );
};
