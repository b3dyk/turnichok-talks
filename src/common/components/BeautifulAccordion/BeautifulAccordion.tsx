import { Box, useMediaQuery } from '@mui/material';
import { ReactElement } from 'react';
import { SxPropsInterface } from 'src/common/interfaces';
import { Nav, VeriticalSlide, HorizontalSlide, Title } from './components';
import { useNavigation, useVariantStyles } from './hooks';
import { ItemInterface, TypeInterface, VariantInterface } from './interfaces';
import { useBorderRadius } from './hooks/useBorderRadius';

interface Props {
  items: ItemInterface[];
  type?: TypeInterface;
  variant?: VariantInterface;
  verticalSlideWidth?: string;
  sx?: SxPropsInterface;
}

export const BeautifulAccordion = ({
  items,
  type = 'controlled',
  variant = 'vertical',
  verticalSlideWidth = '864',

  sx,
}: Props): ReactElement => {
  const { onChangeSlide, dataItems } = useNavigation(items, type);

  const styles = useVariantStyles(variant);

  const mergeRootStyles = { ...styles.root, ...sx };

  const { borderRadiusLeft, borderRadiusRight } = useBorderRadius();

  const isMobile = useMediaQuery('(max-width:768px)');

  return (
    <Box sx={mergeRootStyles}>
      {dataItems.map(({ index, title, isActive, component }, idx) => (
        <Box
          className={`bfa-block-root bfa-${variant}-block`}
          key={index}
          sx={styles.block}
        >
          <Nav
            onClick={onChangeSlide(index)}
            variant={variant}
            sx={{
              borderTopLeftRadius: borderRadiusLeft(idx),
              borderBottomLeftRadius: isMobile
                ? borderRadiusRight(idx, dataItems, isActive)
                : borderRadiusLeft(idx),
              borderTopRightRadius: isMobile
                ? borderRadiusLeft(idx)
                : borderRadiusRight(idx, dataItems, isActive),
              borderBottomRightRadius: borderRadiusRight(
                idx,
                dataItems,
                isActive
              ),
            }}
          >
            <Title sx={styles.title} variant={variant}>
              {title}
            </Title>
          </Nav>

          {variant === 'vertical' && (
            <VeriticalSlide
              isActive={isActive}
              variant={variant}
              verticalSlideWidth={verticalSlideWidth}
            >
              {component}
            </VeriticalSlide>
          )}

          {variant === 'horizontal' && (
            <HorizontalSlide isActive={isActive} variant={variant}>
              {component}
            </HorizontalSlide>
          )}
        </Box>
      ))}
    </Box>
  );
};
