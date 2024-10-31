"use client";

import { useState } from "react";
import { LoadCard } from "@/components/loads/load-card";
import { LoadFilters } from "@/components/loads/load-filters";
import { LoadSort } from "@/components/loads/load-sort";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Link from "next/link";

// Mock data - in real app, this would come from an API
const mockLoads = [
  {
    id: "1",
    origin: "Los Angeles, CA",
    destination: "Phoenix, AZ",
    price: 2500,
    distance: "373",
    weight: "15,000",
    pickupDate: "2024-02-15",
    deliveryDate: "2024-02-16",
    equipment: "Dry Van",
    status: "Available"
  },
  {
    id: "2",
    origin: "Chicago, IL",
    destination: "Detroit, MI",
    price: 1800,
    distance: "281",
    weight: "22,000",
    pickupDate: "2024-02-14",
    deliveryDate: "2024-02-15",
    equipment: "Reefer",
    status: "Available"
  },
];

export default function LoadsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [loads] = useState(mockLoads);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h1 className="text-2xl font-bold text-gray-900">Available Loads</h1>
            <div className="flex items-center gap-4">
              <div className="relative flex-1 md:w-96">
                <Input
                  type="text"
                  placeholder="Search loads..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
              <Link href="/loads/post">
                <Button>Post a Load</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <LoadFilters />
          </div>

          {/* Loads List */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow">
              {/* Sort Controls */}
              <LoadSort />

              {/* Loads Grid */}
              <div className="p-4">
                <div className="grid gap-4">
                  {loads.map((load) => (
                    <LoadCard key={load.id} load={load} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}