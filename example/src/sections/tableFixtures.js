const baseRows = [
  {
    id: 1,
    title: "Alpha Watch",
    owner: "Atlas",
    completed: false,
    enabled: true,
    permissions: { edit: true, },
  },
  {
    id: 2,
    title: "Beacon Triage",
    owner: "Beacon",
    completed: true,
    enabled: true,
    permissions: { edit: true, },
  },
  {
    id: 3,
    title: "Cipher Sweep",
    owner: "Cypher",
    completed: false,
    enabled: true,
    permissions: { edit: true, },
  },
  {
    id: 4,
    title: "Delta Review",
    owner: "Atlas",
    completed: false,
    enabled: true,
    permissions: { edit: true, },
  },
  {
    id: 5,
    title: "Echo Archive",
    owner: "Beacon",
    completed: true,
    enabled: true,
    permissions: { edit: true, },
  },
  {
    id: 6,
    title: "Falcon Relay",
    owner: "Cypher",
    completed: false,
    enabled: true,
    permissions: { edit: true, },
  },
  {
    id: 7,
    title: "Gamma Drift",
    owner: "Atlas",
    completed: false,
    enabled: true,
    permissions: { edit: true, },
  },
  {
    id: 8,
    title: "Helix Mirror",
    owner: "Beacon",
    completed: true,
    enabled: true,
    permissions: { edit: true, },
  },
  {
    id: 9,
    title: "Ion Ledger",
    owner: "Cypher",
    completed: false,
    enabled: true,
    permissions: { edit: true, },
  },
  {
    id: 10,
    title: "Jade Signal",
    owner: "Atlas",
    completed: false,
    enabled: true,
    permissions: { edit: true, },
  },
  {
    id: 11,
    title: "Kilo Brief",
    owner: "Beacon",
    completed: false,
    enabled: true,
    permissions: { edit: true, },
  },
  {
    id: 12,
    title: "Lumen Trace",
    owner: "Cypher",
    completed: true,
    enabled: true,
    permissions: { edit: true, },
  },
];

const generatedRows = Array.from({ length: 48, }, (_, index) => {
  const id = index + 13;
  const owners = ["Atlas", "Beacon", "Cypher"];

  return {
    id,
    title: `Visual Fixture ${id}`,
    owner: owners[index % owners.length],
    completed: id % 3 === 0,
    enabled: true,
    permissions: { edit: true, },
  };
});

export const tableFixtureRows = [...baseRows, ...generatedRows];

export const disabledRowFixtureRows = [
  {
    id: 101,
    title: "Dormant Sentinel",
    owner: "Atlas",
    completed: false,
    enabled: false,
    permissions: { edit: true, },
  },
  {
    id: 102,
    title: "Muted Beacon",
    owner: "Beacon",
    completed: false,
    enabled: true,
    permissions: { edit: true, },
  },
  {
    id: 103,
    title: "Quiet Ledger",
    owner: "Cypher",
    completed: true,
    enabled: true,
    permissions: { edit: true, },
  },
  {
    id: 104,
    title: "Staged Rollout",
    owner: "Atlas",
    completed: false,
    enabled: true,
    permissions: { edit: true, },
  },
  {
    id: 105,
    title: "Fallback Queue",
    owner: "Beacon",
    completed: false,
    enabled: true,
    permissions: { edit: true, },
  },
];
