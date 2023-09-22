import { SvgIconProps } from '@mui/material';
import {
  Anniversary,
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
          ProfilePicWrapper: <ProfilePicWrapper {...rest} />,
          Anniversary: <Anniversary {...rest} />,
          Birthday: <Birthday {...rest} />,
          Dinner: <Dinner {...rest} />,
          MeetUp: <MeetUp {...rest} />,
          Other: <Other {...rest} />,
          Light: <Light {...rest} />,
          Dark: <Dark {...rest} />,
        }[rest.id as string]
      }
    </>
  );
};

export default Icon;
