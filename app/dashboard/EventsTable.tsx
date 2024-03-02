import Link from "next/link";
import DateDisplay from "../components/DateDisplay";

type EventTableItem = {
  id: string;
  name: string;
  startDate: Date;
  endDate: Date;
}

export default async function EventsTable({events}: {events: EventTableItem[]}) {
  if (!events.length) {
    return (
      <div className="p-4 text-base-content">
        <p>No events yet.</p>
      </div>
    )
  }

  return (
    <table className="table">
      <thead className="text-base-content">
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
            <td><DateDisplay date={event.startDate} /></td>
            <td><DateDisplay date={event.endDate} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}