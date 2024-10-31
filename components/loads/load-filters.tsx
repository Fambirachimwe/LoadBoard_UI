"use client";

import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export function LoadFilters() {
  return (
    <Card className="p-6">
      <h2 className="font-semibold text-lg mb-6">Filters</h2>

      {/* Location Filter */}
      <div className="space-y-4 mb-6">
        <div>
          <Label>Origin</Label>
          <Input type="text" placeholder="Enter city or state" />
        </div>
        <div>
          <Label>Destination</Label>
          <Input type="text" placeholder="Enter city or state" />
        </div>
      </div>

      {/* Equipment Type */}
      <div className="mb-6">
        <Label>Equipment Type</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select equipment" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="dry-van">Dry Van</SelectItem>
            <SelectItem value="reefer">Reefer</SelectItem>
            <SelectItem value="flatbed">Flatbed</SelectItem>
            <SelectItem value="step-deck">Step Deck</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Weight Range */}
      <div className="mb-6">
        <Label>Weight Range (lbs)</Label>
        <div className="mt-2">
          <Slider
            defaultValue={[0, 45000]}
            max={45000}
            step={1000}
            className="mt-2"
          />
          <div className="flex justify-between mt-2 text-sm text-gray-500">
            <span>0 lbs</span>
            <span>45,000 lbs</span>
          </div>
        </div>
      </div>

      {/* Rate Range */}
      <div className="mb-6">
        <Label>Rate Range ($)</Label>
        <div className="mt-2">
          <Slider
            defaultValue={[0, 5000]}
            max={5000}
            step={100}
            className="mt-2"
          />
          <div className="flex justify-between mt-2 text-sm text-gray-500">
            <span>$0</span>
            <span>$5,000+</span>
          </div>
        </div>
      </div>

      {/* Date Range */}
      <div className="space-y-4 mb-6">
        <div>
          <Label>Pickup Date</Label>
          <Input type="date" />
        </div>
        <div>
          <Label>Delivery Date</Label>
          <Input type="date" />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <Button className="flex-1">Apply Filters</Button>
        <Button variant="outline" className="flex-1">Reset</Button>
      </div>
    </Card>
  );
}