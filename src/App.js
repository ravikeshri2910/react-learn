import ExpenseItem from "./components/ExpenseItems";

function App() {

  const expense = [
    {
      tittle: 'Car Insuranse',
      amount: '28',
      date: new Date(2021, 2, 28),
      location: 'Delhi'
    },
    {
      tittle: 'Food',
      amount: '65',
      date: new Date(2021, 3, 28),
      location: 'Mumbai'
    },
    {
      tittle: 'Hotel',
      amount: '10',
      date: new Date(2021, 3, 30),
      location: 'Goa'
    },
    {
      tittle: 'Travel',
      amount: '20',
      date: new Date(2021, 4, 27),
      location: 'Assam'
    },
  ]

  return (
    <div>
      <h2>Let's get started!</h2>
      <div>
        {expense.map((expense, index) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            location={expense.location}
          ></ExpenseItem>
        ))}

      </div>
    </div>
  );
}

export default App;
