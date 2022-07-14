import React from "react";

function Pagination(props) {
  return (
    <div className="pagination">
      <span
        className="btn-nav"
        onClick={() =>
          props.changePage(() => {
            if (props.page === 1) {
              return props.totalPages;
            } else return props.page - 1;
          })
        }
      >
        ❮
      </span>
      {props.pagesArray.map((p) => (
        <span
          key={p}
          className={props.page === p ? "list-page page-current" : "list-page"}
          onClick={() => props.changePage(p)}
        >
          {p}
        </span>
      ))}
      <span
        className="btn-nav"
        onClick={() =>
          props.changePage(() => {
            if (props.page === props.totalPages) {
              return 1;
            } else return props.page + 1;
          })
        }
      >
        ❯
      </span>
    </div>
  );
}

export default Pagination;
