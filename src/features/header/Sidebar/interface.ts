import React from 'react';

export type TChangeSidebarState = (event: React.KeyboardEvent | React.MouseEvent) => void
export type TToggleDrawer = (open: boolean) => TChangeSidebarState;

export type TSidebarListItemVariant = 'inner' | 'normal';

interface ISubmitValue {
  promoCode: string;
}

interface ISubmitAction {
  resetForm: () => void;
}

export type ISubmit = (values: ISubmitValue, actions: ISubmitAction) => void;

export type IUser = {
  name: string;
  lastName: string;
  avatar: string;
}

export type TOnChange = (event: React.SyntheticEvent, isExpanded: boolean) => void
export type THandleChange = (panel: string) => TOnChange;
