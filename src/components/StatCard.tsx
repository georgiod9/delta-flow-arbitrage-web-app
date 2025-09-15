
import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  value: string | number;
  label: string;
  icon?: React.ReactNode;
  trend?: number;
}

export function StatCard({ value, label, icon, trend }: StatCardProps) {
  return (
    <Card className="p-4 hover:shadow-md transition-shadow">
      <CardContent className="p-0">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold">{value}</div>
            <div className="text-sm text-muted-foreground">{label}</div>
            {trend && (
              <div className={`text-xs mt-1 ${trend > 0 ? 'text-success' : 'text-destructive'}`}>
                {trend > 0 ? '+' : ''}{trend}%
              </div>
            )}
          </div>
          {icon && (
            <div className="text-primary">
              {icon}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
