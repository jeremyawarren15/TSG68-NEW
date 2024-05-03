import { getEvent } from '@/app/actions/eventActions';
import Heading from '@/app/components/Heading';
import { marked } from 'marked';
import Link from 'next/link';

export default async function EventPage({
  params,
}: {
  params: { id: string };
}) {
  const event = await getEvent(params.id);
  return (
    <div>
      <div className="flex gap-2">
        <Heading>{event.name}</Heading>
        <Link href={`/events/${params.id}/edit`}>
          <button className="btn btn-link">Edit</button>
        </Link>
      </div>
      <div className="divider" />
      <div className="prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl">
        <div dangerouslySetInnerHTML={{ __html: marked(event.content) }}></div>
      </div>
    </div>
  );
}
