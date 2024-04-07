import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Auth() {
  return (
    <div className="h-screen grid place-items-center">
      <Tabs defaultValue="Patient" className="w-[800px] ">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="Patient">USER</TabsTrigger>
          <TabsTrigger value="Insurance">Insurance</TabsTrigger>
        </TabsList>
        <TabsContent value="Patient">
          <Card>
            <CardHeader>
              <CardTitle>Patient Login</CardTitle>
              <CardDescription>
                Enter your details and OTP sent to your mobile number to login.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="patientName">Name</Label>
                <Input
                  id="patientName"
                  type="text"
                  placeholder="Your Full Name"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="patientDOB">Date of Birth</Label>
                <Input id="patientDOB" type="date" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="patientMobile">Mobile Number</Label>
                <Input
                  id="patientMobile"
                  type="tel"
                  placeholder="10-digit Mobile Number"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="patientOTP">OTP</Label>
                <Input id="patientOTP" type="text" placeholder="Enter OTP" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Login</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="Insurance">
          <Card>
            <CardHeader>
              <CardTitle>Insurance Login</CardTitle>
              <CardDescription>
                Insurance company representatives can log in here using their
                credentials.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="insuranceUsername">Username</Label>
                <Input
                  id="insuranceUsername"
                  type="text"
                  placeholder="Enter Username"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="insurancePassword">Password</Label>
                <Input
                  id="insurancePassword"
                  type="password"
                  placeholder="Enter Password"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full py-3">Login</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
