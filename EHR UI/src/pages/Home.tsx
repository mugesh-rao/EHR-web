import {
  Activity,
  ArrowUpRight,
  Clipboard,
  CreditCard,
  DollarSign,
  FileText,
  CheckSquare,
  Users,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from "react-router-dom";
import Layout from "@/Layout/Layout";
import { Overview } from "@/components/Dashboard/ChartHome";
import Example from "@/components/Dashboard/ChartUser";
import { TabsDemo } from "@/components/Auth/Login";

// Define your component as a regular (synchronous) functional component
export default function Home() {
  return (
    <Layout>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">New Policies</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />{" "}
            {/* Assuming FileText is an icon representing policies */}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">342</div>
            <p className="text-xs text-muted-foreground">
              +5.3% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Claims</CardTitle>
            <Clipboard className="h-4 w-4 text-muted-foreground" />{" "}
            {/* Assuming Clipboard is an icon representing claims */}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">
              +10.2% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Settled Claims
            </CardTitle>
            <CheckSquare className="h-4 w-4 text-muted-foreground" />{" "}
            {/* Assuming CheckSquare is an icon representing settled claims */}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98</div>
            <p className="text-xs text-muted-foreground">-4% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Premiums Collected
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$25,634.50</div>
            <p className="text-xs text-muted-foreground">
              +15.5% from last month
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
      <Card className="xl:col-span-2">
  <CardHeader className="flex flex-row items-center">
    <div className="grid gap-2">
      <CardTitle>Recent Claims</CardTitle>
      <CardDescription>
        Latest insurance claims submitted.
      </CardDescription>
    </div>
    <Button asChild size="sm" className="ml-auto gap-1">
      <Link to="/claims">
        View All
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </Button>
  </CardHeader>
  <CardContent>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Claimant</TableHead>
          <TableHead >Claim Type</TableHead>
          <TableHead >Status</TableHead>
          <TableHead >Date Submitted</TableHead>
          <TableHead className="text-right">Claim Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            <div className="font-medium">Mugesh rao</div>
            <div className=" text-sm text-muted-foreground md:inline">
mugeshraoego@gmila.com            </div>
          </TableCell>
          <TableCell >Vehicle</TableCell>
          <TableCell >
            <Badge className="text-xs" variant="outline">
              Pending
            </Badge>
          </TableCell>
          <TableCell >
            2023-06-30
          </TableCell>
          <TableCell className="text-right">₹1,20,000</TableCell>
        </TableRow>
        {/* Additional rows for other claims */}
      </TableBody>
    </Table>
  </CardContent>
</Card>

<Card>
  <CardHeader>
    <CardTitle>Recent Policy Purchases</CardTitle>
  </CardHeader>
  <CardContent className="grid gap-8">
    {/* Policy Purchase Item */}
    <div className="flex items-center gap-4">
      <Avatar className="hidden h-9 w-9 sm:flex">
        <AvatarImage src="/avatars/01.png" alt="Avatar" />
        <AvatarFallback>OM</AvatarFallback>
      </Avatar>
      <div className="grid gap-1">
        <p className="text-sm font-medium leading-none">
          Ethan Johnson
        </p>
        <p className="text-sm text-muted-foreground">
          ethan.johnson@email.com
        </p>
      </div>
      <div className="ml-auto font-medium">Premium: ₹1,20,000</div>
    </div>
    {/* Additional policy purchase items can be added here */}
  </CardContent>
</Card>

      </div>
      <div className="grid grid-cols-1 gap-4 ">
        <div>
          <Card className=" ">
            <CardHeader>
              <CardTitle>Insurance Overview</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <Overview />
            </CardContent>
          </Card>
        </div>
    
      </div>
    </Layout>
  );
}
