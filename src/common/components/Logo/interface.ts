export interface ILogo {
  width: number,
  src: string,
}

export interface ILogoData {
  normal: ILogo,
  grey: ILogo,
  small: ILogo,
}

export type TLogoTypes = keyof ILogoData;
