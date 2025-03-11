import React, { useState, useEffect, useRef } from "react";

function BancAccount() {
  const [balance, setBalance] = useState(0); // Solde initial de 0€
  const previousBalance = useRef(0); // Stocke le dernier solde sans provoquer de re-render
  const [amount, setAmount] = useState("");

  function deposit() {
    const depositValue = parseFloat(amount);
    if(!isNaN(depositValue)&& depositValue > 0){
        setBalance((prev) => prev + depositValue); // Déposer
        previousBalance.current = balance + depositValue; // Обновляем предыдущее значение баланса
    }
}
  function retirer() {
    const retirerValue = parseFloat(amount);
    if(!isNaN(retirerValue)&& retirerValue >0 && balance >= retirerValue){
    setBalance((prev) => prev - retirerValue); 
    previousBalance.current = balance - retirerValue;
  }
}

  useEffect(() => {
    console.log(`Ancien solde : ${previousBalance.current}€ → Nouveau solde : ${balance}€`);
    previousBalance.current = balance; // Met à jour la valeur du ref après chaque changement
  }, [balance]); // S'exécute quand balance change

  return (
    <div style={{ textAlign: "center", padding: "20px", fontSize: "20px", columnCount: 2}}>
      {<h2>Solde : {balance}€</h2>}
      
      <input type="number"
            value={amount}
            onChange={(e)=>setAmount(e.target.value)} 
            placeholder="Entrez un montant" // Подсказка в поле ввода
            style={{ marginBottom: "10px", padding: "5px" }}
      />
      <button onClick={deposit} style={{ marginTop: "20px" }}>
        Déposer
      </button>
      
      <button onClick={retirer} style={{ marginTop: "20px" }} >
        Retirer
      </button>
    </div>
  );
}

export default BancAccount;



