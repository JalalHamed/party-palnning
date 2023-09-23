import { Stack, Typography } from '@mui/material';
import { Icon, ThemeLangButtons } from 'components/global';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Header: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
      <Stack direction='row' alignItems='center' gap='13px'>
        <Icon id='arrowLeft' onClick={() => navigate('/')} />
        <Typography>{t('checklist.header')}</Typography>
      </Stack>
      <ThemeLangButtons />
    </Stack>
  );
};

export default Header;
