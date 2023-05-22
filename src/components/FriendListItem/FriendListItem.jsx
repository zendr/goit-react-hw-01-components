import PropTypes from 'prop-types';
import {
  FriendsListItem,
  ItemStatus,
  AvatarItem,
  FriendName,
} from './friendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <FriendsListItem key={id}>
      <ItemStatus online={isOnline}>{isOnline}</ItemStatus>
      <AvatarItem src={avatar} alt="User avatar" width="50" />
      <FriendName>{name}</FriendName>
    </FriendsListItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};
