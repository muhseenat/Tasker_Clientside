
import dynamic from 'next/dynamic'
import React, { useEffect, useState, useMemo } from "react";
import { useSelector } from 'react-redux';
import axios from '../axios';
const TableHeader = dynamic(() => import('./DataTable/Header'))
const Pagination = dynamic(() => import('./DataTable/Pagination'))
const Search = dynamic(() => import('./DataTable/Search'))

const DataTable = () => {
    const [comments, setComments] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const [sorting, setSorting] = useState({ field: "", order: "" });
    const user = useSelector(state => state.user.userData)
    const id = user?._id
    const ITEMS_PER_PAGE = 3;

    const headers = [
        { name: "Name", field: "name", sortable: true },
        { name: "Payment", field: "pay", sortable: true },
        { name: "Place", field: "place", sortable: true },
        { name: "Status", field: "status", sortable: false }
    ];

    useEffect(() => {

        const getData = () => {

            axios.get(`/user/applied/job/${id}`).then((resp) => {
                console.log(resp,'this is respooooo');
              
                setComments(resp?.data);

            }).catch(err => console.log(err))

        };

        getData();
    }, []);


    //search function
    const commentsData = useMemo(() => {
        let computedComments = comments;

        if (search) {
            computedComments = computedComments.filter(
                comment =>
                    comment.job_name.toLowerCase().includes(search.toLowerCase()) ||
                    comment.city.toLowerCase().includes(search.toLowerCase())
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
 console.log(comments,'commrntsssss');
    return (
        <div className='container mt-5'>
            <h3 className='text-center'>Applied Jobs</h3>

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
                            {commentsData.map((comment,index) => (
                                <tr key={index}>
                                    <th scope="row">
                                        {comment?.job[0]?.job_designation}
                                    </th>
                                    <td>{comment?.job[0]?.pay}</td>
                                    <td>{comment?.job[0]?.city}</td>
                                    <td>{comment.status}</td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DataTable;