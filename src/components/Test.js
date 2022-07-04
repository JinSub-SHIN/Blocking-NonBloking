import React, { useEffect, useState } from "react";

function Bloking() {
  const [status, setStatus] = useState("출근");

  // componentDidupdate......
  useEffect(() => {
    // 최초실행..
    console.log("component Mount...", status);
    return () => {
      console.log("component UnMount...", status);
      // 변경 값을 받아서 변경이 필요하다면 여기서 작업...
      if(status === "출근") {
        console.log("call something....")
      }
    };
  });  

  const statusChange = () => {
    if (status === "출근") {
      console.log("사장 출근..");
      console.log(status);
      working();
      // 비동기로 동작..
      setStatus("퇴근");
      console.log("사장 퇴근..");
      console.log(status);
    } else {
      setStatus("출근");
    }
  };

  const unBloking = () => {
    if(status === "출근"){
      const generator = working2();
      let result = {};
      while(!result.done) {
        result = generator.next();
        checkBoss();
      }
      setStatus("퇴근");
    } else {
      setStatus("출근");
    }
  };

  const checkBoss = () => {
    console.log("일하고 있는지 검사...")
  };

  const working = () => {
    for (let i = 1; i < 9; i++) {
      console.log("일" + i + "시간째 하는중......");
    }
  };

  function* working2() {
    for (let i = 1; i < 9; i++) {
      console.log("일" + i + "시간째 하는중......");
      yield;
    }
    return;
  }

  return (
    <div style={{ padding: 70 }}>
      <h1>Bloking-UnBloking Test</h1>
      <button onClick={() => statusChange()}>Bloking Test</button>
      <button onClick={() => unBloking()}>unBloking Test</button>
      <p> {status} </p>
    </div>
  );
}

export default Bloking;
