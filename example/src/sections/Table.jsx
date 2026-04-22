import React from "react";
import { Col } from "reactstrap";

import {
  ContentSection,
  IconAlert,
  BooleanIcon,
  DefaultColumnFilter,
  SelectOptionsFilter,
  DataTable,
  TableHintIcon,
  createUseRowDisabledHook,
} from "@certego/certego-ui";

import ComponentAsExample from "./ComponentAsExample";
import {
  tableFixtureRows,
  disabledRowFixtureRows,
} from "./tableFixtures";

const ownerOptions = ["Atlas", "Beacon", "Cypher"];

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
    Header: "Owner",
    accessor: "owner",
    Filter: SelectOptionsFilter,
    selectOptions: ownerOptions,
  },
  {
    Header: "Completed",
    accessor: "completed",
    Filter: SelectOptionsFilter,
    selectOptions: ["true", "false"],
    disableSortBy: true,
    Cell: ({ value, }) => <BooleanIcon truthy={value} />,
    maxWidth: 40,
  },
];

const initialState = {
  pageSize: 5,
};

function TableDetails({ row, }) {
  return (
    <div className="p-3 text-start" data-testid={`expanded-row-${row.original.id}`}>
      <strong>{`Details for ${row.original.title}`}</strong>
      <div className="mt-2 text-muted">{`Owned by ${row.original.owner}`}</div>
      <div className="small mt-1">{`Completed: ${row.original.completed}`}</div>
    </div>
  );
}

function InteractiveFixtureTable() {
  const [selectedRows, setSelectedRows] = React.useState([]);

  return (
    <div data-testid="table-visual-interactive">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <span className="text-muted small">
          Deterministic local fixtures for visual regression coverage.
        </span>
        <small data-testid="table-visual-selected-count">
          {`${selectedRows.length} selected`}
        </small>
      </div>
      <DataTable
        data={tableFixtureRows}
        columns={columns}
        config={{
          enableFilters: true,
          enableSortBy: true,
          enableFlexLayout: true,
          enableSelection: true,
          enableExpanded: true,
        }}
        initialState={initialState}
        onSelectedRowChange={setSelectedRows}
        isRowSelectable={(row) => !row.original.completed}
        SubComponent={TableDetails}
      />
    </div>
  );
}

function DisabledRowFixtureTable() {
  const [rows, setRows] = React.useState(disabledRowFixtureRows);

  const disabledHook = React.useMemo(
    () =>
      createUseRowDisabledHook({
        objectName: "rule",
        onChange: async (id, enabled) => {
          setRows((currentRows) =>
            currentRows.map((row) => (
              row.id === id ? { ...row, enabled, } : row
            ))
          );
        },
      }),
    []
  );

  return (
    <div data-testid="table-visual-disabled">
      <DataTable
        data={rows}
        columns={columns}
        config={{
          enableFilters: true,
          enableSortBy: true,
          enableFlexLayout: true,
          customHooks: [disabledHook],
        }}
        initialState={initialState}
        customProps={{ refetchTableData: () => undefined, }}
      />
    </div>
  );
}

function EmptyFixtureTable() {
  return (
    <div data-testid="table-visual-empty">
      <DataTable
        data={[]}
        columns={columns}
        config={{
          enableFilters: true,
          enableSortBy: true,
          enableFlexLayout: true,
        }}
        initialState={initialState}
        tableEmptyNode="No fixture rows available"
      />
    </div>
  );
}

export default function Table(props) {
  return (
    <ContentSection {...props}>
      <ComponentAsExample
        name="DataTable Visual States"
        bodyNode={
          <Col>
            <IconAlert color="info">
              This table page uses local fixtures only, so sorting, filtering,
              selection, expansion, and pagination stay stable for visual tests.
            </IconAlert>
            <InteractiveFixtureTable />
          </Col>
        }
      />
      <ComponentAsExample
        name="Disabled Row State"
        bodyNode={
          <Col>
            <IconAlert color="info">
              This fixture exercises the disabled-row hook and row action
              styling without any network calls.
            </IconAlert>
            <DisabledRowFixtureTable />
          </Col>
        }
      />
      <ComponentAsExample
        name="Empty State"
        bodyNode={
          <Col>
            <IconAlert color="info">
              This fixture keeps the empty-state rendering locked down for
              screenshot regression checks.
            </IconAlert>
            <EmptyFixtureTable />
          </Col>
        }
      />
      <ComponentAsExample
        name="TableHintIcon"
        bodyNode={
          <div className="d-flex-center">
            <TableHintIcon />
          </div>
        }
      />
    </ContentSection>
  );
}
