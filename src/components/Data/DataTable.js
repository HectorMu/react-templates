import { useState } from "react";
/**
 * @param {String} title The table title
 * @param {Array}   data JSON array with all the table data
 * @param {Array}  buttons JSON array with all the buttons actions, text and styles
 * @param {Boolean} actions Boolean, determines if table actions are shown or not
 * @param {Object} filtersConfig Object that determines the filters to show
 * @param {String} actionsSearch Text to display in actions final table column head
 * @param {String} searchText Text to display on search input placeholder
 */
const DataTable = ({
  title,
  data = [],
  buttons = [
    {
      key: "default1",
      text: "Default button",
      style: "btn btn-secondary mx-1 btn-sm",
      fwicon: "fas fa-question",
      click: (o) => {
        window.alert(`Default action ${o}`);
      },
    },
  ],
  actions = false,
  filtersConfig,
  actionsText = "Actions",
  searchText = "Searching by",
}) => {
  const [initialData, setInitialData] = useState(data);
  let initialFilter = Object.keys(data[0])[0];
  const [selectedFilter, setSelectedFilter] = useState(initialFilter);

  const searchOnData = (value) => {
    if (value === "") {
      return setInitialData(data);
    }
    if (selectedFilter === initialFilter) {
      const results = data.filter((d) => d[initialFilter].toString() === value);
      if (results.length > 0) {
        setInitialData(results);
      }
      return;
    }
    const results = data.filter((d) =>
      d[selectedFilter.toLowerCase()]
        .toLowerCase()
        .includes(value.toLowerCase())
    );
    if (results.length > 0) {
      setInitialData(results);
    }
  };
  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3 d-flex justify-content-between d-sm-flex flex-column flex-lg-row flex-md-row flex-xl-row">
        <h6 className="m-0 font-weight-bold text-primary text-center">
          {title}
        </h6>
        <div className="d-flex mt-3 mt-lg-0 mt-md-0 mt-xl-0">
          <div className="btn-group dropleft">
            <button
              type="button"
              className="btn btn-sm mr-2"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-sliders-h text-primary"></i>
            </button>
            <div className="dropdown-menu shadow px-2">
              {filtersConfig && Object.keys(filtersConfig).length > 0
                ? Object.values(filtersConfig).map((filter) => (
                    <button
                      key={filter}
                      type="button"
                      onClick={() => setSelectedFilter(filter)}
                      className={`dropdown-item rounded ${
                        selectedFilter === filter
                          ? `text-primary fw-bold`
                          : `${selectedFilter === "None" ? "" : ""}`
                      } `}
                    >
                      {filter}
                    </button>
                  ))
                : Object.keys(data[0]).map((key) => (
                    <button
                      key={key}
                      onClick={() => setSelectedFilter(key)}
                      type="button"
                      className={`dropdown-item rounded ${
                        selectedFilter === key
                          ? `text-primary fw-bold`
                          : `${selectedFilter === "None" ? "" : ""}`
                      } `}
                    >
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </button>
                  ))}
            </div>
          </div>
          <div className="input-group">
            <input
              type="text"
              className="form-control border-0 small"
              placeholder={`${searchText} ${selectedFilter}`}
              onChange={(e) => searchOnData(e.target.value)}
            />
            <div className="input-group-append">
              <button className="btn btn-primary btn-sm" type="button">
                <i className="fas fa-search fa-sm"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table
            className="table table-bordered"
            id="dataTable"
            width="100%"
            cellSpacing={0}
          >
            <thead>
              {data.length > 0 ? (
                <tr>
                  {Object.keys(data[0]).map((e) => (
                    <th key={e}>{e.charAt(0).toUpperCase() + e.slice(1)}</th>
                  ))}
                  {actions === true ? <th>{actionsText}</th> : null}
                </tr>
              ) : (
                <tr>
                  <th>No data</th>
                </tr>
              )}
            </thead>
            <tbody>
              {data.length > 0 ? (
                initialData.map((d) => (
                  <tr key={d.name}>
                    {Object.values(d).map((e) => (
                      <td key={e}>{e}</td>
                    ))}
                    {actions === true ? (
                      <td className="d-flex d-sm-flex flex-sm-column flex-column flex-lg-row flex-md-row flex-xl-row">
                        {buttons.map((b) => (
                          <button
                            key={b.key}
                            className={b.style}
                            onClick={() => b.click(d)}
                          >
                            <i className={b.fwicon}></i> {b.text}
                          </button>
                        ))}
                      </td>
                    ) : null}
                  </tr>
                ))
              ) : (
                <tr>
                  <td>No data</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
