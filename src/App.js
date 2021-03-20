import './App.css';
import Customer from './components/Customer'

const customers =[
  {
    'id':1,
    'image':'https://placeimg.com/64/64/1',
    'name' :'이창택',
    'birthday' :'941014',
    'gender' :'남자',
    'job' :'직장인'
  },
  {
    'id':2,
    'image':'https://placeimg.com/64/64/2',
    'name' :'삼창택',
    'birthday' :'222222',
    'gender' :'여자',
    'job' :'직장인'
  },
  {
    'id':3,
    'image':'https://placeimg.com/64/64/3',
    'name' :'사창택',
    'birthday' :'333333',
    'gender' :'남자',
    'job' :'직장인'
  }
]


function App() {
  return (
    <div>
      {
        customers.map(c => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          )
        })
      }
    </div>
  );
}

export default App;
