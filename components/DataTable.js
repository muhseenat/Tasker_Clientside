
  
import React, { useEffect, useState, useMemo } from "react";
import { TableHeader, Pagination, Search } from "./DataTable";
import useFullPageLoader from '../hook/useFullPageLoader'
// import ExternalInfo from "components/ExternalInfo";
// import AppConfig from "App.config";
import axios from '../axios';


const DataTable = () => {
  const [comments, setComments] = useState([]);//data from applied user
  const [loader, showLoader, hideLoader] = useFullPageLoader();
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [sorting, setSorting] = useState({ field: "", order: "" });

  const ITEMS_PER_PAGE = 3;

  const headers = [
      { name: "No#", field: "_id", sortable: false },
      { name: "Name", field: "name", sortable: true },
      { name: "Email", field: "email", sortable: true },
      { name: "Resume", field: "qualification", sortable: false }
  ];

  useEffect(() => {
    //axios
      const getData = () => {
          showLoader();

          axios.get('/get/applied/jobs').then((resp)=>{
            hideLoader();
            console.log(resp?.data);
            setComments(resp?.data);

          }).catch(err=>console.log(err))
        
      };

      getData();
  }, []);
  console.log(comments,'this is comments');
//search function
  const commentsData = useMemo(() => {
      let computedComments = comments;

      if (search) {
          computedComments = computedComments.filter(
              comment =>
                  comment.name.toLowerCase().includes(search.toLowerCase()) ||
                  comment.email.toLowerCase().includes(search.toLowerCase())
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
          {/* Navbarrrrr <Header title="Building a data table in react" /> */}
          

          {/* <ExternalInfo page="datatable" /> */}

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
                          {commentsData.map(comment => (
                              <tr>
                                  <th scope="row" key={comment._id}>
                                      {comment._id}
                                  </th>
                                  <td>{comment.name}</td>
                                  <td>{comment.email}</td>
                                  <td>{comment.qualification}</td>
                              </tr>
                          ))}
                      </tbody>
                  </table>
              </div>
          </div>
          {loader}
      </>
  );
};

export default DataTable;