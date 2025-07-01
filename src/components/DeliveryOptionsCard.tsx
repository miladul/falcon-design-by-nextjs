import { Truck, Timer } from 'lucide-react';

const DeliveryOptionsCard = () => {
    return (
        <div className="bg-white shadow rounded-2xl p-4 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Delivery Options</h2>

            {/* Regular Option */}
            <div className="flex items-start gap-3 mb-4">
                <Truck className="text-green-600 mt-1" />
                <div>
                    <p className="font-medium">Regular</p>
                    <p className="text-sm text-gray-500">Delivery within 2-3 days</p>
                </div>
            </div>

            {/* Express Option - Disabled */}
            <div className="flex items-start gap-3 opacity-50 cursor-not-allowed">
                <Timer className="text-gray-400 mt-1" />
                <div>
                    <p className="font-medium">
                        Express <span className="text-red-500 text-sm ml-1">(Not Available)</span>
                    </p>
                    <p className="text-sm text-gray-500">Delivery within 24 hours</p>
                </div>
            </div>
        </div>
    );
};

export default DeliveryOptionsCard;
