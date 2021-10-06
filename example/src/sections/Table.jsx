import React from "react";
import { Col, Row } from "reactstrap";

import {
  ContentSection,
  IconAlert,
  useAxiosComponentLoader,
  BooleanIcon,
  DefaultColumnFilter,
  SelectOptionsFilter,
  DataTable,
  useDataTable,
  TableHintIcon,
} from "@certego/certego-ui";

import ComponentAsExample from "./ComponentAsExample";

// constants
const apiUrl = "https://jsonplaceholder.typicode.com/todos";
const columns = [
  {
    Header: "#",
    accessor: "id",
    Filter: () => null,
    maxWidth: 20,
  },
  {
    Header: "Title",
    accessor: "title",
    Filter: DefaultColumnFilter,
  },
  {
    Header: "Completed",
    accessor: "completed",
    Filter: SelectOptionsFilter,
    selectOptions: ["true", "false"],
    disableSortBy: true,
    Cell: ({ value }) => <BooleanIcon truthy={value} />,
    maxWidth: 40,
  },
];
const initialState = {
  pageSize: 5,
  sortBy: [{ id: "id", desc: false }],
};

export default function Table(props) {
  // DataTable
  const [placeholderTodos, Loader] = useAxiosComponentLoader({
    url: apiUrl,
  });

  const [selectedRows, setSelectedRows] = React.useState([]);

  // useDataTable
  const [, tableNode] = useDataTable(
    {
      url: apiUrl,
    },
    {
      columns,
      initialState,
      config: {
        enableFlexLayout: true,
        enableExpanded: true,
      },
      SubComponent: ({ row }) => (
        <pre className="text-gradient">
          {JSON.stringify(row.original, null, 4)}
        </pre>
      ),
    },
    (d) => d.slice(0, 5)
  );

  return (
    <ContentSection {...props}>
      <ComponentAsExample
        name="DataTable"
        bodyNode={
          <Col>
            <IconAlert color="info">
              Suitable when data is already available client side. Thus,
              pagination/filtering/sorting can be performed client side too.
            </IconAlert>
            <div className="d-flex align-items-center justify-content-end">
              <small>{selectedRows.length} selected</small>
            </div>
            <Loader
              render={() => (
                <DataTable
                  data={placeholderTodos}
                  columns={columns}
                  config={{
                    enableFilters: true,
                    enableSortBy: true,
                    enableFlexLayout: true,
                    enableSelection: true,
                  }}
                  initialState={initialState}
                  onSelectedRowChange={setSelectedRows}
                  isRowSelectable={(row) => !row.original.completed}
                />
              )}
            />
          </Col>
        }
      />
      <ComponentAsExample
        name="useDataTable"
        bodyNode={
          <Col>
            <IconAlert color="info">
              Suitable for fetching data from a server. Thus,
              pagination/filtering/sorting in most cases should be handled by
              the server too.
            </IconAlert>
            {tableNode}
          </Col>
        }
      />
      <ComponentAsExample
        name="TableHintIcon"
        bodyNode={
          <Row className="d-flex-center">
            <TableHintIcon />
          </Row>
        }
      />
      <ComponentAsExample
        name="Paginator"
        bodyNode={
          <div>
            As shown in <mark>DataTable</mark>.
          </div>
        }
      />
    </ContentSection>
  );
}
