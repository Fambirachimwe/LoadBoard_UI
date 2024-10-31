"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  MapPin, 
  Calendar, 
  Truck, 
  DollarSign,
  ArrowRight,
  Weight
} from "lucide-react";
import Link from "next/link";

interface LoadCardProps {
  load: {
    id: string;
    origin: string;
    destination: string;
    price: number;
    distance: string;
    weight: string;
    pickupDate: string;
    deliveryDate: string;
    equipment: string;
    status: string;
  };
}

export function LoadCard({ load }: LoadCardProps) {
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex-1">
          {/* Route Information */}
          <div className="flex items-start gap-3">
            <div className="flex flex-col items-center">
              <MapPin className="h-5 w-5 text-gray-400" />
              <div className="w-px h-full bg-gray-200 my-1" />
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <div className="font-medium">{load.origin}</div>
              <div className="mt-4 font-medium">{load.destination}</div>
              <div className="text-sm text-gray-500 mt-1">{load.distance} miles</div>
            </div>
          </div>
        </div>

        {/* Load Details */}
        <div className="flex flex-wrap gap-4 md:gap-6">
          <div>
            <div className="flex items-center text-gray-500 text-sm">
              <Calendar className="h-4 w-4 mr-1" />
              Pickup
            </div>
            <div className="font-medium">{formatDate(load.pickupDate)}</div>
          </div>
          <div>
            <div className="flex items-center text-gray-500 text-sm">
              <Calendar className="h-4 w-4 mr-1" />
              Delivery
            </div>
            <div className="font-medium">{formatDate(load.deliveryDate)}</div>
          </div>
          <div>
            <div className="flex items-center text-gray-500 text-sm">
              <Truck className="h-4 w-4 mr-1" />
              Equipment
            </div>
            <div className="font-medium">{load.equipment}</div>
          </div>
          <div>
            <div className="flex items-center text-gray-500 text-sm">
              <Weight className="h-4 w-4 mr-1" />
              Weight
            </div>
            <div className="font-medium">{load.weight} lbs</div>
          </div>
        </div>

        {/* Price and Action */}
        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="text-sm text-gray-500">Rate</div>
            <div className="text-2xl font-bold text-primary">
              ${load.price.toLocaleString()}
            </div>
          </div>
          <Link href={`/loads/${load.id}/book`}>
            <Button className="whitespace-nowrap">
              Book Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}