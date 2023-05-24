import { AppContainer } from './App.styled';
import { Profile } from '../Profile/Profile';
import user from 'data/user';
import { Statistics } from '../Statistics/Statistics';
import data from 'data/data';
import { FriendsList } from '../FriendList/FriendList';
import friends from 'data/friends';
import { TransactionHistory } from '../TransactionHistory/Transactions';
import transactions from 'data/transactions';
export const App = () => {
  return (
    <AppContainer>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </AppContainer>
  );
};