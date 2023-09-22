import { SvgIconProps } from '@mui/material';
import {
  Anniversary,
  ArrowLeft,
  Birthday,
  Budget,
  Dark,
  Date,
  Dinner,
  EInvite,
  FoodArrangement,
  Large,
  Light,
  Medium,
  MeetUp,
  Other,
  ProfilePicWrapper,
  Small,
  Time,
} from './components';

const Icon = ({ ...rest }: SvgIconProps) => {
  return (
    <>
      {
        {
          profilePicWrapper: <ProfilePicWrapper {...rest} />,
          anniversary: <Anniversary {...rest} />,
          birthday: <Birthday {...rest} />,
          dinner: <Dinner {...rest} />,
          'meet-up': <MeetUp {...rest} />,
          other: <Other {...rest} />,
          light: <Light {...rest} />,
          dark: <Dark {...rest} />,
          arrowLeft: <ArrowLeft {...rest} />,
          small: <Small {...rest} />,
          medium: <Medium {...rest} />,
          large: <Large {...rest} />,
          date: <Date {...rest} />,
          time: <Time {...rest} />,
          budget: <Budget {...rest} />,
          eInvite: <EInvite {...rest} />,
          foodArrangement: <FoodArrangement {...rest} />,
        }[rest.id as string]
      }
    </>
  );
};

export default Icon;
