
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";

import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilBell,
  cilCreditCard,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilFile,
  cilLockLocked,
  cilSettings,
  cilTask,
  cilUser,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { Link } from 'react-router-dom'
import avatar8 from './../../assets/images/avatars/8.jpg'
import avatar9 from './../../assets/images/avatars/chualogin.jpg'
const AppHeaderDropdown = () => {

  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogout = () => {

    localStorage.removeItem("accessToken");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    window.location.reload();

  };
  useEffect(() => {
    // Check if the user is logged in

    const isUserLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(isUserLoggedIn);
    const username = localStorage.getItem('username');
    setUsername(username)


  }, [location.pathname]);

  return (
    <>
    <CDropdown variant="nav-item">
         {isLoggedIn && (
      <><CDropdownToggle placement="bottom-end" className="py-0 pe-0" caret={false}>
            <CAvatar src={avatar8} size="md" />
          </CDropdownToggle><CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownHeader className="bg-body-secondary fw-semibold mb-2">Account</CDropdownHeader>
              <CDropdownItem href="#">
                <CIcon icon={cilBell} className="me-2" />
                Updates
                <CBadge color="info" className="ms-2">
                  42
                </CBadge>
              </CDropdownItem>
              <CDropdownItem href="#">
                <CIcon icon={cilEnvelopeOpen} className="me-2" />
                Messages
                <CBadge color="success" className="ms-2">
                  42
                </CBadge>
              </CDropdownItem>
              <CDropdownItem href="#">
                <CIcon icon={cilTask} className="me-2" />
                Tasks
                <CBadge color="danger" className="ms-2">
                  42
                </CBadge>
              </CDropdownItem>
              <CDropdownItem href="#">
                <CIcon icon={cilCommentSquare} className="me-2" />
                Comments
                <CBadge color="warning" className="ms-2">
                  42
                </CBadge>
              </CDropdownItem>
              <CDropdownHeader className="bg-body-secondary fw-semibold my-2">Settings</CDropdownHeader>
              <CDropdownItem href="#">
                <CIcon icon={cilUser} className="me-2" />
                Profile
              </CDropdownItem>
              <CDropdownItem href="#">
                <CIcon icon={cilSettings} className="me-2" />
                Settings
              </CDropdownItem>
              <CDropdownItem href="#">
                <CIcon icon={cilCreditCard} className="me-2" />
                Payments
                <CBadge color="secondary" className="ms-2">
                  42
                </CBadge>
              </CDropdownItem>
              <CDropdownItem href="#">
                <CIcon icon={cilFile} className="me-2" />
                Projects
                <CBadge color="primary" className="ms-2">
                  42
                </CBadge>
              </CDropdownItem>
              <CDropdownDivider />
              <CDropdownItem href="#">
                <CIcon icon={cilLockLocked} className="me-2" />
                Lock Account
              </CDropdownItem>
              <a href="" onClick={handleLogout} className="nav-item nav-link">
                        Logout
                      </a>
            </CDropdownMenu></>

        )}
         {!isLoggedIn && (
      <Link to="login">
      <CAvatar src={avatar9} size="md" />
      </Link>
           )}
      
    </CDropdown>
    </>
    
    
    


    
  )
}

export default AppHeaderDropdown
