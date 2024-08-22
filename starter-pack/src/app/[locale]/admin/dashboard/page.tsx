import { Card, Spacer } from "@nextui-org/react";

export default function DashboardPage() {
    return (
        <div className="flex flex-col bg-gray-100 h-screen p-8">
            <h1 className="text-gray-800 mb-6">
                Dashboard
            </h1>
            <Spacer y={2} />
            <Card className="p-6 shadow-lg">
                <h2 className="text-gray-700 mb-4">
                    Welcome to your admin dashboard
                </h2>
                <p className="text-gray-600">
                    Here you can manage your website content, view analytics, and more.
                </p>
            </Card>
        </div>
    );
}