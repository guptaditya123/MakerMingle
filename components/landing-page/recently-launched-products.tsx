import { CalendarIcon, RocketIcon } from "lucide-react";
import SectionHeader from "../common/section-header";
import ProductCard from "../common/ProductCard";
import EmptyState from "../EmptyState";

const recentlyLaunchedProducts: any = []

export default function RecentlyLaunchedProducts() {

    return (
        <section className=" py-28">
            <div className="wrapper">
                <SectionHeader
                    title="Recently launched products"
                    icon={RocketIcon}
                    description="Discover the lastest products from our community"
                />
                {recentlyLaunchedProducts.length > 0 ? (
                    <div className="grid-wrapper">
                        {
                            recentlyLaunchedProducts.map((product: any) =>
                                <ProductCard key={product.id} product={product} />
                            )
                        }
                    </div>
                ) : (
                    <EmptyState message="No products launched in the last week.Check back soon for new launches." icon={CalendarIcon} />
                )
                }
            </div>
        </section>

    )
}