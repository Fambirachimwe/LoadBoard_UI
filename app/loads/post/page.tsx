"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PostLoadPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <Link href="/loads" className="text-gray-500 hover:text-gray-700">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Loads
            </Button>
          </Link>
        </div>

        <Card className="p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-8">Post a New Load</h1>

          <form className="space-y-8">
            {/* Origin and Destination */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Pickup Details</h3>
                <div>
                  <Label>Location</Label>
                  <Input placeholder="Enter city, state" />
                </div>
                <div>
                  <Label>Date</Label>
                  <Input type="date" />
                </div>
                <div>
                  <Label>Time Window</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <Input type="time" />
                    <Input type="time" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Delivery Details</h3>
                <div>
                  <Label>Location</Label>
                  <Input placeholder="Enter city, state" />
                </div>
                <div>
                  <Label>Date</Label>
                  <Input type="date" />
                </div>
                <div>
                  <Label>Time Window</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <Input type="time" />
                    <Input type="time" />
                  </div>
                </div>
              </div>
            </div>

            {/* Load Details */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Load Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label>Equipment Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select equipment type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dry-van">Dry Van</SelectItem>
                      <SelectItem value="reefer">Reefer</SelectItem>
                      <SelectItem value="flatbed">Flatbed</SelectItem>
                      <SelectItem value="step-deck">Step Deck</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label>Weight (lbs)</Label>
                  <Input type="number" placeholder="Enter weight" />
                </div>

                <div>
                  <Label>Rate ($)</Label>
                  <Input type="number" placeholder="Enter rate" />
                </div>

                <div>
                  <Label>Rate Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select rate type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all-in">All In</SelectItem>
                      <SelectItem value="per-mile">Per Mile</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label>Special Instructions</Label>
                <Textarea placeholder="Enter any special requirements or instructions" className="h-24" />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-4">
              <Button variant="outline">Save as Draft</Button>
              <Button>Post Load</Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}