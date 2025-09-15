
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Button className="w-full gradient-primary text-white hover:opacity-90">
          Get Now
        </Button>
        <div className="text-xs text-muted-foreground text-center">
          Current Profits: 35%
        </div>
      </CardContent>
    </Card>
  );
}
