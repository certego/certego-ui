import React from "react";

import {
  ContentSection,
  InfiniteScrollList,
  KvList,
  useAxiosComponentLoader,
} from "@certego/certego-ui";

import ComponentAsExample from "./ComponentAsExample";

export default function Lists(props) {
  const [placeholderTodos, Loader] = useAxiosComponentLoader({
    url: "https://jsonplaceholder.typicode.com/todos",
  });

  // memo
  const kvObject = React.useMemo(
    () => (placeholderTodos.length ? placeholderTodos[0] : {}),
    [placeholderTodos]
  );

  return (
    <ContentSection {...props}>
      <Loader
        render={() => (
          <>
            <ComponentAsExample
              name="KvList"
              bodyNode={<KvList object={kvObject} />}
            />
            <ComponentAsExample
              name="InfiniteScrollList"
              bodyNode={
                <InfiniteScrollList
                  data={placeholderTodos}
                  genListKeyProp={(todo) => todo.id}
                  renderListItem={(todo) => (
                    <KvList
                      key={`kvlist-${todo.id}`}
                      object={{ [todo.id]: todo }}
                    />
                  )}
                />
              }
            />
          </>
        )}
      />
    </ContentSection>
  );
}
