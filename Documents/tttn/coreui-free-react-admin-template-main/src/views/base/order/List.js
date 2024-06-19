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
  getAllOrders,
  deleteOrdersById,
} from "../../../api/OrderService";

import { Link } from 'react-router-dom';
import TablePagination from "@mui/material/TablePagination"; // Import TablePagination
const OrdersList = () => {
  const [orders, setOrders] = useState([]);
  const [page, setPage] = useState(0); // Thêm state cho trang hiện tại
  const [rowsPerPage, setRowsPerPage] = useState(5); // Thêm state cho số hàng trên mỗi trang
  const [checkDeleteOrder, setCheckDeleteOrder] = useState(false);
  const navigate = useNavigate();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const deleteOrderByIdHandler = (id) => {
    deleteOrdersById("order-items", id).then((item) => {
      console.log(item);
      if (item.status === 204) {
        setCheckDeleteOrder(true);
        setOrders(orders.filter((key) => key.id !== id));
      }
    });
  };

  useEffect(() => {
    getAllOrders("order-items").then((item) => {
      setOrders(item.data);
      console.log(item.data);
    });

  }, [navigate]);

  return (
    <div>
      <CRow>

        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>
                <Link to="/base/order/add">
                  <Button
                    size="small"
                    variant="contained"
                    color="success"
                  >
                    Add Order
                  </Button>

                </Link>
              </strong>
            </CCardHeader>
            <CCardBody>

              <CTable color="dark" striped>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">Product_Id</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Customer_Id</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Quantity</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Price</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Modify</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Delete</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {(rowsPerPage > 0
                    ? orders.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                    : orders
                  ).map((row) => (
                    <>
                      <CTableRow key={row.id}>
                        <CTableDataCell align="center">
                          {row.productId}
                        </CTableDataCell>
                        <CTableDataCell >
                          {row.customerId}
                        </CTableDataCell>
                        <CTableDataCell >
                          {row.quantity}
                        </CTableDataCell>
                        <CTableDataCell >
                          {row.price}
                        </CTableDataCell>

                        <CTableDataCell>
                          <Link to={`/base/order/edit/${row.id}`}>
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
                            onClick={() => deleteOrderByIdHandler(row.id)}
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
                  count={orders.length}
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

export default OrdersList
