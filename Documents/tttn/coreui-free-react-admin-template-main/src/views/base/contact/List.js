import React from 'react'
import Button from "@mui/material/Button";
import TablePagination from "@mui/material/TablePagination"; // Import TablePagination
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  getAllContacts,
  deleteContactsById,
  IMAGE_URL,
} from "../../../api/ContatcService";

import { Link } from 'react-router-dom'
const ContactHome = () => {
  const [contacts, setContacts] = useState([]);
  const [checkDeleteContact, setCheckDeleteContact] = useState(false);
  const [page, setPage] = useState(0); // Thêm state cho trang hiện tại
  const [rowsPerPage, setRowsPerPage] = useState(5); // Thêm state cho số hàng trên mỗi trang
  const navigate = useNavigate();
  useEffect(() => {
    getAllContacts("Contact").then((item) => setContacts(item.data));
  }, [navigate]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const deleteContactByIdHandler = (id) => {
    deleteContactsById("Contact", id).then((item) => {
      console.log(item);
      if (item.status === 204) {
        setCheckDeleteContact(true);
        setContacts(contacts.filter((key) => key.id !== id));
      }
    });
  };


  return (

    <CRow>
      <CCol xs={12}>
        <CCardHeader>
          <strong>
            <Link to="/base/customer/add">
              <Button
                size="small"
                variant="contained"
                color="success"
              >
                Add Customer
              </Button>

            </Link>
          </strong>
        </CCardHeader>
      </CCol>
      <CCol xs={12}>

        <CCard className="mb-4">

          <CCardHeader>
            <strong>React Table</strong> <small></small>



          </CCardHeader>
          <CCardBody>

            <DocsExample href="">
              <CTable color="dark" striped>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                    <CTableHeaderCell scope="col">subject</CTableHeaderCell>
                    <CTableHeaderCell scope="col">message</CTableHeaderCell>

                    <CTableHeaderCell scope="col">Modify</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Delete</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {(rowsPerPage > 0
                    ? contacts.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                    : contacts
                  ).map((row) => (
                    <>
                      <CTableRow key={row.id}>
                        <CTableHeaderCell>{row.name}</CTableHeaderCell>

                        <CTableHeaderCell>{row.email}</CTableHeaderCell>

                        <CTableHeaderCell>{row.subject}</CTableHeaderCell>

                        <CTableHeaderCell>{row.message}</CTableHeaderCell>



                        <CTableDataCell>
                          {/* <Link to={`/edit-product/${row.id}`}>Edit</Link> */}
                          <Link to={`/base/contact/edit/${row.id}`}>
                            <Button
                              size="small"
                              variant="contained"
                              color="primary"
                            >
                              Edit
                            </Button>

                          </Link>
                        </CTableDataCell>
                        <CTableDataCell>
                          <Button
                            size="small"
                            variant="contained"
                            color="error"
                            onClick={() => deleteContactByIdHandler(row.id)}
                          >
                            Remove
                          </Button>
                        </CTableDataCell>
                      </CTableRow>

                    </>

                  ))}
                </CTableBody>
              </CTable>
            </DocsExample>

            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={contacts.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              className="white-text"
            />

          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default ContactHome;
