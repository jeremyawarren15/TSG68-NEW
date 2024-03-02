'use client'

import { useEffect, useState } from 'react';

export default function DateDisplay({ date }: { date: Date }) {
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    const formatDateTime = (date: Date) => {
      return new Intl.DateTimeFormat('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short',
      }).format(date);
    };
    setFormattedDate(formatDateTime(date));
  }, [date]);

  return <>{formattedDate}</>;
}
