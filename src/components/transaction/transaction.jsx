import PropTypes from "prop-types";
import css from './transaction.module.css'

export const TransactionHistory = ({items}) => {
    return (
        <section className={css.sectionTransaction}>
            <table className={css.transactionHistory}>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>

                <tbody>
                    {items.map((transaction, index) => (
                        <tr key={transaction.id} style={
                            isEven(index) ? {backgroundColor: "rgb(13, 213, 113)"}: {backgroundColor: "#dcd7d7"}
                        }>
                        <td>{transaction.type}</td>
                        <td>{transaction.amount}</td>
                        <td>{transaction.currency}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }).isRequired
    ).isRequired 
};


function isEven(number) {
  return number % 2 === 0;
}

