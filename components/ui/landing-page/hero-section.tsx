import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRightIcon, SparklesIcon } from 'lucide-react'
import Link from 'next/link'

const LiveBadge = () => {
    return (
        <Badge variant='outline' className='px-4 py-2 mb-8 text-sm'>
            <span className='relative flex h-2 w-2 mr-2'>
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-500 opacity-75'></span>
                <span className='relative inline-flex rounded-full h-2 w-2 bg-pink-500'></span>
            </span>
            <span className='text-muted-foreground'>Join thousands of creators sharing their work</span>
        </Badge>
    )
}

const HeroSection = () => {
    return (
        <section className='relative overflow-hidden bg-linear-to-b from-background via-background to-muted/20'>
            <div className='wrapper'>
                <div className='flex flex-col items-center justify-center lg:py-24 py-12 text-center'>
                    <LiveBadge />
                    <h1 className='text-5xl sm:text-6xl lg:text-7xl tracking-tight mb-6 max-w-4xl font-bold'>
                        Share What You've Built, Discover What's Launching
                    </h1>
                    <p className='text-muted-foreground text-lg sm:text-xl lg:text-2xl mb-10 max-w-2xl leading-relaxed'>
                        A community platform for creators to showcase their apps, AI tools, SaaS products, and creative projects. Authentic launches, real builders, genuine feedback.
                    </p>
                    <div className='flex items-center justify-center gap-4'>
                            <Link href='/submit'>
                            <Button variant='default'  size='lg'>
                                <SparklesIcon className='w-4 h-4' />
                                Share Your Project
                            </Button>
                        </Link>
                        <Link href='/projects'>
                            <Button variant='secondary' size='lg'>
                                Browse Projects <ArrowRightIcon className='w-4 h-4' />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;
