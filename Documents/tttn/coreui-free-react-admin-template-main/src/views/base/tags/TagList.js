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
    getAllTags,
    deleteTagsById,
} from "../../../api/TagsService";

import { Link } from 'react-router-dom';
import TablePagination from "@mui/material/TablePagination"; // Import TablePagination
const TagsList = () => {
    const [tags, setTags] = useState([]);
    const [page, setPage] = useState(0); // Thêm state cho trang hiện tại
    const [rowsPerPage, setRowsPerPage] = useState(5); // Thêm state cho số hàng trên mỗi trang
    const [checkDeleteTag, setCheckDeleteTag] = useState(false);
    const navigate = useNavigate();

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const deleteTagByIdHandler = (id) => {
        deleteTagsById("tags", id).then((item) => {
          console.log(item);
          if (item.status === 204) {
            setCheckDeleteTag(true);
            setTags(tags.filter((key) => key.id !== id));
          }
        });
      };

    useEffect(() => {
        getAllTags("tags").then((item) => setTags(item.data));
    }, [navigate]);

    return (
        <div>
            <CRow>

                <CCol xs={12}>
                    <CCard className="mb-4">
                        <CCardHeader>
                            <strong>
                                <Link to="/base/tag/add">
                                    <Button
                                        size="small"
                                        variant="contained"
                                        color="success"
                                    >
                                        Add Tag
                                    </Button>

                                </Link>
                            </strong>
                        </CCardHeader>
                        <CCardBody>

                            <CTable color="dark" striped>
                                <CTableHead>
                                    <CTableRow>
                                        <CTableHeaderCell scope="col">Icon</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">Tag_name</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">Modify</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">Delete</CTableHeaderCell>
                                    </CTableRow>
                                </CTableHead>
                                <CTableBody>
                                    {(rowsPerPage > 0
                                        ? tags.slice(
                                            page * rowsPerPage,
                                            page * rowsPerPage + rowsPerPage
                                        )
                                        : tags
                                    ).map((row) => (
                                        <>
                                            <CTableRow key={row.id}>
                                                <CTableHeaderCell>{row.icon}</CTableHeaderCell>

                                                <CTableDataCell align="center">
                                                    {row.name}


                                                </CTableDataCell>

                                                <CTableDataCell>
                                                    {/* <Link to={`/edit-product/${row.id}`}>Edit</Link> */}
                                                    <Link to={`/base/tag/edit/${row.id}`}>
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
                                                        onClick={() => deleteTagByIdHandler(row.id)}
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
                                    count={tags.length}
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

export default TagsList
