import { useState } from "react";

const GuestList = () => {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState<string[]>([]);

  const onClick = () => {
    setName("");
    setGuests([...guests, name]);
  };
  return (
    <div>
      <h3>Guest List</h3>
      <ol>
        {guests.map((guest) => (
          <li key={guest}>{guest}</li>
        ))}
      </ol>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Add Guest</button>
    </div>
  );
};

export default GuestList;
