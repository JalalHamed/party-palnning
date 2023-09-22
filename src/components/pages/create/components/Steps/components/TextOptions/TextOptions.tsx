import { Box, Stack, Typography, alpha, useTheme } from '@mui/material';
import { Icon } from 'components/global';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { TState } from 'store';
import { setAlcohol, setEInvite, setFoodArrangement } from 'store/eventSlice';
import { TAlcohol, TEInvite, TFoodArrangement } from 'types';
import { getI18nStepKey, getOptions } from './utils';

const TextOptions: FC = () => {
  const { t } = useTranslation();
  const event = useSelector((state: TState) => state.event);
  const i18nPageKey = getI18nStepKey(event.step);
  const options = getOptions(event.step);
  const { palette } = useTheme();
  const dispatch = useDispatch();

  const isActive = (option: string): boolean => {
    return event[event.step] === option;
  };

  const handleClick = (option: string) => {
    switch (event.step) {
      case 'eInvite':
        dispatch(setEInvite(option as TEInvite));
        break;
      case 'foodArrangement':
        dispatch(setFoodArrangement(option as TFoodArrangement));
        break;
      case 'alcohol':
        dispatch(setAlcohol(option as TAlcohol));
        break;
    }
  };

  return (
    <Stack gap='24px'>
      <Icon id={event.step} style={{ margin: '0 auto' }} />
      <Typography>{t(`create.${i18nPageKey}.title`)}</Typography>
      <Stack gap='16px'>
        {options?.map((option) => (
          <Box
            key={option}
            bgcolor={
              isActive(option) ? alpha(palette.primary.main, 0.3) : 'base.cards'
            }
            borderRadius='8px'
            padding='12px 15px'
            border={isActive(option) ? '1px solid' : ''}
            borderColor={isActive(option) ? 'primary.main' : ''}
            sx={{
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: alpha(palette.primary.main, 0.3),
              },
            }}
            onClick={() => handleClick(option)}
          >
            {t(`create.${i18nPageKey}.${option}`)}
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};

export default TextOptions;
