import SectionHeader from "@/components/common/section-header";
import Link from "next/link";
import { ArrowUpRightIcon, StarIcon } from "lucide-react";

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
            </div>
        </section>
    )
}