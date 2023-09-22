import { Stack, Typography } from '@mui/material';
import { OptionCard } from 'components/global';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { OCCASIONS } from '../constants';

const Occasion: FC = () => {
  const { t } = useTranslation();
  const activeOccasion = useSelector((state: any) => state.event.occasion);

  return (
    <Stack gap='16px'>
      <Typography variant='body2'>{t('create.occasions.title')}</Typography>
      <Stack direction='row' flexWrap='wrap' gap='14px'>
        {OCCASIONS.map((occasion) => (
          <OptionCard key={occasion} id={occasion} active={activeOccasion} />
        ))}
      </Stack>
    </Stack>
  );
};

export default Occasion;
