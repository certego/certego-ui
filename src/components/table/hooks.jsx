import React from "react";
import { CustomInput, UncontrolledTooltip } from "reactstrap";

export const createUseRowDisabledHook = (hocProps) => (hooks) => {
  // HoC Props
  const { objectName, onChange, } = hocProps;

  hooks.getRowProps.push((props, { row, }) => [
    props,
    {
      title: !row.original?.enabled
        ? `This ${objectName} was marked as disabled by it's owner.`
        : "",
      className: !row.original?.enabled ? "row-disabled" : "",
    },
  ]);

  hooks.visibleColumns.push((columns, { instance, }) => [
    {
      id: "rules-table-actions",
      width: 80,
      // eslint-disable-next-line react/prop-types
      Cell: ({ row: { original: obj, }, }) =>
        obj?.permissions?.edit ? (
          <div id={`toggle-enable-switch__${obj?.id}`}>
            <CustomInput
              id={`toggle-enable-switch-inner__${obj?.id}`}
              type="switch"
              name="ruleEnabled"
              className={obj?.enabled ? "row-disabled" : ""}
              defaultChecked={obj?.enabled}
              onChange={async () => {
                await onChange(obj?.id, !obj?.enabled);
                instance?.customProps?.refetchTableData();
              }}
            />
            <UncontrolledTooltip target={`toggle-enable-switch__${obj?.id}`}>
              {obj?.enabled ? "Disable" : "Enable"} {objectName}
            </UncontrolledTooltip>
          </div>
        ) : null,
    },
    ...columns,
  ]);
};

// export function createUseRowDisabledHook(props) {
//   const hook = useRowDisabledAbstract(props);
//   hook.pluginName = "useRowDisabled";
//   return hook;
// }
