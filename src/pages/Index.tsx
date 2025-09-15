
import { ProfitCard } from "@/components/ProfitCard";
import { TradingChart } from "@/components/TradingChart";
import { StatCard } from "@/components/StatCard";
import { QuickActions } from "@/components/QuickActions";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, DollarSign, BarChart3, Target } from "lucide-react";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProfitCard 
            title="Claim Rewards"
            amount="$3,582.00"
            percentage="+12.5%"
            trend="up"
          />
          <ProfitCard 
            title="Total Profits"
            amount="$843.00"
            percentage="+8.2%"
            trend="up"
            showChart
          />
          <StatCard 
            value="182"
            label="Total Trades"
            icon={<BarChart3 className="h-6 w-6" />}
            trend={15}
          />
          <StatCard 
            value="$318.00"
            label="Crypto Coins"
            icon={<DollarSign className="h-6 w-6" />}
            trend={-2.4}
          />
        </div>

        {/* Charts and Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Trading Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <TradingChart />
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <QuickActions />
            
            <Card>
              <CardHeader>
                <CardTitle>Profit Forecast</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">12k</span>
                    <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-primary rounded-full"></div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">182</div>
                    <div className="text-sm text-muted-foreground">Total Trades</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-lg font-semibold">Success Rate</div>
                  <div className="text-2xl font-bold text-success">87.5%</div>
                </div>
                <Target className="h-8 w-8 text-success" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-lg font-semibold">Active Trades</div>
                  <div className="text-2xl font-bold text-primary">12</div>
                </div>
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-lg font-semibold">Daily Volume</div>
                  <div className="text-2xl font-bold">$24.8K</div>
                </div>
                <DollarSign className="h-8 w-8 text-warning" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
