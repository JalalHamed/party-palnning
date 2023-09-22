import { SvgIconProps } from '@mui/material';
import {
  Anniversary,
  ArrowLeft,
  Birthday,
  Dark,
  Dinner,
  Light,
  MeetUp,
  Other,
  ProfilePicWrapper,
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
        }[rest.id as string]
      }
    </>
  );
};

export default Icon;
