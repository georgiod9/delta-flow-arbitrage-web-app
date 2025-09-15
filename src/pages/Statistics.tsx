
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BarChart3, TrendingUp, TrendingDown, DollarSign, Activity, PieChart, Target, Calendar } from "lucide-react";

const Statistics = () => {
  const tradingStats = {
    totalTrades: 1247,
    successRate: 68.5,
    totalProfit: 45678.90,
    totalLoss: 12345.67,
    averageWin: 125.43,
    averageLoss: 89.67,
    winLossRatio: 1.4,
    sharpeRatio: 1.82
  };

  const monthlyData = [
    { month: "Jan 2024", trades: 98, profit: 3456.78, loss: 1234.56, netProfit: 2222.22 },
    { month: "Feb 2024", trades: 112, profit: 4567.89, loss: 987.65, netProfit: 3580.24 },
    { month: "Mar 2024", trades: 89, profit: 2345.67, loss: 1876.54, netProfit: 469.13 },
    { month: "Apr 2024", trades: 134, profit: 5678.90, loss: 2109.87, netProfit: 3569.03 },
    { month: "May 2024", trades: 156, profit: 6789.01, loss: 1654.32, netProfit: 5134.69 },
    { month: "Jun 2024", trades: 143, profit: 5432.10, loss: 2543.21, netProfit: 2888.89 }
  ];

  const assetPerformance = [
    { asset: "BTC", trades: 234, winRate: 72.3, profit: 15678.90, bestTrade: 1234.56 },
    { asset: "ETH", trades: 198, winRate: 65.2, profit: 12456.78, bestTrade: 987.65 },
    { asset: "ADA", trades: 156, winRate: 70.5, profit: 8765.43, bestTrade: 543.21 },
    { asset: "SOL", trades: 123, winRate: 58.9, profit: 5432.10, bestTrade: 432.10 },
    { asset: "DOT", trades: 98, winRate: 74.1, profit: 3210.98, bestTrade: 321.09 }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Trading Statistics</h1>
          <p className="text-gray-600">Comprehensive analysis of your trading performance</p>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-600">Total Trades</div>
                  <div className="text-2xl font-bold">{tradingStats.totalTrades.toLocaleString()}</div>
                </div>
                <Activity className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                  <div className="text-2xl font-bold text-green-600">{tradingStats.successRate}%</div>
                </div>
                <Target className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-600">Net Profit</div>
                  <div className="text-2xl font-bold text-green-600">
                    ${(tradingStats.totalProfit - tradingStats.totalLoss).toLocaleString()}
                  </div>
                </div>
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-600">Sharpe Ratio</div>
                  <div className="text-2xl font-bold text-primary">{tradingStats.sharpeRatio}</div>
                </div>
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="h-5 w-5 text-primary" />
                Performance Ratios
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Win/Loss Ratio</span>
                  <span className="font-medium">{tradingStats.winLossRatio}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Average Win</span>
                  <span className="font-medium text-green-600">${tradingStats.averageWin}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Average Loss</span>
                  <span className="font-medium text-red-600">${tradingStats.averageLoss}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Total Profit</span>
                  <span className="font-medium text-green-600">${tradingStats.totalProfit.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Total Loss</span>
                  <span className="font-medium text-red-600">${tradingStats.totalLoss.toLocaleString()}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Today's Trades</span>
                  <span className="font-medium">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">This Week</span>
                  <span className="font-medium">78</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">This Month</span>
                  <span className="font-medium">312</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Best Day</span>
                  <span className="font-medium text-green-600">+$1,234.56</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Worst Day</span>
                  <span className="font-medium text-red-600">-$456.78</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Monthly Performance Table */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Monthly Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Month</TableHead>
                  <TableHead>Trades</TableHead>
                  <TableHead>Gross Profit</TableHead>
                  <TableHead>Gross Loss</TableHead>
                  <TableHead>Net Profit</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {monthlyData.map((month) => (
                  <TableRow key={month.month}>
                    <TableCell className="font-medium">{month.month}</TableCell>
                    <TableCell>{month.trades}</TableCell>
                    <TableCell className="text-green-600">${month.profit.toLocaleString()}</TableCell>
                    <TableCell className="text-red-600">${month.loss.toLocaleString()}</TableCell>
                    <TableCell>
                      <div className={`font-medium ${month.netProfit > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        ${month.netProfit.toLocaleString()}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Asset Performance Table */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              Asset Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Asset</TableHead>
                  <TableHead>Total Trades</TableHead>
                  <TableHead>Win Rate</TableHead>
                  <TableHead>Total Profit</TableHead>
                  <TableHead>Best Trade</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {assetPerformance.map((asset) => (
                  <TableRow key={asset.asset}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                          <span className="text-primary font-bold text-sm">{asset.asset}</span>
                        </div>
                        <span className="font-medium">{asset.asset}</span>
                      </div>
                    </TableCell>
                    <TableCell>{asset.trades}</TableCell>
                    <TableCell>
                      <Badge className={asset.winRate > 70 ? "bg-green-500/20 text-green-700" : 
                                     asset.winRate > 60 ? "bg-yellow-500/20 text-yellow-700" : 
                                     "bg-red-500/20 text-red-700"}>
                        {asset.winRate}%
                      </Badge>
                    </TableCell>
                    <TableCell className="text-green-600 font-medium">
                      ${asset.profit.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-green-600 font-medium">
                      +${asset.bestTrade}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Statistics;
