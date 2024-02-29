import Link from "next/link";

type EventTableItem = {
  id: string;
  name: string;
  startDate: Date;
  endDate: Date;
}

export default async function EventsTable({events}: {events: EventTableItem[]}) {
  return (
    <table className="table">
      <thead className="text-neutral-content">
        <tr>
          <th>Name</th>
          <th>Start Date</th>
          <th>End Date</th>
        </tr>
      </thead>
      <tbody>
        {events.map((event) => (
          <tr key={event.id}>
            <td className="font-bold"><Link href={"events/" + event.id}>{event.name}</Link></td>
            <td>{event.startDate.toDateString()}</td>
            <td>{event.endDate.toDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}