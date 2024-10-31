"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  GridIcon,
  LayoutList,
} from "lucide-react";

export function LoadSort() {
  return (
    <div className="border-b p-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="text-sm text-gray-500">
          Showing <span className="font-medium text-gray-900">67</span> loads
        </div>
        
        <div className="flex items-center gap-4">
          <Select defaultValue="newest">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="distance">Distance</SelectItem>
              <SelectItem value="pickup">Pickup Date</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex items-center border rounded-lg">
            <Button variant="ghost" size="icon" className="rounded-r-none">
              <LayoutList className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-l-none border-l">
              <GridIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}