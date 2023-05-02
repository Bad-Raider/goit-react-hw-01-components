import PropTypes from 'prop-types';
import {FriendListItem} from './friendListItem/friendListItem'


export const FriendList = ({ friends, }) => {
    return (
        <section>
            <ul className="friend-list">
                {friends.map(({ id, avatar, name, isOnline }) => (
                    <FriendListItem
                        key ={id}
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline}
                    />
            ))}
        </ul>
        </section>
    )
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            isOnline: PropTypes.bool.isRequired,
        }).isRequired
    ).isRequired
};

