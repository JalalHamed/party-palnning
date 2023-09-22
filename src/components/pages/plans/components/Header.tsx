import { Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import UserProfilePic from 'assets/images/User.png';
import { Icon } from 'components/global';
import ThemeLangButtons from 'components/global/ThemeLangButtons';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const Header: FC = () => {
  const { breakpoints } = useTheme();
  const isSmUp = useMediaQuery(breakpoints.up('sm'));
  const { t } = useTranslation();
  const currentLang = localStorage.getItem('i18nextLng');

  return (
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
      <Typography variant='h3' color='texture.main'>
        {t('greetings', { name: 'Alex' })}
      </Typography>
      <Stack direction='row' alignItems='center' gap='8px'>
        <ThemeLangButtons />
        <Icon id='ProfilePicWrapper' />
        <img
          src={UserProfilePic}
          alt='User Profile Pic'
          loading='lazy'
          width='32px'
          height='32px'
          style={{
            position: 'absolute',
            [currentLang === 'fa' ? 'left' : 'right']: isSmUp ? '28px' : '20px',
            top: isSmUp ? '28px' : '22px',
          }}
        />
      </Stack>
    </Stack>
  );
};

export default Header;
