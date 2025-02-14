import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../components/ui/accordion"

export function AccordionDemo() {
    return (
        <Accordion type="multiple" className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger>Categories</AccordionTrigger>
                <AccordionContent>
                    <AccordionItem value="item-1-1">
                        <AccordionTrigger>Mobiles</AccordionTrigger>
                        <AccordionContent className="bg-[#ebeeef] p-4">
                            <div className="mb-2">
                                Samsung
                            </div>
                            <div>
                                Apple
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-1-2">
                        <AccordionTrigger>Vehicles</AccordionTrigger>
                        <AccordionContent className="bg-[#ebeeef] p-4">
                            <div className="mb-2">
                                Bikes
                            </div>
                            <div>
                                Cars
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-1-3">
                        <AccordionTrigger>Property</AccordionTrigger>
                        <AccordionContent className="bg-[#ebeeef] p-4">
                            <div className="mb-2">
                                Rent
                            </div>
                            <div>
                                Buy
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Popular Categories</AccordionTrigger>
                <AccordionContent className="bg-[#ebeeef] p-4">
                    <div className="mb-2">
                        Cars
                    </div>
                    <div className="mb-2">
                        Flats for rent
                    </div>
                    <div className="mb-2">
                        Mobile Phones
                    </div>
                    <div>
                        Jobs
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>Trending Searches</AccordionTrigger>
                <AccordionContent className="bg-[#ebeeef] p-4">
                    <div className="mb-2">
                        Bikes
                    </div>
                    <div className="mb-2">
                        Watches
                    </div>
                    <div className="mb-2">
                        Books
                    </div>
                    <div>
                        Dogs
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
                <AccordionTrigger>About us</AccordionTrigger>
                <AccordionContent className="bg-[#ebeeef] p-4">
                    <div className="mb-2">
                        About Dubizzle Group
                    </div>
                    <div className="mb-2">
                        OLX Blog
                    </div>
                    <div className="mb-2">
                        Contact Us
                    </div>
                    <div>
                        OLX for Businesses
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
                <AccordionTrigger>OLX</AccordionTrigger>
                <AccordionContent className="bg-[#ebeeef] p-4">
                    <div className="mb-2">
                        Help
                    </div>
                    <div className="mb-2">
                        Sitemap
                    </div>
                    <div className="mb-2">
                        Terms of Use
                    </div>
                    <div>
                        Privacy Policy
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6" className="flex justify-between items-center">
                <div className="py-4 font-medium">Follow us</div>
                <div className="flex justify-end items-center">
                    <div className="me-2">
                        <img className="h-6 max-w-6 w-6" src="https://www.olx.com.pk/assets/iconTwitter_noinline.6037fa7d9a7b9d6408fb1b3d70524b97.svg" alt="" />
                    </div>
                    <div className="me-2">
                        <img className="h-6 max-w-6 w-6" src="https://www.olx.com.pk/assets/iconTwitter_noinline.6037fa7d9a7b9d6408fb1b3d70524b97.svg" alt="" />
                    </div>
                    <div className="me-2">
                        <img className="h-6 max-w-6 w-6" src="https://www.olx.com.pk/assets/iconTwitter_noinline.6037fa7d9a7b9d6408fb1b3d70524b97.svg" alt="" />
                    </div>
                    <div className="">
                        <img className="h-6 max-w-6 w-6" src="https://www.olx.com.pk/assets/iconTwitter_noinline.6037fa7d9a7b9d6408fb1b3d70524b97.svg" alt="" />
                    </div>
                </div>
            </AccordionItem>
        </Accordion>
    )
}