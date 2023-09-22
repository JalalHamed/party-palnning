import { LinearProgress, Stack, Typography } from '@mui/material';
import { Icon, ThemeLangButtons } from 'components/global';
import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Header: FC<{ step: string }> = ({ step }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    switch (step) {
      case 'occasion':
        setValue(100 / 8);
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
