
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { User, Shield, Bell, Eye, Key, Link, Smartphone, Mail } from "lucide-react";

const Settings = () => {
  const connectedPlatforms = [
    { name: "Binance", status: "connected", lastSync: "2 minutes ago", apiStatus: "active" },
    { name: "Coinbase Pro", status: "connected", lastSync: "5 minutes ago", apiStatus: "active" },
    { name: "Kraken", status: "disconnected", lastSync: "Never", apiStatus: "inactive" },
    { name: "KuCoin", status: "connected", lastSync: "1 hour ago", apiStatus: "limited" }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "connected":
        return <Badge className="bg-green-500/20 text-green-700">Connected</Badge>;
      case "disconnected":
        return <Badge className="bg-red-500/20 text-red-700">Disconnected</Badge>;
      case "active":
        return <Badge className="bg-green-500/20 text-green-700">Active</Badge>;
      case "limited":
        return <Badge className="bg-yellow-500/20 text-yellow-700">Limited</Badge>;
      case "inactive":
        return <Badge className="bg-gray-500/20 text-gray-700">Inactive</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600">Manage your account and trading platform settings</p>
        </div>

        {/* User Profile Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5 text-primary" />
              Profile Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                <User className="h-10 w-10 text-primary-foreground" />
              </div>
              <div className="space-y-2">
                <Button variant="outline">Change Avatar</Button>
                <p className="text-sm text-gray-600">Upload a new profile picture</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" defaultValue="John Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" defaultValue="john.doe@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" defaultValue="+1 (555) 123-4567" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <Input id="timezone" defaultValue="UTC-5 (Eastern Time)" />
              </div>
            </div>

            <div className="flex justify-end">
              <Button>Save Changes</Button>
            </div>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Security Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="font-medium">Two-Factor Authentication</div>
                  <div className="text-sm text-gray-600">Add an extra layer of security to your account</div>
                </div>
                <Switch defaultChecked />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="font-medium">Email Notifications</div>
                  <div className="text-sm text-gray-600">Receive security alerts via email</div>
                </div>
                <Switch defaultChecked />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="font-medium">SMS Notifications</div>
                  <div className="text-sm text-gray-600">Receive security alerts via SMS</div>
                </div>
                <Switch />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Change Password</div>
                  <div className="text-sm text-gray-600">Last changed 30 days ago</div>
                </div>
                <Button variant="outline">
                  <Key className="h-4 w-4 mr-2" />
                  Change Password
                </Button>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">API Keys</div>
                  <div className="text-sm text-gray-600">Manage your trading API keys</div>
                </div>
                <Button variant="outline">
                  <Key className="h-4 w-4 mr-2" />
                  Manage Keys
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Trading Platform Connections */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Link className="h-5 w-5 text-primary" />
              Trading Platform Connections
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {connectedPlatforms.map((platform) => (
                <div key={platform.name} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <span className="text-primary font-bold">{platform.name.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="font-medium">{platform.name}</div>
                      <div className="text-sm text-gray-600">Last sync: {platform.lastSync}</div>
                      <div className="flex items-center gap-2 mt-1">
                        {getStatusBadge(platform.status)}
                        {getStatusBadge(platform.apiStatus)}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {platform.status === "connected" ? (
                      <>
                        <Button variant="outline" size="sm">Configure</Button>
                        <Button variant="outline" size="sm">Disconnect</Button>
                      </>
                    ) : (
                      <Button size="sm">Connect</Button>
                    )}
                  </div>
                </div>
              ))}
              
              <div className="flex justify-center pt-4">
                <Button variant="outline">
                  <Link className="h-4 w-4 mr-2" />
                  Add New Platform
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Notification Preferences */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-primary" />
              Notification Preferences
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="font-medium">Trade Notifications</div>
                  <div className="text-sm text-gray-600">Get notified when trades are executed</div>
                </div>
                <Switch defaultChecked />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="font-medium">Price Alerts</div>
                  <div className="text-sm text-gray-600">Receive alerts for price movements</div>
                </div>
                <Switch defaultChecked />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="font-medium">Portfolio Updates</div>
                  <div className="text-sm text-gray-600">Daily portfolio performance summaries</div>
                </div>
                <Switch />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="font-medium">Market News</div>
                  <div className="text-sm text-gray-600">Important market news and updates</div>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Privacy Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5 text-primary" />
              Privacy Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="font-medium">Public Profile</div>
                  <div className="text-sm text-gray-600">Make your trading stats visible to others</div>
                </div>
                <Switch />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="font-medium">Data Analytics</div>
                  <div className="text-sm text-gray-600">Allow us to use your data to improve our services</div>
                </div>
                <Switch defaultChecked />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="font-medium">Marketing Communications</div>
                  <div className="text-sm text-gray-600">Receive promotional emails and updates</div>
                </div>
                <Switch />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Danger Zone */}
        <Card className="border-red-200">
          <CardHeader>
            <CardTitle className="text-red-600">Danger Zone</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Export Data</div>
                <div className="text-sm text-gray-600">Download all your trading data</div>
              </div>
              <Button variant="outline">Export</Button>
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-red-600">Delete Account</div>
                <div className="text-sm text-gray-600">Permanently delete your account and all data</div>
              </div>
              <Button variant="destructive">Delete Account</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
