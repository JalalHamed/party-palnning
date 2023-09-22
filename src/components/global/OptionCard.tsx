import { Stack, Typography, alpha } from '@mui/material';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { IOptionCardProps } from 'types';
import { Icon } from '.';

const OptionCard: FC<IOptionCardProps> = ({ step, id, active, onClick }) => {
  const { t } = useTranslation();
  const colors = useSelector((state: any) => state.color);
  const isSelected = active === id;
  const isOccasion = step === 'occasion';

  return (
    <Stack
      padding={{ sm: '16px' }}
      minWidth='100px'
      minHeight={isOccasion ? '100px' : '115px'}
      flexGrow={{ sm: 1 }}
      borderRadius='8px'
      bgcolor={isSelected ? alpha(colors[id], 0.15) : 'base.cards'}
      alignItems={'center'}
      justifyContent={!isOccasion ? 'flex-end' : 'center'}
      border={isSelected ? `1px solid ${colors[id]}` : 'none'}
      gap='8px'
      paddingBottom={{ xs: !isOccasion ? '16px' : 0, sm: 0 }}
      sx={{
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: alpha(colors[id], 0.15),
        },
      }}
      onClick={onClick}
    >
      <Icon id={id} />
      <Stack alignItems='center'>
        <Typography variant='body2'>
          {t(`create.${step}.${id}${!isOccasion ? '.title' : ''}`)}
        </Typography>
        {!isOccasion ? (
          <Typography variant='subtitle2'>
            {t(`create.guest-size.${id}.subtitle`)}
          </Typography>
        ) : null}
      </Stack>
    </Stack>
  );
};

export default OptionCard;
