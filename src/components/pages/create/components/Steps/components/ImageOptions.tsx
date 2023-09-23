import { Stack, Typography, alpha } from '@mui/material';
import { Icon } from 'components/global';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { TState } from 'store';
import { setGuestSize, setOccasion } from 'store/eventSlice';
import { TGuestSize, TOccasion } from 'types';
import { COLORS } from '../constants';
import { IColors } from '../types';
import { getOptions } from '../utils';

const ImageOptions: FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const event = useSelector((state: TState) => state.event);
  const isOccasion = event.step === 'occasion';
  const options = getOptions(event.step);
  const i18nStepKey = event.step === 'guestSize' ? 'guest-size' : 'occasion';

  const isSelected = (option: string): boolean => {
    return event[event.step] === option;
  };

  const handleClick = (option: string) => {
    switch (event.step) {
      case 'occasion':
        dispatch(setOccasion(option as TOccasion));
        break;
      case 'guestSize':
        dispatch(setGuestSize(option as TGuestSize));
        break;
    }
  };

  const isValidOption = (option: string): option is keyof IColors =>
    option in COLORS;

  return (
    <Stack gap='16px'>
      <Typography variant='body2'>{t('create.guest-size.title')}</Typography>
      <Stack direction='row' flexWrap='wrap' gap='14px'>
        {options?.map((option) => {
          // making sure option's type is one of TOccasion | TGuestSize
          // since getOptions can return other options as well
          if (!isValidOption(option)) return null;
          return (
            <Stack
              key={option}
              padding={{ sm: '16px' }}
              minWidth='100px'
              minHeight={isOccasion ? '100px' : '115px'}
              flexGrow={{ sm: 1 }}
              borderRadius='8px'
              bgcolor={
                isSelected(option) ? alpha(COLORS[option], 0.15) : 'base.cards'
              }
              alignItems='center'
              justifyContent={!isOccasion ? 'flex-end' : 'center'}
              border={
                isSelected(option) ? `1px solid ${COLORS[option]}` : 'none'
              }
              gap='8px'
              paddingBottom={{ xs: !isOccasion ? '16px' : 0, sm: '16px' }}
              sx={{
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: alpha(COLORS[option], 0.15),
                },
              }}
              onClick={() => handleClick(option)}
            >
              <Icon id={option} />
              <Stack alignItems='center'>
                <Typography variant='body2'>
                  {t(
                    `create.${i18nStepKey}.${option}${
                      !isOccasion ? '.title' : ''
                    }`
                  )}
                </Typography>
                {!isOccasion ? (
                  <Typography variant='subtitle2'>
                    {t(`create.guest-size.${option}.subtitle`)}
                  </Typography>
                ) : null}
              </Stack>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default ImageOptions;
