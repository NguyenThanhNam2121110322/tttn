import React from 'react';
import axios from 'axios';
import { Navigate } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { useState, useEffect } from 'react'
const Register = () => {
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [passwordHash, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      passwordHash: passwordHash,
      phone: phone,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/api/staff-accounts",
        userData
      )
      console.log("Response:", response.data);
      alert("Thanh cong");
      setIsSuccess(true);

    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Email da duoc su dung");
     
    }
    
    
  };
  if (isSuccess) {
    return <Navigate to="/" />;
  }




  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Register</h1>
                  <p className="text-body-secondary">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput 
                    placeholder="First Name" 
                    autoComplete="username"  
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    />
                    <CFormInput 
                    placeholder="Last Name" 
                    autoComplete="username"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)} 
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput 
                    placeholder="Email" 
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput 
                    placeholder="Phone"
                    value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"
                      value={passwordHash}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </CInputGroup>
    
                  <div className="d-grid">
                    <CButton color="success"  onClick={handleSubmit}>Create Account</CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
