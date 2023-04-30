import { Profile } from './user/userCard';
import userData from './user/user.json';
import { Statistics } from './statistics/statistics';
import statisticsData from './statistics/data.json';
import {FriendList} from './friendList/friendList';
import friends from './friendList/friends.json';
import { TransactionHistory } from './transaction/transaction';
import transactions from './transaction/transactions.json';
  
export const App = () => {
  return (
    <>
      <Profile 
        avatar = {userData.avatar}
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        stats={userData.stats}
        followers={userData.stats.followers}
        likes={userData.stats.likes}
        views = {userData.stats.views}
      />
      <Statistics stats={statisticsData} title="Upload stats" />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
      </>
  );
};



