import { AppContainer } from './App.styled';
import { Profile } from 'components/Profile/Profile.jsx';
import user from 'data/user';
import { Statistics } from 'components/Statistics/Statistics.jsx';
import data from 'data/data';
import { FriendsList } from 'components/FriendList/FriendList.jsx';
import friends from 'data/friends';
import { TransactionHistory } from 'components/TransactionHistory/Transactions.jsx';
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