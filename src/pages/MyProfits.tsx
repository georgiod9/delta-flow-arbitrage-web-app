
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TrendingUp, TrendingDown, DollarSign, BarChart3, ArrowUpDown } from "lucide-react";
import { ProfitCard } from "@/components/ProfitCard";

const MyProfits = () => {
  const tradingData = [
    {
      id: 1,
      symbol: "BTC/USDT",
      type: "BUY",
      amount: "0.5",
      price: "$42,150.00",
      total: "$21,075.00",
      profit: "+$1,250.00",
      profitPercent: "+5.9%",
      date: "2024-01-15 14:30:25",
      status: "completed"
    },
    {
      id: 2,
      symbol: "ETH/USDT",
      type: "SELL",
      amount: "2.3",
      price: "$2,580.00",
      total: "$5,934.00",
      profit: "+$320.00",
      profitPercent: "+5.7%",
      date: "2024-01-15 12:15:10",
      status: "completed"
    },
    {
      id: 3,
      symbol: "ADA/USDT",
      type: "BUY",
      amount: "1000",
      price: "$0.45",
      total: "$450.00",
      profit: "-$25.00",
      profitPercent: "-5.6%",
      date: "2024-01-14 16:45:33",
      status: "completed"
    },
    {
      id: 4,
      symbol: "DOT/USDT",
      type: "SELL",
      amount: "50",
      price: "$7.20",
      total: "$360.00",
      profit: "+$85.00",
      profitPercent: "+30.9%",
      date: "2024-01-14 09:22:18",
      status: "completed"
    },
    {
      id: 5,
      symbol: "SOL/USDT",
      type: "BUY",
      amount: "10",
      price: "$98.50",
      total: "$985.00",
      profit: "+$195.00",
      profitPercent: "+24.7%",
      date: "2024-01-13 11:10:45",
      status: "completed"
    }
  ];

  const getTradeBadgeColor = (type: string) => {
    return type === "BUY" ? "bg-green-500/20 text-green-700" : "bg-red-500/20 text-red-700";
  };

  const getProfitColor = (profit: string) => {
    return profit.startsWith("+") ? "text-green-600" : "text-red-600";
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Profits</h1>
            <p className="text-gray-600">Track your crypto trading performance and profits</p>
          </div>
        </div>

        {/* Profit Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProfitCard 
            title="Total Profit"
            amount="$8,425.00"
            percentage="+18.3%"
            trend="up"
          />
          <ProfitCard 
            title="Today's Profit"
            amount="$1,570.00"
            percentage="+12.4%"
            trend="up"
          />
          <ProfitCard 
            title="Monthly Profit"
            amount="$5,290.00"
            percentage="+23.1%"
            trend="up"
          />
          <ProfitCard 
            title="Win Rate"
            amount="78.5%"
            percentage="+4.2%"
            trend="up"
          />
        </div>

        {/* Trading Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-600">Total Trades</div>
                  <div className="text-2xl font-bold">247</div>
                </div>
                <ArrowUpDown className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-600">Profitable Trades</div>
                  <div className="text-2xl font-bold text-green-600">194</div>
                </div>
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-600">Loss Trades</div>
                  <div className="text-2xl font-bold text-red-600">53</div>
                </div>
                <TrendingDown className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Trades Table */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              Recent Spot Trades
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Symbol</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Profit/Loss</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tradingData.map((trade) => (
                  <TableRow key={trade.id}>
                    <TableCell className="font-medium">
                      {trade.symbol}
                    </TableCell>
                    <TableCell>
                      <Badge className={getTradeBadgeColor(trade.type)}>
                        {trade.type}
                      </Badge>
                    </TableCell>
                    <TableCell>{trade.amount}</TableCell>
                    <TableCell>{trade.price}</TableCell>
                    <TableCell>{trade.total}</TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className={`font-medium ${getProfitColor(trade.profit)}`}>
                          {trade.profit}
                        </span>
                        <span className={`text-sm ${getProfitColor(trade.profitPercent)}`}>
                          {trade.profitPercent}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm text-gray-600">
                      {trade.date}
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        {trade.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Performance Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Best Performing Pairs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium">SOL/USDT</span>
                  <span className="text-green-600 font-medium">+24.7%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">DOT/USDT</span>
                  <span className="text-green-600 font-medium">+30.9%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">BTC/USDT</span>
                  <span className="text-green-600 font-medium">+5.9%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">ETH/USDT</span>
                  <span className="text-green-600 font-medium">+5.7%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Trading Volume</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Today</span>
                  <span className="font-medium">$28,819.00</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">This Week</span>
                  <span className="font-medium">$156,420.00</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">This Month</span>
                  <span className="font-medium">$642,850.00</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">All Time</span>
                  <span className="font-medium">$2,451,330.00</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MyProfits;
