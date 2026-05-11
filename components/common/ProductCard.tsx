import Link from "next/link"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { ChevronDownIcon, ChevronUpIcon, StarIcon } from "lucide-react"


interface ProductProps {
    id: number,
    name: string,
    description: string,
    tags: string[],
    votes: number,
    isFeatured: boolean

}
export default function ProductCard({ product }: {
    product: ProductProps
}) {
    return (
        <Link href={`products/${product.id}`}>
            <Card className="group card-hover hover:bg-primary-foreground/10 border-solid border-gray-400 min-h-[180px]">
                <CardHeader className="flex-1">
                    <div className="flex items-start gap-4">
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                                <CardTitle
                                    className="text-lg group-hover:text-primary transition-colors"
                                >{product.name}</CardTitle>
                                {product.isFeatured && <Badge className="gap-1 bg-primary text-primary-foreground"><StarIcon /> Featured</Badge>}
                            </div>
                            <CardDescription>{product.description}</CardDescription>
                        </div>
                        <div className="flex flex-col items-center gap-1 shrink-0">
                            <Button variant="ghost" size={"icon-sm"} className="h-8 text-primary/20">
                                <ChevronUpIcon className="size-5" />
                            </Button>
                            <span className="text-sm font-semibold transition-colors text-foreground">10</span>
                            <Button variant="ghost" size={"icon-sm"} className="h-8 text-primary/20">
                                <ChevronDownIcon className="size-5" />
                            </Button>


                        </div>
                    </div>
                </CardHeader>
                <CardFooter>
                    <div className="flex item-center gap-2">
                        {product.tags.map((tag) => (
                            <Badge variant={"secondary"} key={tag}>
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </CardFooter>
            </Card>
        </Link>
    )
}