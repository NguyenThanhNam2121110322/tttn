import React from 'react'
import Button from "@mui/material/Button";
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
  getAllCustomers,
  deleteCustomersById,
} from "../../../api/CustomerService";

import { Link } from 'react-router-dom';
import TablePagination from "@mui/material/TablePagination"; // Import TablePagination
const CustomersList = () => {
  const [customers, setCustomers] = useState([]);
  const [page, setPage] = useState(0); // Thêm state cho trang hiện tại
  const [rowsPerPage, setRowsPerPage] = useState(5); // Thêm state cho số hàng trên mỗi trang
  const [checkDeleteCustomer, setCheckDeleteCustomer] = useState(false);
  const navigate = useNavigate();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const deleteCustomerByIdHandler = (id) => {
    deleteCustomersById("customers", id).then((item) => {
      console.log(item);
      if (item.status === 204) {
        setCheckDeleteCustomer(true);
        setCustomers(customers.filter((key) => key.id !== id));
      }
    });
  };

  useEffect(() => {
    getAllCustomers("customers").then((item) => setCustomers(item.data));
   
  }, [navigate]);

  return (
    <div>
      <CRow>

        <CCol xs={12}>
          <CCard className="mb-4">
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
            <CCardBody>

              <CTable color="dark" striped>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">First_name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Last_name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Password</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Phone_number</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Modify</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Delete</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {(rowsPerPage > 0
                    ? customers.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                    : customers
                  ).map((row) => (
                    <>
                      <CTableRow key={row.id}>
                        <CTableDataCell>
                          {row.firstName}
                        </CTableDataCell>
                        <CTableDataCell >
                          {row.lastName}
                        </CTableDataCell>
                        <CTableDataCell >
                          {row.email}
                        </CTableDataCell>
                        <CTableDataCell >
                          {row.passwordHash}
                        </CTableDataCell>
                        <CTableDataCell >
                          {row.phone}
                        </CTableDataCell>

                        <CTableDataCell>
                          {/* <Link to={`/edit-product/${row.id}`}>Edit</Link> */}
                          <Link to={`/base/customer/edit/${row.id}`}>
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
                            onClick={() => deleteCustomerByIdHandler(row.id)}
                          >
                            Remove
                          </Button>
                        </CTableDataCell>

                      </CTableRow>

                    </>

                  ))}

                </CTableBody>

                <TablePagination
                  // rowsPerPageOptions={[5, 10, 25]}
                  component="div"
                  count={customers.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </CTable>


            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  )
}

export default CustomersList
