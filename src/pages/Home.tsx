import React, { useState } from "react";
import Background from "../components/Background";
import employees from "/Users/jacobkader/Documents/GitHub/KPN-client/src/services/employees.json";
import { useNavigate } from "react-router-dom";
import Btn from "../components/Btn";
import InptSI from "../components/InptSI";
import "/Users/jacobkader/Documents/GitHub/KPN-client/src/assets/styles/BackgroundStyles.css";
import { toast } from "react-toastify";
interface IForm {
  id: number | string;
  password: string;
}

function Home() {
  function storeLoginState() {
    localStorage.setItem("isLoggedIn", "true");
  }
  const navigate = useNavigate();
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
      storeLoginState();
      navigate("/search");
      toast.success("Welcome " + employee.name, {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.warning("User not found!", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.log("not found");
    }
  };

  return (
    <Background>
      <div>
        <div className="Signin">Sign in</div>
        <InptSI
          ph="User id"
          style2="inpt-lrg"
          value={form.id}
          type={""}
          onChange={(e) => setForm({ ...form, id: e.target.value })}
        />
        <InptSI
          ph="Password"
          style2="inpt-lrg"
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <Btn text={"Sign in"} style={"btn-lrg"} click={handleLogin} />
      </div>
    </Background>
  );
}

export default Home;
