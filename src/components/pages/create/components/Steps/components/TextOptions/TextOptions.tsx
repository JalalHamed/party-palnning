import { Box, Stack, Typography, alpha, useTheme } from '@mui/material';
import { Icon } from 'components/global';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { TState } from 'store';
import {
  setAlcohol,
  setDecoration,
  setEInvite,
  setFoodArrangement,
  setGames,
} from 'store/eventSlice';
import {
  TAlcohol,
  TDecoration,
  TEInvite,
  TFoodArrangement,
  TGames,
} from 'types';
import { getI18nStepKey, getOptions } from './utils';

const TextOptions: FC = () => {
  const { t } = useTranslation();
  const event = useSelector((state: TState) => state.event);
  const options = getOptions(event.step);
  const { palette } = useTheme();
  const dispatch = useDispatch();

  const isSelected = (option: string): boolean => {
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
      case 'decoration':
        dispatch(setDecoration(option as TDecoration));
        break;
      case 'games':
        dispatch(setGames(option as TGames));
        break;
    }
  };

  return (
    <Stack gap='24px'>
      <Icon id={event.step} style={{ margin: '0 auto' }} />
      <Typography>{t(`create.${getI18nStepKey(event.step)}.title`)}</Typography>
      <Stack gap='16px'>
        {options?.map((option) => (
          <Box
            key={option}
            bgcolor={
              isSelected(option)
                ? alpha(palette.primary.main, 0.3)
                : 'base.cards'
            }
            borderRadius='8px'
            padding='12px 15px'
            border={isSelected(option) ? '1px solid' : ''}
            borderColor={isSelected(option) ? 'primary.main' : ''}
            sx={{
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: alpha(palette.primary.main, 0.3),
              },
            }}
            onClick={() => handleClick(option)}
          >
            {t(`create.${getI18nStepKey(event.step)}.${option}`)}
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};

export default TextOptions;
