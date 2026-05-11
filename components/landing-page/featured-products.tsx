import SectionHeader from "@/components/common/section-header";
import Link from "next/link";
import { ArrowUpRightIcon, StarIcon } from "lucide-react";
import ProductCard from "../common/ProductCard";


const featuredProducts =[
    {
        id:1,
        name:"Partykit",
        description:"A toolkit for creating parity products",
        tags:["SaaS","Pricing","Global"],
        votes:615,
        isFeatured:true
    },
    {
        id:2,
        name:"Developer to leader",
        description:"Learn to build production ready full course",
        tags:["SaaS","Pricing","Global"],
        votes:615,
        isFeatured:true
    },
    {
        id:3,
        name:"Partykit",
        description:"A toolkit for creating parity products",
        tags:["SaaS","Pricing","Global"],
        votes:615,
        isFeatured:true
    },
    {
        id:4,
        name:"Partykit",
        description:"A toolkit for creating parity products",
        tags:["SaaS","Pricing","Global"],
        votes:615,
        isFeatured:true
    }
]

export default function FeaturedProduct() {
    return (
        <section className="py-20 bg-muted/20">
            <div className="wrapper">
                <div className="flex items-center justify-between mb-8">
                    <SectionHeader
                        title="Featured Products"
                        icon={StarIcon}
                        description="Too picks our community this weak"
                    />
                    <Link
                        href="/explore"
                        className="hidden sm:flex items-center gap-2 border rounded-md px-4 py-2 text-sm"
                    >
                        View All
                        <ArrowUpRightIcon className="size-4" />
                    </Link>
                </div>
                <div className="grid-wrapper ">
                    {
                    featuredProducts.map((product)=>
                        <ProductCard key={product.id} product={product} />
                    )
                    }
                </div>
            </div>
        </section>
    )
}