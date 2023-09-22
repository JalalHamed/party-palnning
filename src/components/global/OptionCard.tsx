import { Stack, Typography, alpha, useTheme } from '@mui/material';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { IOptionCardProps } from 'types';
import { Icon } from '.';

const OptionCard: FC<IOptionCardProps> = ({ id, active }) => {
  const { t } = useTranslation();
  const { palette } = useTheme();

  return (
    <Stack
      padding={{ sm: '16px' }}
      minWidth='100px'
      minHeight='100px'
      flexGrow={{ sm: 1 }}
      borderRadius='8px'
      bgcolor='base.cards'
      alignItems='center'
      justifyContent='center'
      gap='8px'
      sx={{
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: alpha(palette.base.cards, active === id ? 1 : 0.5),
        },
      }}
    >
      <Icon id={id} />
      <Typography variant='body2'>{t(`create.occasions.${id}`)}</Typography>
    </Stack>
  );
};

export default OptionCard;
