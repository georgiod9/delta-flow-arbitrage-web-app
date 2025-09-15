
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Coins, TrendingUp, Lock, Calendar, Plus } from "lucide-react";

const Staking = () => {
  const stakingData = [
    {
      id: 1,
      token: "ETH",
      name: "Ethereum",
      stakedAmount: "5.2",
      currentValue: "$12,480.00",
      apy: "4.2%",
      rewards: "0.0126",
      rewardsValue: "$30.24",
      lockPeriod: "30 days",
      status: "active",
      startDate: "2024-01-15",
      endDate: "2024-02-14"
    },
    {
      id: 2,
      token: "ADA",
      name: "Cardano",
      stakedAmount: "2,500",
      currentValue: "$1,125.00",
      apy: "5.8%",
      rewards: "42.5",
      rewardsValue: "$19.13",
      lockPeriod: "Flexible",
      status: "active",
      startDate: "2024-01-10",
      endDate: "Flexible"
    },
    {
      id: 3,
      token: "DOT",
      name: "Polkadot",
      stakedAmount: "150",
      currentValue: "$1,080.00",
      apy: "12.5%",
      rewards: "8.2",
      rewardsValue: "$59.04",
      lockPeriod: "28 days",
      status: "active",
      startDate: "2024-01-20",
      endDate: "2024-02-17"
    },
    {
      id: 4,
      token: "SOL",
      name: "Solana",
      stakedAmount: "25",
      currentValue: "$2,462.50",
      apy: "7.3%",
      rewards: "1.2",
      rewardsValue: "$118.32",
      lockPeriod: "Flexible",
      status: "active",
      startDate: "2024-01-05",
      endDate: "Flexible"
    },
    {
      id: 5,
      token: "ATOM",
      name: "Cosmos",
      stakedAmount: "200",
      currentValue: "$1,840.00",
      apy: "18.2%",
      rewards: "15.6",
      rewardsValue: "$143.52",
      lockPeriod: "21 days",
      status: "pending",
      startDate: "2024-01-25",
      endDate: "2024-02-15"
    }
  ];

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500/20 text-green-700";
      case "pending":
        return "bg-yellow-500/20 text-yellow-700";
      case "completed":
        return "bg-blue-500/20 text-blue-700";
      default:
        return "bg-gray-500/20 text-gray-700";
    }
  };

  const totalStakedValue = stakingData.reduce((sum, item) => sum + parseFloat(item.currentValue.replace(/[$,]/g, '')), 0);
  const totalRewardsValue = stakingData.reduce((sum, item) => sum + parseFloat(item.rewardsValue.replace(/[$,]/g, '')), 0);
  const averageAPY = stakingData.reduce((sum, item) => sum + parseFloat(item.apy.replace('%', '')), 0) / stakingData.length;

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Staking</h1>
            <p className="text-gray-600">Manage your staked crypto assets and earn rewards</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="h-4 w-4 mr-2" />
            Stake More
          </Button>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-600">Total Staked</div>
                  <div className="text-2xl font-bold">${totalStakedValue.toLocaleString()}</div>
                </div>
                <Coins className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-600">Total Rewards</div>
                  <div className="text-2xl font-bold text-green-600">${totalRewardsValue.toFixed(2)}</div>
                </div>
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-600">Average APY</div>
                  <div className="text-2xl font-bold text-primary">{averageAPY.toFixed(1)}%</div>
                </div>
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-600">Active Stakes</div>
                  <div className="text-2xl font-bold">{stakingData.filter(item => item.status === 'active').length}</div>
                </div>
                <Lock className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Staked Tokens Table */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Coins className="h-5 w-5 text-primary" />
              Staked Assets
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Asset</TableHead>
                  <TableHead>Staked Amount</TableHead>
                  <TableHead>Current Value</TableHead>
                  <TableHead>APY</TableHead>
                  <TableHead>Rewards Earned</TableHead>
                  <TableHead>Lock Period</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {stakingData.map((stake) => (
                  <TableRow key={stake.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                          <span className="text-primary font-bold text-sm">{stake.token}</span>
                        </div>
                        <div>
                          <div className="font-medium">{stake.token}</div>
                          <div className="text-sm text-gray-600">{stake.name}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{stake.stakedAmount} {stake.token}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="font-medium">{stake.currentValue}</div>
                    </TableCell>
                    <TableCell>
                      <Badge className="bg-green-500/20 text-green-700">
                        {stake.apy}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium text-green-600">{stake.rewards} {stake.token}</div>
                        <div className="text-sm text-gray-600">{stake.rewardsValue}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <span className="text-sm">{stake.lockPeriod}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusBadgeColor(stake.status)}>
                        {stake.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Claim
                        </Button>
                        {stake.lockPeriod === "Flexible" && (
                          <Button variant="outline" size="sm">
                            Unstake
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Staking Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Staking Rewards History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Today</span>
                  <span className="font-medium text-green-600">+$12.45</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">This Week</span>
                  <span className="font-medium text-green-600">+$87.15</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">This Month</span>
                  <span className="font-medium text-green-600">+$369.21</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">All Time</span>
                  <span className="font-medium text-green-600">+$1,245.68</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Available to Stake</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold text-xs">BTC</span>
                    </div>
                    <span className="font-medium">Bitcoin</span>
                  </div>
                  <Button variant="outline" size="sm">Stake</Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold text-xs">BNB</span>
                    </div>
                    <span className="font-medium">Binance Coin</span>
                  </div>
                  <Button variant="outline" size="sm">Stake</Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold text-xs">MATIC</span>
                    </div>
                    <span className="font-medium">Polygon</span>
                  </div>
                  <Button variant="outline" size="sm">Stake</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Staking;
