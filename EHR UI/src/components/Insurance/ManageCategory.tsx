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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import axiosInstance from "@/config/axiosInstance";
import React, { useEffect, useState } from "react";

interface Category {
  _id: string;
  name: string;
  industry: string;
  subcategories: Subcategory[];
}

interface Subcategory {
  _id: string;
  name: string;
}

const ManageCategory: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [categories, setCategories] = useState<Category[]>([]);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [industryImage, setIndustryImage] = useState<File | null>(null);
  const [newSubcategoryName, setNewSubcategoryName] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axiosInstance.get<Category[]>("/getcategories");
        // Assuming your API returns an array of categories
        setCategories(data);
        console.log(data, "caet");
        setSuccessMessage("Category added successfully!");
      } catch (error) {
        console.error("Error fetching categories:", error);
        setErrorMessage("Failed to add category. Please try again.");
      }
    };

    fetchCategories();
  }, []);
  const [newSubcategoryImage, setNewSubcategoryImage] = useState<File | null>(
    null
  );

  const handleSubImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setNewSubcategoryImage(event.target.files[0]);
    }
  };
  const handleAddSubcategory = async () => {
    if (!selectedCategory) {
      alert("Please select a category.");
      return;
    }
    if (!newSubcategoryName.trim()) {
      alert("Please enter a subcategory name.");
      return;
    }
    const formData = new FormData();
    formData.append("name", newSubcategoryName);
    if (newSubcategoryImage) {
      formData.append("image", newSubcategoryImage);
    }

    try {
      await axiosInstance.post(
        `/categories/${selectedCategory}/subcategories`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setSuccessMessage("Subcategory added successfully!");
      setNewSubcategoryName(""); // Clear the input field

      // Optionally, refresh the category list to reflect the new subcategory
    } catch (error) {
      console.error("Error adding subcategory:", error);
      setErrorMessage("Failed to add subcategory. Please try again.");
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setIndustryImage(event.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", newCategoryName);
      formData.append("image", industryImage);

      const { data } = await axiosInstance.post("/createCategory", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(formData);
      console.log("Category added:", data);
      // Optionally, fetch categories again to update the list
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };
  return (
    <Layout>
      <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
        <Sheet>
          <SheetContent className="bg-white rounded-lg shadow-lg p-6">
            <SheetHeader className="border-b pb-4">
              <SheetTitle className="text-2xl font-semibold text-gray-800">
                Add New Industry
              </SheetTitle>
              <SheetDescription className="text-sm text-gray-600 mt-2">
                Fill in the details to add a new industry category.
              </SheetDescription>
            </SheetHeader>

            <SheetDescription className="pt-4">
              <div className="flex flex-col space-y-4">
                {/* Category Name Input */}
                <div>
                  <Label
                    htmlFor="categoryName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Category Name{newCategoryName}
                  </Label>
                  <Input
                    id="categoryName"
                    type="text"
                    value={newCategoryName}
                    onChange={(e) => setNewCategoryName(e.target.value)}
                    placeholder="Enter category name"
                    className="mt-1 block w-full border-gray-300 shadow-sm rounded-md"
                  />
                </div>

                {/* Image Upload Section */}
                <div>
                  <Label className="block text-sm font-medium text-gray-700">
                    Category Image
                  </Label>
                  <label
                    htmlFor="file-upload"
                    className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md cursor-pointer"
                  >
                    <div className="space-y-1 text-center">
                      <Upload className="mx-auto h-8 w-8 text-gray-400" />
                      <div className="flex text-sm text-gray-600">
                        <span className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600">
                          Upload a file
                        </span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                          onChange={handleImageChange}
                        />
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </label>
                </div>

                {/* Success and Error Messages */}
                {successMessage && (
                  <div className="text-sm text-slate-500">{successMessage}</div>
                )}
                {errorMessage && (
                  <div className="text-sm text-red-500">{errorMessage}</div>
                )}

                {/* Submit Button */}
                <Button
                  onClick={handleSubmit}
                  size="sm"
                  variant="solid"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white mt-4"
                >
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Add Industry
                </Button>
              </div>
            </SheetDescription>
          </SheetContent>

          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" className="h-7 w-7">
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Button>
            <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
              Manage Category
            </h1>
            <Badge variant="outline" className="ml-auto sm:ml-0">
              8
            </Badge>
            <div className="hidden items-center gap-2 md:ml-auto md:flex">
              <Button size="sm">Save Product</Button>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2 lg:gap-2">
            <Card>
              <CardHeader>
                <CardTitle>Industry</CardTitle>
                <CardDescription>
                  Lipsum dolor sit amet, consectetur adipiscing elit
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">Industry</TableHead>
                      <TableHead>SubCatgory</TableHead>
                      <TableHead className="w-[100px]">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {categories.map((category) => (
                      <TableRow key={category._id}>
                        <TableCell className="font-semibold">
                          {category.name}
                        </TableCell>

                        <TableCell>
                          <Label htmlFor="price-1" className="sr-only">
                            4
                          </Label>
                          <Input id="price-1" type="number" defaultValue="4" />
                        </TableCell>
                        <TableCell>
                          <ToggleGroup
                            type="single"
                            defaultValue="s"
                            variant="outline"
                          >
                            <ToggleGroupItem value="s">Delete</ToggleGroupItem>
                            <ToggleGroupItem value="archive">
                              Archive
                            </ToggleGroupItem>
                          </ToggleGroup>
                          {/* You might want to replace this with actual functionality */}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter className="justify-center border-t p-4">
                <SheetTrigger>
                  <Button size="sm" variant="ghost" className="gap-1">
                    <PlusCircle className="h-3.5 w-3.5" />
                    Add Industry
                  </Button>
                </SheetTrigger>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Category</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 sm:grid-cols-1">
                  <div className="w-64 relative">
                    <label
                      htmlFor="categorySelect"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Select Category
                    </label>
                    <div className="mt-1 relative">
                      <select
                        id="categorySelect"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md cursor-pointer"
                      >
                        <option value="">Select category</option>
                        {categories.map((category) => (
                          <option key={category._id} value={category._id}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid gap-3">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">Category</TableHead>
                          <TableHead>Total</TableHead>
                          <TableHead className="w-[100px]">Action</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {categories
                          .find((category) => category._id === selectedCategory)
                          ?.subcategories.map((subcategory) => (
                            <TableRow key={subcategory._id}>
                              <TableCell className="font-semibold">
                                {subcategory.name}
                              </TableCell>

                              <TableCell>
                                <Input
                                  id="price-1"
                                  type="number"
                                  defaultValue="4"
                                />
                              </TableCell>
                              <TableCell>
                                <ToggleGroup
                                  type="single"
                                  defaultValue="s"
                                  variant="outline"
                                >
                                  <ToggleGroupItem value="s">
                                    Update
                                  </ToggleGroupItem>
                                  <ToggleGroupItem value="l">
                                    Delete
                                  </ToggleGroupItem>
                                </ToggleGroup>
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </div>

                  <CardFooter className="justify-center border-t p-4">
                    <div className="my-4">
                      <h3 className="text-lg font-semibold">
                        Add New Subcategory
                      </h3>
                      <div className="flex items-center space-x-4">
                        <Input
                          id="newSubcategoryName"
                          type="text"
                          value={newSubcategoryName}
                          onChange={(e) =>
                            setNewSubcategoryName(e.target.value)
                          }
                          placeholder="Enter new subcategory name"
                        />
                        <label className="block">
                          <span className="sr-only">
                            Choose subcategory image
                          </span>
                          <input
                            type="file"
                            onChange={handleSubImageChange}
                            className="block w-full text-sm text-gray-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-gray-200 file:text-gray-700
                            hover:file:bg-gray-300"
                          />
                        </label>
                        <Button
                          onClick={handleAddSubcategory}
                          size="sm"
                          variant="ghost"
                          className="gap-1 bg-gray-200"
                        >
                          <PlusCircle className="h-3.5 w-3.5" />
                          Add
                        </Button>
                      </div>
                    </div>
                  </CardFooter>
                </div>
              </CardContent>
            </Card>
          </div>
        </Sheet>
      </div>
    </Layout>
  );
};

export default ManageCategory;
