const Birthday = () => {
  return (
    <div className="bg-pink-300 h-screen">
      <BirthdayList />
    </div>
  );
};

export default Birthday;

const birthdayPeople = [
  {
    id: 1,
    img: "/profile img1.jpg",
    name: "Bertie Yates",
    age: "29 years",
  },
];

const BirthdayList = () => {
  return (
    <div className="p-5 bg-white">
      <h1>birthdays today</h1>

      <div>
        {birthdayPeople.map(({ id, name, age }) => (
          <BirthdayListItem id={id} name={name} age={age} />
        ))}
      </div>

      <button>Clear All</button>
    </div>
  );
};

const BirthdayListItem = ({ img, name, age }) => {
  return (
    <div>
      <img src={img} alt="" />
      <div>
        <h2>{name}</h2>
        <p>{age}</p>
      </div>
    </div>
  );
};
