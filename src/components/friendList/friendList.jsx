import PropTypes from "prop-types";
import css from './friends.module.css'


export const FriendList = ({ friends, }) => {
    return (
        <section className={css.sectionsFriend}>
            <ul className="friend-list">
            {friends.map(({id, avatar, name,isOnline }) => (
                <li key={id} className={css.item}>
                    <span className={
                        isOnline ? css.isOnline : css.isOfline
                    }></span>
                    <img className="avatar" src={avatar} alt=
                        {name + " avatar"} width="48" />
                <p className="name">{name}</p>
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
