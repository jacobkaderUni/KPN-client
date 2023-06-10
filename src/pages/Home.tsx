import React, { useState } from "react";
import Background from "../components/Background";
import employees from "/Users/jacobkader/Documents/GitHub/KPN-client/src/services/employees.json";

interface IForm {
  id: number | string;
  password: string;
}
function Home() {
  const [form, setForm] = useState<IForm>({
    id: "",
    password: "",
  });

  const handleLogin = () => {
    const employee = employees.find(
      (employee) =>
        employee.id === form.id && employee.password === form.password
    );
    if (employee) {
      console.log(employee);
      console.log("welcome " + employee.name);
    } else {
      console.log("not found");
    }
  };

  return (
    <Background>
      <div>
        <text>Sign in</text>
        <input
          name="userid"
          placeholder="User id"
          type="intiger"
          required
          value={form.id}
          onChange={(text) => {
            setForm({ ...form, id: text.target.value });
          }}
        />
        <input
          name="password"
          placeholder="Password"
          type="password"
          required
          value={form.password}
          onChange={(text) => {
            setForm({ ...form, password: text.target.value });
          }}
        />

        <button onClick={handleLogin}>Sign in</button>
      </div>
    </Background>
  );
}

export default Home;
