import React, { useEffect, useState } from "react";

function Bloking() {
  const [status, setStatus] = useState("주말");
  const [count, setCount] = useState(0);

  useEffect(() => {
    // 최초실행..
    console.log("component Mount...", status);
    return () => {
      console.log("component UnMount...", status);
      // 변경 값을 받아서 변경이 필요하다면 여기서 작업...
      if (status === "주말") {
        console.log("call something....");
        setTimeout(() => {
          setStatus("출근");
          setCount(count + 1);
          alert("사장 출근...");
        }, 0);
      }
    };
  });

  // useState 는 비동기로 작업하기 때문에 변경 후에 작업 처리 불가..
  // 왜? 여러번 불필요한 렌더링 방지
  const Bloking = () => {
    if (status === "출근") {
      console.log("사장 출근..");
      setCount(count + 1);
      console.log(status);
      working();
      // 비동기로 동작..
      setStatus("퇴근");
      console.log("사장 퇴근..");
      console.log(status); // 출근

      if (count === 5) {
        setStatus("주말");
        setCount(0);
      }
    } else {
      alert("직원이 출근 전 입니다.");
    }
  };

  const unBloking = () => {
    if (status === "출근") {
      setCount(count + 1);
      const generator = working2();
      let result = {};
      while (!result.done) {
        result = generator.next();
        checkBoss();
      }
      setStatus("퇴근");

      if (count === 5) {
        setStatus("주말");
        setCount(0);
      }
    } else {
      alert("직원이 출근 전 입니다.");
    }
  };

  const check = () => {
    if (status === "퇴근") {
      setStatus("출근");
    }
  };

  const checkBoss = () => {
    console.log("사장 : 직원 일하고 있는지 검사...");
  };

  const working = () => {
    for (let i = 1; i < 9; i++) {
      console.log("직원 : 일" + i + "시간째 하는중......");
    }
  };

  // generator * 수식어 .. strict mode 에서 yield 가 예약어이기 때문...
  function* working2() {
    for (let i = 1; i < 9; i++) {
      console.log("직원 : 일" + i + "시간째 하는중......");
      yield;
    }
    return;
  }

  return (
    <div style={{ padding: 70 }}>
      <h1>Bloking-UnBloking Test</h1>
      <button style={{ marginRight: 10 }} onClick={() => check()}>
        출근도장
      </button>
      <button style={{ marginRight: 10 }} onClick={() => Bloking()}>
        블로킹
      </button>
      <button style={{ marginRight: 10 }} onClick={() => unBloking()}>
        언블로킹
      </button>
      <p> {status} </p>
      <p> {count} </p>
    </div>
  );
}

export default Bloking;
