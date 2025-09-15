
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, TrendingUp, Clock, CheckCircle } from "lucide-react";
import { DashboardLayout } from "@/components/DashboardLayout";

const cryptoTokens = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    logo: "₿",
    reward: "0.00234",
    value: "$156.78",
    status: "available",
    apy: "12.5%",
    nextReward: "2h 15m"
  },
  {
    id: 2,
    name: "Ethereum",
    symbol: "ETH",
    logo: "Ξ",
    reward: "0.156",
    value: "$312.45",
    status: "available",
    apy: "8.3%",
    nextReward: "1h 45m"
  },
  {
    id: 3,
    name: "Cardano",
    symbol: "ADA",
    logo: "₳",
    reward: "245.67",
    value: "$89.23",
    status: "pending",
    apy: "15.2%",
    nextReward: "3h 30m"
  },
  {
    id: 4,
    name: "Solana",
    symbol: "SOL",
    logo: "◎",
    reward: "1.234",
    value: "$198.67",
    status: "claimed",
    apy: "18.7%",
    nextReward: "24h"
  },
  {
    id: 5,
    name: "Polygon",
    symbol: "MATIC",
    logo: "⬟",
    reward: "456.78",
    value: "$67.89",
    status: "available",
    apy: "22.1%",
    nextReward: "4h 20m"
  },
  {
    id: 6,
    name: "Chainlink",
    symbol: "LINK",
    logo: "⬡",
    reward: "12.345",
    value: "$234.56",
    status: "available",
    apy: "9.8%",
    nextReward: "6h 10m"
  }
];

const ClaimRewards = () => {
  const totalRewards = cryptoTokens.reduce((sum, token) => sum + parseFloat(token.value.replace('$', '')), 0);
  const availableRewards = cryptoTokens.filter(token => token.status === 'available').length;

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'available':
        return <Badge className="bg-success/10 text-success border-success/20">Available</Badge>;
      case 'pending':
        return <Badge className="bg-warning/10 text-warning border-warning/20">Pending</Badge>;
      case 'claimed':
        return <Badge className="bg-muted text-muted-foreground">Claimed</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'available':
        return <Star className="h-4 w-4 text-success" />;
      case 'pending':
        return <Clock className="h-4 w-4 text-warning" />;
      case 'claimed':
        return <CheckCircle className="h-4 w-4 text-muted-foreground" />;
      default:
        return null;
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Claim Rewards</h1>
            <p className="text-muted-foreground mt-1">Manage your crypto token rewards and earnings</p>
          </div>
          <Button className="gradient-primary text-white hover:opacity-90">
            Claim All Available
          </Button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="gradient-primary text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm opacity-90">Total Rewards Value</div>
                  <div className="text-2xl font-bold">${totalRewards.toFixed(2)}</div>
                </div>
                <TrendingUp className="h-8 w-8 opacity-80" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-muted-foreground">Available to Claim</div>
                  <div className="text-2xl font-bold text-success">{availableRewards}</div>
                </div>
                <Star className="h-8 w-8 text-success" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-muted-foreground">Total Tokens</div>
                  <div className="text-2xl font-bold">{cryptoTokens.length}</div>
                </div>
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">₿</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Crypto Tokens List */}
        <Card>
          <CardHeader>
            <CardTitle>Crypto Token Rewards</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {cryptoTokens.map((token) => (
                <div
                  key={token.id}
                  className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors"
                >
                  {/* Token Info */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-xl">
                      {token.logo}
                    </div>
                    <div>
                      <div className="font-semibold">{token.name}</div>
                      <div className="text-sm text-muted-foreground">{token.symbol}</div>
                    </div>
                  </div>

                  {/* Reward Details */}
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <div className="font-medium">{token.reward} {token.symbol}</div>
                      <div className="text-sm text-muted-foreground">{token.value}</div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">APY</div>
                      <div className="font-medium text-success">{token.apy}</div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">Next Reward</div>
                      <div className="font-medium">{token.nextReward}</div>
                    </div>

                    {/* Status and Action */}
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(token.status)}
                        {getStatusBadge(token.status)}
                      </div>
                      
                      {token.status === 'available' && (
                        <Button size="sm" className="gradient-primary text-white hover:opacity-90">
                          Claim
                        </Button>
                      )}
                      
                      {token.status === 'pending' && (
                        <Button size="sm" variant="outline" disabled>
                          Processing
                        </Button>
                      )}
                      
                      {token.status === 'claimed' && (
                        <Button size="sm" variant="ghost" disabled>
                          Claimed
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ClaimRewards;
