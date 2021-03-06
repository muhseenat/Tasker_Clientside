import AppBar from '../../../components/Nav'
import { useRouter } from 'next/router'
import axios from '../../../axios'
import dynamic from 'next/dynamic'
import { useSelector } from 'react-redux';
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import React, { useEffect, useState, useMemo } from "react";
const TableHeader = dynamic(() => import('../../../components/DataTable/Header'))
const Pagination = dynamic(() => import('../../../components/DataTable/Pagination'))
const Search = dynamic(() => import('../../../components/DataTable/Search'))


const PostedJobUsers = () => {
    const [comments, setComments] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [show, setShow] = useState(false)

    const [search, setSearch] = useState("");
    const [sorting, setSorting] = useState({ field: "", order: "" });
    const user = useSelector(state => state.user.userData)
    const ITEMS_PER_PAGE = 3;
    const router = useRouter()
    const { id } = router.query;

    const headers = [
        { name: "Name", field: "name", sortable: true },
        { name: "Email", field: "pay", sortable: true },
        { name: "Place", field: "place", sortable: true },
        { name: "Details", field: "details", sortable: false },
        { name: "Status", field: "status", sortable: false }
    ];
    const statusOption = ['Pending', 'Approved', 'Done']
    useEffect(() => {

        const getData = () => {

            axios.get(`job/applied/user/${id}`).then((resp) => {
                console.log(resp?.data);
                setComments(resp?.data);
                if (resp?.data?.length == 0) {
                    setShow(true)
                }
            }).catch(err => console.log(err))

        };

        getData();
    }, []);

    //CHANGE STATUS
    const changeStatus = (e, id, userId, jobId) => {
        const data = { sts: e.target.value, id, userId, jobId }
        axios.put('/change/status', data).then((resp) => {
        }).catch(err => console.log(err))

    }




    //search function
    const commentsData = useMemo(() => {
        let computedComments = comments;

        if (search) {
            computedComments = computedComments.filter(
                comment =>
                    comment.applied_jobs[0].job_name.toLowerCase().includes(search.toLowerCase()) ||
                    comment.applied_jobs[0].city.toLowerCase().includes(search.toLowerCase())
            );
        }

        setTotalItems(computedComments.length);

        //Sorting comments
        if (sorting.field) {
            const reversed = sorting.order === "asc" ? 1 : -1;
            computedComments = computedComments.sort(
                (a, b) =>
                    reversed * a[sorting.field].localeCompare(b[sorting.field])
            );
        }

        //Current Page slice
        return computedComments.slice(
            (currentPage - 1) * ITEMS_PER_PAGE,
            (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
        );
    }, [comments, currentPage, search, sorting]);


    return (
        <>
            <AppBar />
            {/* {(show && <h3 className='mt-5 text-center'>NO JOBS  APPLIED YET...</h3>)}    */}

            <div className='container mt-5'>
                <h3 className='text-center'>Applied Users</h3>

                <div className="row w-100">
                    <div className="col mb-3 col-12 text-center">
                        <div className="row">
                            <div className="col-md-6">
                                <Pagination
                                    total={totalItems}
                                    itemsPerPage={ITEMS_PER_PAGE}
                                    currentPage={currentPage}
                                    onPageChange={page => setCurrentPage(page)}
                                />
                            </div>
                            <div className="col-md-6 d-flex flex-row-reverse">
                                <Search
                                    onSearch={value => {
                                        setSearch(value);
                                        setCurrentPage(1);
                                    }}
                                />
                            </div>
                        </div>

                        <table className="table table-striped">
                            <TableHeader
                                headers={headers}
                                onSorting={(field, order) =>
                                    setSorting({ field, order })
                                }
                            />

                            <tbody>

                                {commentsData.map((comment, index) => (
                                    <tr key={index}>
                                        <th scope="row">
                                            {comment?.name}
                                        </th>
                                        <td>{comment?.email}</td>
                                        <td>{comment?.place}</td>
                                        <td>{comment?.qualification},{comment?.skill},{comment?.experience}</td>
                                        <td>

                                            {comment?.status === ("Done") ? (
                                                comment?.status
                                            ) : (
                                                <Select
                                                    labelId="demo-multiple-name-label"
                                                    id="demo-multiple-name"
                                                    defaultValue={comment?.status}
                                                    onChange={(e) => {
                                                        changeStatus(e, comment?._id, comment?.user_id, comment?.job_id);
                                                    }}

                                                >
                                                    {statusOption.map((i, index) => (
                                                        <MenuItem key={index} value={i}>
                                                            {i}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            )}
                                        </td>

                                    </tr>
                                ))}


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostedJobUsers 
