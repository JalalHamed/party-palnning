import { Stack, Typography } from '@mui/material';
import { OptionCard } from 'components/global';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { setGuestSize } from 'store/eventSlice';
import { TGuestSize } from 'types';
import { GUEST_SIZE } from '../constants';

const GuestSize: FC<{ active: TGuestSize }> = ({ active }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  return (
    <Stack gap='16px'>
      <Typography variant='body2'>{t('create.guest-size.title')}</Typography>
      <Stack direction='row' flexWrap='wrap' gap='14px'>
        {GUEST_SIZE.map((size) => (
          <OptionCard
            key={size}
            step='guest-size'
            id={size as TGuestSize}
            active={active}
            onClick={() => dispatch(setGuestSize(size as TGuestSize))}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default GuestSize;
