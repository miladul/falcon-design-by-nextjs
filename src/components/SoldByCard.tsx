import { Store, CheckCircle, MessageCircle, ExternalLink } from 'lucide-react';

const SoldByCard = () => {
    return (
        <div className="bg-white shadow rounded-2xl p-4 w-full max-w-md">
            {/* Header: Shop name + Verified */}
            <div className="flex items-center gap-3 mb-2">
                <Store className="text-blue-600" />
                <p className="text-lg font-semibold flex items-center gap-1">
                    Saller Shop
                    <CheckCircle className="w-4 h-4 text-green-500" />
                </p>
            </div>

            {/* Label */}
            <div className="inline-block bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded mb-4">
                Rising Star
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-3 mb-4">
                <button className="flex items-center gap-1 text-sm bg-[#25D366] text-white px-4 py-2 rounded-full hover:bg-green-500 transition">
                    <MessageCircle className="w-4 h-4" />
                    Chat Now
                </button>

                <button className="flex items-center gap-1 text-sm bg-gray-200 text-gray-700 px-3 py-1.5 rounded hover:bg-gray-300 transition">
                    <ExternalLink className="w-4 h-4" />
                    View Shop
                </button>
            </div>

            {/* Shop Stats */}
            <div className="grid grid-cols-3 text-center text-sm text-gray-600">
                <div>
                    <p className="font-bold text-gray-800">100%</p>
                    <p className="text-xs">Ship on Time</p>
                </div>
                <div>
                    <p className="font-bold text-gray-800">90%</p>
                    <p className="text-xs">Chat Response</p>
                </div>
                <div>
                    <p className="font-bold text-gray-800">99.8%</p>
                    <p className="text-xs">Shop Rating</p>
                </div>
            </div>
        </div>
    );
};

export default SoldByCard;
