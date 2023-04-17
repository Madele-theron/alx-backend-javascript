export default function createIteratorObject(report) {
  const listAllEmployees = [];

  for (const employees of Object.values(report.allEmployees)) {
    listAllEmployees.push(...employees);
  }
  return listAllEmployees;
}
