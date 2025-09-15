
import { TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProfitCardProps {
  title: string;
  amount: string;
  percentage?: string;
  trend?: "up" | "down";
  showChart?: boolean;
}

export function ProfitCard({ title, amount, percentage, trend = "up", showChart = false }: ProfitCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {trend === "up" && (
          <TrendingUp className="h-4 w-4 text-success" />
        )}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{amount}</div>
        {percentage && (
          <p className="text-xs text-muted-foreground mt-1">
            <span className={trend === "up" ? "text-success" : "text-destructive"}>
              {percentage}
            </span>{" "}
            from last month
          </p>
        )}
        {showChart && (
          <div className="mt-4 h-20 bg-gradient-to-r from-primary/20 to-primary/5 rounded-md flex items-end p-2">
            <div className="w-full h-full bg-primary/30 rounded-sm"></div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
