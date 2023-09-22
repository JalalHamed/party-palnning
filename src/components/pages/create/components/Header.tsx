import { LinearProgress, Stack, Typography } from '@mui/material';
import { Icon, ThemeLangButtons } from 'components/global';
import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TState } from 'store';
import { TStep } from 'types';

const Header: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const step: TStep = useSelector((state: TState) => state.event.step);
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    const oneStep = 100 / 8;

    switch (step) {
      case 'occasion':
        setValue(oneStep);
        break;
      case 'guestSize':
        setValue(oneStep * 2);
        break;
      default:
        break;
    }
  }, [step]);

  return (
    <Stack gap='18px'>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Stack direction='row' alignItems='center' gap='13px'>
          <Icon id='arrowLeft' onClick={() => navigate('/')} />
          <Typography>{t('create.header')}</Typography>
        </Stack>
        <ThemeLangButtons />
      </Stack>
      <LinearProgress
        variant='determinate'
        value={value}
        sx={{ backgroundColor: '#474747' }}
      />
    </Stack>
  );
};

export default Header;
