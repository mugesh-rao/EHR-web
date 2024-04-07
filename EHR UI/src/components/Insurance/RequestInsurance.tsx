import Layout from "@/Layout/Layout";
import { ChevronLeft, PlusCircle, Upload } from "lucide-react";

import { Badge } from "@/components/ui/badge";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useState } from "react";
import axios from "axios";

function RequestInsurance() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [occupation, setOccupation] = useState("");
  const [weight, setWeight] = useState("");
  const [insuranceStatus, setInsuranceStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const applicationData = { fullName, mobileNumber, dob ,gender};
    try {
      const response = await axios.post('http://localhost:1000/request-Insurance', applicationData);
      console.log('Form submitted successfully:', response.data);
      // Handle successful form submission here
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle form submission error here
    }
  };
  

  const plans = [
    { id: "1year", label: "1 Year @ ₹7,620" },
    { id: "2years", label: "2 Years @ ₹14,671" },
    { id: "3years", label: "3 Years @ ₹21,530" },
  ];
  return (
    <Layout>
      <div className="mx-auto grid  flex-1 auto-rows-max gap-4">
        <div></div>

        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" className="h-7 w-7">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </Button>
          <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
            Apply Insurance
          </h1>
          <Badge variant="outline" className="ml-auto sm:ml-0">
            Care Supreme Direct
          </Badge>
          <div className="hidden items-center gap-2 md:ml-auto md:flex">
            <Button variant="outline" size="sm">
              Discard
            </Button>
            {/* <Button size="sm">Apply </Button> */}
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
          <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Insurance Plan Details</CardTitle>
                <CardDescription>
                  Choose your cover amount and see the premium.
                </CardDescription>
              </CardHeader>
              <CardContent>
              
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  {" "}
                  <div className="mb-4">
                    <div className="font-bold text-xl mb-2">Policy Period</div>
                  </div>
                </CardTitle>
                <CardDescription>
                  <p className="text-gray-700 text-base">
                    Choosing a multi-year plan saves your money and the trouble
                    of remembering yearly renewals.
                  </p>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-row gap-3">
                  {plans.map((plan) => (
                    <div
                      key={plan.id}
                      className={`mb-2 p-2 border-2 border-dashed cursor-pointer ${
                        selectedPlan === plan.id
                          ? "bg-black text-white border-white"
                          : " border-black"
                      }`}
                      onClick={() => setSelectedPlan(plan.id)}
                    >
                      <p className="font-semibold">{plan.label}</p>
                    </div>
                  ))}
                </div>

                <p className="mb-2">
                  Easy EMI options starting from ₹682/month.
                </p>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  View details ›
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Upload Document </CardTitle>
                <CardDescription>Lab Report ,</CardDescription>
              </CardHeader>
              <CardContent className="flex-col flex gap-2">
                <button className="flex aspect-square h-16 w-full items-center justify-center rounded-md border-2 border-black border-dashed">
                  <Upload className="h-8 w-8 text-black" />
                  <span className="sr-only">Upload</span>
                </button>
                <Button size="sm">Upload Now</Button>
              </CardContent>
            </Card>
          </div>
          <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Apply for Insurance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      type="text"
                      placeholder="Enter full name"
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="mobileNumber">Mobile Number</Label>
                    <Input
                      id="mobileNumber"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      type="tel"
                      placeholder="Enter mobile number"
                      pattern="[0-9]{10}"
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input  value={dob} 
  onChange={(e) => setDob(e.target.value)}  id="dob" type="date" />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="gender">Gender</Label>
                    <Select id="gender" aria-label="Select gender">
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="occupation">Occupation</Label>
                    <Input
                    value={occupation}
                    onChange={(e) => setOccupation(e.target.value)}
                      id="occupation"
                      type="text"
                      placeholder="Enter occupation"
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="weight">Weight (KG)</Label>
                    <Input
                      id="weight"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      type="number"
                      placeholder="Enter weight in KG"
                      min="1"
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="status">Insurance Status</Label>
                    <Select id="status" aria-label="Select insurance status">
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="draft">Draft</SelectItem>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="archived">Archived</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full flex justify-center py-4 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 "
        >
          Apply Now
        </button>
        <div className="flex items-center justify-center gap-2 md:hidden">
          {/* <Button variant="outline" size="sm">
            Discard
          </Button> */}
          {/* <Button size="sm">Save Product</Button> */}
        </div>
      </div>
    </Layout>
  );
}

export default RequestInsurance;
