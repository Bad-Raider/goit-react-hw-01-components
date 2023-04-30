import PropTypes from "prop-types";

export const FriendList = ({ friends }) => {
    return (
        <section className="sections-friend">
            <ul className="friend-list">
            {friends.map(friend => (
                <li key={friend.id} className="item">
                <span className="status"></span>
                    <img className="avatar" src={friend.avatar} alt=
                        {friend.name + " avatar"}   width="48" />
                <p className="name">{friend.name}</p>
            </li>
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
    })
    ) 
};
