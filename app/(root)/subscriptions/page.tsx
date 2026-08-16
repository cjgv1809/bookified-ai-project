import { PricingTable } from "@clerk/nextjs";

export default function SubscriptionsPage() {
    return (
        <div className="container wrapper">
            <div className="flex flex-col items-center text-center mb-10">
                <h1 className="page-title-xl mb-4">Choose Your Plan</h1>
                <p className="subtitle max-w-2xl">
                    Upgrade to unlock more books, longer sessions, and advanced
                    features.
                </p>
            </div>

            <div className="clerk-pricing-container">
                <PricingTable />
            </div>
        </div>
    );
}
