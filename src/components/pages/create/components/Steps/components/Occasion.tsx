import { Stack, Typography } from '@mui/material';
import { OptionCard } from 'components/global';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { setOccasion } from 'store/eventSlice';
import { TOccasion } from 'types';
import { OCCASIONS } from '../constants';

const Occasion: FC<{ active: TOccasion | undefined }> = ({ active }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  return (
    <Stack gap='16px'>
      <Typography variant='body2'>{t('create.occasion.title')}</Typography>
      <Stack direction='row' flexWrap='wrap' gap='14px'>
        {OCCASIONS.map((occasion) => (
          <OptionCard
            key={occasion}
            step='occasion'
            id={occasion as TOccasion}
            active={active}
            onClick={() => dispatch(setOccasion(occasion as TOccasion))}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default Occasion;
