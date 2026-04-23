import Card, { CardBody, CardHeader } from '@/components/ui/card/card';

interface Props {
  data: { date: string; value: number }[];
}

export default function AnalyticsCard({ data }: Props) {
  return (
    <Card variant="elevated">
      <CardHeader>Analytics</CardHeader>
      <CardBody>
        {data.map((item) => (
          <div key={item.date}>
            {item.date}: {item.value}
          </div>
        ))}
      </CardBody>
    </Card>
  );
}