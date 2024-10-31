// "use client";

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ArrowLeft, Truck, MapPin, Calendar, DollarSign } from 'lucide-react';
import Link from 'next/link';

// Mock load data - in real app, fetch based on ID
const mockLoads = [
  {
    id: '1',
    origin: 'Los Angeles, CA',
    destination: 'Phoenix, AZ',
    price: 2500,
    distance: '373',
    weight: '15,000',
    pickupDate: '2024-02-15',
    deliveryDate: '2024-02-16',
    equipment: 'Dry Van',
    status: 'Available',
  },
  {
    id: '2',
    origin: 'Chicago, IL',
    destination: 'Detroit, MI',
    price: 1800,
    distance: '281',
    weight: '22,000',
    pickupDate: '2024-02-14',
    deliveryDate: '2024-02-15',
    equipment: 'Reefer',
    status: 'Available',
  },
];

export function generateStaticParams() {
  return mockLoads.map((load) => ({
    id: load.id,
  }));
}

export default function BookLoadPage({ params }: { params: { id: string } }) {
  const mockLoad =
    mockLoads.find((load) => load.id === params.id) || mockLoads[0];

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

        <div className="space-y-6">
          {/* Load Summary */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Load Summary</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-gray-400" />
                  <div>
                    <div className="text-sm text-gray-500">Origin</div>
                    <div className="font-medium">{mockLoad.origin}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-gray-400" />
                  <div>
                    <div className="text-sm text-gray-500">Pickup Date</div>
                    <div className="font-medium">{mockLoad.pickupDate}</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-gray-400" />
                  <div>
                    <div className="text-sm text-gray-500">Destination</div>
                    <div className="font-medium">{mockLoad.destination}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-gray-400" />
                  <div>
                    <div className="text-sm text-gray-500">Delivery Date</div>
                    <div className="font-medium">{mockLoad.deliveryDate}</div>
                  </div>
                </div>
              </div>
            </div>
            <Separator className="my-4" />
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-gray-400" />
                <div>
                  <div className="text-sm text-gray-500">Equipment</div>
                  <div className="font-medium">{mockLoad.equipment}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-gray-400" />
                <div>
                  <div className="text-sm text-gray-500">Rate</div>
                  <div className="text-2xl font-bold text-primary">
                    ${mockLoad.price.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Booking Form */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-6">Booking Details</h2>
            <form className="space-y-6">
              {/* Carrier Information */}
              <div className="space-y-4">
                <h3 className="font-medium">Carrier Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>MC Number</Label>
                    <Input placeholder="Enter MC number" />
                  </div>
                  <div>
                    <Label>DOT Number</Label>
                    <Input placeholder="Enter DOT number" />
                  </div>
                </div>
              </div>

              {/* Driver Information */}
              <div className="space-y-4">
                <h3 className="font-medium">Driver Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Driver Name</Label>
                    <Input placeholder="Enter driver name" />
                  </div>
                  <div>
                    <Label>Phone Number</Label>
                    <Input placeholder="Enter phone number" />
                  </div>
                </div>
              </div>

              {/* Equipment Details */}
              <div className="space-y-4">
                <h3 className="font-medium">Equipment Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Trailer Number</Label>
                    <Input placeholder="Enter trailer number" />
                  </div>
                  <div>
                    <Label>Insurance Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select insurance type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cargo">Cargo Insurance</SelectItem>
                        <SelectItem value="liability">
                          Liability Insurance
                        </SelectItem>
                        <SelectItem value="both">Both</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Terms and Rate Confirmation */}
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <Input type="checkbox" className="mt-1" />
                  <Label className="text-sm">
                    I agree to the terms and conditions, including the rate
                    confirmation and cargo requirements for this load.
                  </Label>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-4">
                <Button variant="outline">Cancel</Button>
                <Button>Confirm Booking</Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
