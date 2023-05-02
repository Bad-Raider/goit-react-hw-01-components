import PropTypes from "prop-types";
import css from './statistics.module.css'


export const Statistics = ({stats, title}) => {
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}

            <ul className={css.statList}>
                {stats.map(stat => (
                   <li style={{ backgroundColor: getRandomColor() }} key={stat.id} className={css.item}>
                    <span className={css.label}>{stat.label}</span>
                    <span className="percentage">{stat.percentage +"%"}</span>
                   </li>
               ))}
            </ul>
        </section>
    )
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }).isRequired
    ).isRequired 
};

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
