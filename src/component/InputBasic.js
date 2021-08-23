import React, { useState } from 'react';
import styled from 'styled-components';

const InputBasic = () => {
  // 회사명
  const [companyName, setCompanyName] = useState("");
  // 담당자명
  const [userName, setUserName] = useState(""); 
  // 연락처
  const [tel, setTel] = useState(""); 
  // 이메일
  const [email, setEmail] = useState(""); 
  const [emailAddress, setEmailAddress] = useState(""); 
  // 희망연락방식
  const [call, setCall] = useState(""); 

  // 회사명 변경
  const changeCompany = e => {
    setCompanyName(e.target.value);
  }
  // 담당자명 변경
  const changeUserName = e => {
    setUserName(e.target.value);
  }
  // 연락처 변경
  const changeTel = e => {
    setTel(e.target.value);
  }
  // 이메일 변경
  const changeEmail = e => {
    setEmail(e.target.value);
  }
  const changeEmailAddress = e => {
    setEmailAddress(e.target.value);
  }
  // 정보 출력
  const handleBtnClick = () => {
    let mail = `${email}@${emailAddress}`;
    console.log({
      companyName, 
      userName, 
      tel, 
      mail, 
      call
    })
  }

  return(
    <div>
      <h1>기본정보</h1>
      <div>
        <span>회사명*</span>
        <input type="text" onChange={changeCompany} placeholder="회사 이름을 입력하세요." />
      </div>
      <div>
        <span>담당자명*</span>
        <input type="text" onChange={changeUserName} placeholder="담당자의 이름을 입력하세요." />
      </div>
      <div>
        <span>연락처*</span>
        <input type="text" onChange={changeTel} placeholder="-를 제외한 연락처를 입력하세요." />
      </div>
      <div>
        <span>이메일*</span>
        <input type="text" onChange={changeEmail} placeholder="이메일 ID" />
        <span>@</span>
        <input type="text" onChange={changeEmailAddress} placeholder="직접 입력" />
      </div>
      <div>
        <span>희망 연락 방식</span>
        <SpanStyle onClick={() => setCall('메신저')}>SellWE 메신저</SpanStyle>
        <SpanStyle onClick={() => setCall('전화')}>전화</SpanStyle>
        <SpanStyle onClick={() => setCall('이메일')}>이메일</SpanStyle>
      </div>
      <button onClick={handleBtnClick}>정보 출력</button>
    </div>
  )
}

export default InputBasic;

const SpanStyle = styled.span`
  border: 1px solid #222;
  margin-left: 5px;
  margin-right: 5px;
`