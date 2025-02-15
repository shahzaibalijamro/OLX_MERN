"use client"
import DropdownIcon from "../assets/DropdownIcon"
import LocationIcon from "../assets/LocationIcon";
import Card from "../components/Card"
import Carousel from "../components/Carousel";
import CategoryModal from "../components/CategoriesModal"
import { SimpleCarousel } from "../components/SimpleCorousel";
import { useEffect, useRef, useState } from "react";
import { ScrollArea, ScrollBar } from "../components/ui/scroll-area";
const page = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const openModal = () => {
    const modal = document.getElementById('my_modal_2') as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsActive(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const products = [
    {
      id: 1,
      price: "Rs 270,000",
      title: "Mobile Phone",
      address: "7th Avenue, Islamabad",
      time: "1 day ago",
      imageUrl: "https://images.olx.com.pk/thumbnails/505175755-240x180.webp",
    },
    {
      id: 2,
      price: "Rs 1,500,000",
      title: "Used Car",
      address: "Gulshan-e-Iqbal, Karachi",
      time: "2 hours ago",
      imageUrl: "https://images.olx.com.pk/thumbnails/505175756-240x180.webp",
    },
    {
      id: 3,
      price: "Rs 15,000",
      title: "Office Chair",
      address: "Johar Town, Lahore",
      time: "3 days ago",
      imageUrl: "https://images.olx.com.pk/thumbnails/505175757-240x180.webp",
    },
    {
      id: 4,
      price: "Rs 45,000",
      title: "Gaming Console",
      address: "F-11, Islamabad",
      time: "5 hours ago",
      imageUrl: "https://images.olx.com.pk/thumbnails/505175758-240x180.webp",
    },
    {
      id: 5,
      price: "Rs 8,000",
      title: "Wrist Watch",
      address: "Clifton, Karachi",
      time: "10 minutes ago",
      imageUrl: "https://images.olx.com.pk/thumbnails/505175759-240x180.webp",
    },
    {
      id: 6,
      price: "Rs 25,000",
      title: "Laptop Bag",
      address: "Model Town, Lahore",
      time: "2 days ago",
      imageUrl: "https://images.olx.com.pk/thumbnails/505175760-240x180.webp",
    },
    {
      id: 7,
      price: "Rs 900,000",
      title: "Motorbike",
      address: "Shahra-e-Faisal, Karachi",
      time: "4 hours ago",
      imageUrl: "https://images.olx.com.pk/thumbnails/505175761-240x180.webp",
    },
    {
      id: 8,
      price: "Rs 3,200",
      title: "Bluetooth Speaker",
      address: "Bahria Town, Islamabad",
      time: "6 hours ago",
      imageUrl: "https://images.olx.com.pk/thumbnails/505175762-240x180.webp",
    },
  ];
  return (
    <div className="">
      <div className="mt-[10px] carouselMain">
        <div className="myContainer">
          <SimpleCarousel />
        </div>
      </div>
      <div className="py-[16px]">

      </div>
      <div className="mt-[16px] myContainerScrollable">
        <div className="mb-4 categorySectionPC">
          <h1 className="roboto-bold text-[24px] text-[#002f34] overflow-hidden mb-4 text-ellipsis whitespace-nowrap">All Categories</h1>
          <div className="categoryContainer">
            <div className="flex-col justify-center h-[156px]">
              <div className="bg-transparent h-[88px] mx-auto w-[88px] rounded-full">
                <img src="https://www.olx.com.pk/assets/mobiles.8c768c96bfde33f18fcf5af2a8b9cf71.png" alt="" />
              </div>
              <h1 className="text-center mt-2 text-[16px] roboto-bold capitalize leading-5 whitespace-normal w-[102px]">Mobiles</h1>
            </div>
            <div className="flex-col justify-center h-[156px]">
              <div className="bg-transparent h-[88px] mx-auto w-[88px] rounded-full">
                <img src="https://www.olx.com.pk/assets/vehicles.29fb808d5118f0db56f68a39ce5392e2.png" alt="" />
              </div>
              <h1 className="text-center mt-2 text-[16px] roboto-bold capitalize leading-5 whitespace-normal w-[102px]">Vehicles</h1>
            </div>
            <div className="flex-col justify-center h-[156px]">
              <div className="bg-transparent h-[88px] mx-auto w-[88px] rounded-full">
                <img src="https://www.olx.com.pk/assets/property-for-sale.e3a00dbfdaa69fe5f713665f1069502f.png" alt="" />
              </div>
              <h1 className="text-center mt-2 text-[16px] roboto-bold capitalize leading-5 whitespace-normal w-[102px]">Property for sale</h1>
            </div>
            <div className="flex-col justify-center h-[156px]">
              <div className="bg-transparent h-[88px] mx-auto w-[88px] rounded-full">
                <img src="https://www.olx.com.pk/assets/property-for-rent.8436595fbaa90d47f0178006f57090a8.png" alt="" />
              </div>
              <h1 className="text-center mt-2 text-[16px] roboto-bold capitalize leading-5 whitespace-normal w-[102px]">property for rent</h1>
            </div>
            <div className="flex-col justify-center h-[156px]">
              <div className="bg-transparent h-[88px] mx-auto w-[88px] rounded-full">
                <img src="https://www.olx.com.pk/assets/electronics-home-appliances.46e034dd8adca44625c2c70e4d1b5984.png" alt="" />
              </div>
              <h1 className="text-center mt-2 text-[16px] roboto-bold capitalize leading-5 whitespace-normal w-[102px]">Electronics and home appliances</h1>
            </div>
            <div className="flex-col justify-center h-[156px]">
              <div className="bg-transparent h-[88px] mx-auto w-[88px] rounded-full">
                <img src="https://www.olx.com.pk/assets/bikes.4dcd02c49b2b83aa5b4d629d1e2b383e.png" alt="" />
              </div>
              <h1 className="text-center mt-2 text-[16px] roboto-bold capitalize leading-5 whitespace-normal w-[102px]">Bikes</h1>
            </div>
            <div className="flex-col justify-center h-[156px]">
              <div className="bg-transparent h-[88px] mx-auto w-[88px] rounded-full">
                <img src="https://www.olx.com.pk/assets/business-industrial-agriculture.704a6ffb9081bc94b11c102cc613670f.png" alt="" />
              </div>
              <h1 className="text-center mt-2 text-[16px] roboto-bold capitalize leading-5 whitespace-normal w-[102px]">buisness, industrial and agricultural</h1>
            </div>
            <div className="flex-col justify-center h-[156px]">
              <div className="bg-transparent h-[88px] mx-auto w-[88px] rounded-full">
                <img src="https://www.olx.com.pk/assets/services.dc6aef196c0403dc61b0ee813f66fa5b.png" alt="" />
              </div>
              <h1 className="text-center mt-2 text-[16px] roboto-bold capitalize leading-5 whitespace-normal w-[102px]">Services</h1>
            </div>
            <div className="flex-col justify-center h-[156px]">
              <div className="bg-transparent h-[88px] mx-auto w-[88px] rounded-full">
                <img src="https://www.olx.com.pk/assets/jobs.79e6136dda02111cf8e7afe26b9e0f93.png" alt="" />
              </div>
              <h1 className="text-center mt-2 text-[16px] roboto-bold capitalize leading-5 whitespace-normal w-[102px]">jobs</h1>
            </div>
            <div className="flex-col justify-center h-[156px]">
              <div className="bg-transparent h-[88px] mx-auto w-[88px] rounded-full">
                <img src="https://www.olx.com.pk/assets/animals.62d396e85f7523dbc8ff23889fdd5c31.png" alt="" />
              </div>
              <h1 className="text-center mt-2 text-[16px] roboto-bold capitalize leading-5 whitespace-normal w-[102px]">animals</h1>
            </div>
            <div className="flex-col justify-center h-[156px]">
              <div className="bg-transparent h-[88px] mx-auto w-[88px] rounded-full">
                <img src="https://www.olx.com.pk/assets/furniture-home-decor.66bcf157a53ea4c736a5b0af41219475.png" alt="" />
              </div>
              <h1 className="text-center mt-2 text-[16px] roboto-bold capitalize leading-5 whitespace-normal w-[102px]">furniture and home decor</h1>
            </div>
            <div className="flex-col justify-center h-[156px]">
              <div className="bg-transparent h-[88px] mx-auto w-[88px] rounded-full">
                <img src="https://www.olx.com.pk/assets/fashion-beauty.dd2cf7638c29b0e5c084a6673dd94dd7.png" alt="" />
              </div>
              <h1 className="text-center mt-2 text-[16px] roboto-bold capitalize leading-5 whitespace-normal w-[102px]">fashion and beauty</h1>
            </div>
            <div className="flex-col justify-center h-[156px]">
              <div className="bg-transparent h-[88px] mx-auto w-[88px] rounded-full">
                <img src="https://www.olx.com.pk/assets/books-sports-hobbies.6fee8d841b332d65a10f050f4a2ee1c8.png" alt="" />
              </div>
              <h1 className="text-center mt-2 text-[16px] roboto-bold capitalize leading-5 whitespace-normal w-[102px]">Books, sports and hobbies</h1>
            </div>
            <div className="flex-col justify-center h-[156px]">
              <div className="bg-transparent h-[88px] mx-auto w-[88px] rounded-full">
                <img src="https://www.olx.com.pk/assets/kids.cd8d8864804f1c35dd6a7df68268a48d.png" alt="" />
              </div>
              <h1 className="text-center mt-2 text-[16px] roboto-bold capitalize leading-5 whitespace-normal w-[102px]">kids</h1>
            </div>
          </div>
        </div>
        <div className="mb-4 categorySectionMobile">
          <h1 className="roboto-bold text-[24px] text-[#002f34] overflow-hidden mb-4 text-ellipsis whitespace-nowrap">All Categories</h1>
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="categoryContainerMobile">
              <div className="flex-col justify-center h-[156px]">
                <div className="bg-transparent h-[88px] mx-auto w-[88px] rounded-full">
                  <img src="https://www.olx.com.pk/assets/mobiles.8c768c96bfde33f18fcf5af2a8b9cf71.png" alt="" />
                </div>
                <h1 className="text-center mt-2 text-[16px] roboto-bold capitalize leading-5 whitespace-normal w-[102px]">Mobiles</h1>
              </div>
              <div className="flex-col justify-center h-[156px]">
                <div className="bg-transparent h-[88px] mx-auto w-[88px] rounded-full">
                  <img src="https://www.olx.com.pk/assets/vehicles.29fb808d5118f0db56f68a39ce5392e2.png" alt="" />
                </div>
                <h1 className="text-center mt-2 text-[16px] roboto-bold capitalize leading-5 whitespace-normal w-[102px]">Vehicles</h1>
              </div>
              <div className="flex-col justify-center h-[156px]">
                <div className="bg-transparent h-[88px] mx-auto w-[88px] rounded-full">
                  <img src="https://www.olx.com.pk/assets/property-for-sale.e3a00dbfdaa69fe5f713665f1069502f.png" alt="" />
                </div>
                <h1 className="text-center mt-2 text-[16px] roboto-bold capitalize leading-5 whitespace-normal w-[102px]">Property for sale</h1>
              </div>
              <div className="flex-col justify-center h-[156px]">
                <div className="bg-transparent h-[88px] mx-auto w-[88px] rounded-full">
                  <img src="https://www.olx.com.pk/assets/property-for-rent.8436595fbaa90d47f0178006f57090a8.png" alt="" />
                </div>
                <h1 className="text-center mt-2 text-[16px] roboto-bold capitalize leading-5 whitespace-normal w-[102px]">property for rent</h1>
              </div>
              <div className="flex-col justify-center h-[156px]">
                <div className="bg-transparent h-[88px] mx-auto w-[88px] rounded-full">
                  <img src="https://www.olx.com.pk/assets/electronics-home-appliances.46e034dd8adca44625c2c70e4d1b5984.png" alt="" />
                </div>
                <h1 className="text-center mt-2 text-[16px] roboto-bold capitalize leading-5 whitespace-normal w-[102px]">Electronics and home appliances</h1>
              </div>
              <div className="flex-col justify-center h-[156px]">
                <div className="bg-transparent h-[88px] mx-auto w-[88px] rounded-full">
                  <img src="https://www.olx.com.pk/assets/bikes.4dcd02c49b2b83aa5b4d629d1e2b383e.png" alt="" />
                </div>
                <h1 className="text-center mt-2 text-[16px] roboto-bold capitalize leading-5 whitespace-normal w-[102px]">Bikes</h1>
              </div>
              <div className="flex-col justify-center h-[156px]">
                <div className="bg-transparent h-[88px] mx-auto w-[88px] rounded-full">
                  <img src="https://www.olx.com.pk/assets/business-industrial-agriculture.704a6ffb9081bc94b11c102cc613670f.png" alt="" />
                </div>
                <h1 className="text-center mt-2 text-[16px] roboto-bold capitalize leading-5 whitespace-normal w-[102px]">buisness, industrial and agricultural</h1>
              </div>
              <div className="flex-col justify-center h-[156px]">
                <div className="bg-transparent h-[88px] mx-auto w-[88px] rounded-full">
                  <img src="https://www.olx.com.pk/assets/services.dc6aef196c0403dc61b0ee813f66fa5b.png" alt="" />
                </div>
                <h1 className="text-center mt-2 text-[16px] roboto-bold capitalize leading-5 whitespace-normal w-[102px]">Services</h1>
              </div>
              <div className="flex-col justify-center h-[156px]">
                <div className="bg-transparent h-[88px] mx-auto w-[88px] rounded-full">
                  <img src="https://www.olx.com.pk/assets/jobs.79e6136dda02111cf8e7afe26b9e0f93.png" alt="" />
                </div>
                <h1 className="text-center mt-2 text-[16px] roboto-bold capitalize leading-5 whitespace-normal w-[102px]">jobs</h1>
              </div>
              <div className="flex-col justify-center h-[156px]">
                <div className="bg-transparent h-[88px] mx-auto w-[88px] rounded-full">
                  <img src="https://www.olx.com.pk/assets/animals.62d396e85f7523dbc8ff23889fdd5c31.png" alt="" />
                </div>
                <h1 className="text-center mt-2 text-[16px] roboto-bold capitalize leading-5 whitespace-normal w-[102px]">animals</h1>
              </div>
              <div className="flex-col justify-center h-[156px]">
                <div className="bg-transparent h-[88px] mx-auto w-[88px] rounded-full">
                  <img src="https://www.olx.com.pk/assets/furniture-home-decor.66bcf157a53ea4c736a5b0af41219475.png" alt="" />
                </div>
                <h1 className="text-center mt-2 text-[16px] roboto-bold capitalize leading-5 whitespace-normal w-[102px]">furniture and home decor</h1>
              </div>
              <div className="flex-col justify-center h-[156px]">
                <div className="bg-transparent h-[88px] mx-auto w-[88px] rounded-full">
                  <img src="https://www.olx.com.pk/assets/fashion-beauty.dd2cf7638c29b0e5c084a6673dd94dd7.png" alt="" />
                </div>
                <h1 className="text-center mt-2 text-[16px] roboto-bold capitalize leading-5 whitespace-normal w-[102px]">fashion and beauty</h1>
              </div>
              <div className="flex-col justify-center h-[156px]">
                <div className="bg-transparent h-[88px] mx-auto w-[88px] rounded-full">
                  <img src="https://www.olx.com.pk/assets/books-sports-hobbies.6fee8d841b332d65a10f050f4a2ee1c8.png" alt="" />
                </div>
                <h1 className="text-center mt-2 text-[16px] roboto-bold capitalize leading-5 whitespace-normal w-[102px]">Books, sports and hobbies</h1>
              </div>
              <div className="flex-col justify-center h-[156px]">
                <div className="bg-transparent h-[88px] mx-auto w-[88px] rounded-full">
                  <img src="https://www.olx.com.pk/assets/kids.cd8d8864804f1c35dd6a7df68268a48d.png" alt="" />
                </div>
                <h1 className="text-center mt-2 text-[16px] roboto-bold capitalize leading-5 whitespace-normal w-[102px]">kids</h1>
              </div>
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </div>
      <div className="max-w-[1280px] ps-[15px] w-full mx-auto mt-[16px]">
        <div className="flex pe-[15px] justify-between mb-4 items-center">
          <h1 className="roboto-bold text-[24px] text-[#002f34] overflow-hidden text-ellipsis whitespace-nowrap">More in recent ads</h1>
          <div className="flex cursor-pointer justify-center items-center">
            <h1 className="uppercase text-[14px] roboto-bold text-[#3a77ff]">View more</h1>
            <div className="ms-[6px] -rotate-90">
              <DropdownIcon height={15} width={15} color="#3a77ff" />
            </div>
          </div>
        </div>
        <div>
          <div className="w-full">
            <Carousel products={products} />
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] px-[15px] w-full mx-auto mt-[16px]">
        <div className="bg-[#f2f4f5] h-[12px] my-[32px] w-full"></div>
      </div>
      <div className="max-w-[1280px] ps-[15px] w-full mx-auto mb-[48px]">
        <div className="mt-[16px] mb-[32px]">
          <div className="flex pe-[15px] justify-between mb-4 items-center">
            <h1 className="roboto-bold text-[24px] text-[#002f34] overflow-hidden text-ellipsis whitespace-nowrap">Mobile Phones</h1>
            <div className="flex cursor-pointer justify-center items-center">
              <h1 className="uppercase text-[14px] roboto-bold text-[#3a77ff]">View more</h1>
              <div className="ms-[6px] -rotate-90">
                <DropdownIcon height={15} width={15} color="#3a77ff" />
              </div>
            </div>
          </div>
          <div>
            <div className="w-full">
              <Carousel products={products} />
            </div>
          </div>
        </div>
        <div className="mt-[16px] mb-[32px]">
          <div className="flex pe-[15px] justify-between mb-4 items-center">
            <h1 className="roboto-bold text-[24px] text-[#002f34] overflow-hidden text-ellipsis whitespace-nowrap">Mobile Phones</h1>
            <div className="flex cursor-pointer justify-center items-center">
              <h1 className="uppercase text-[14px] roboto-bold text-[#3a77ff]">View more</h1>
              <div className="ms-[6px] -rotate-90">
                <DropdownIcon height={15} width={15} color="#3a77ff" />
              </div>
            </div>
          </div>
          <div>
            <div className="w-full">
              <Carousel products={products} />
            </div>
          </div>
        </div>
        <div className="mt-[16px] mb-[32px]">
          <div className="flex pe-[15px] justify-between mb-4 items-center">
            <h1 className="roboto-bold text-[24px] text-[#002f34] overflow-hidden text-ellipsis whitespace-nowrap">Mobile Phones</h1>
            <div className="flex cursor-pointer justify-center items-center">
              <h1 className="uppercase text-[14px] roboto-bold text-[#3a77ff]">View more</h1>
              <div className="ms-[6px] -rotate-90">
                <DropdownIcon height={15} width={15} color="#3a77ff" />
              </div>
            </div>
          </div>
          <div>
            <div className="w-full">
              <Carousel products={products} />
            </div>
          </div>
        </div>
        <div className="mt-[16px] mb-[32px]">
          <div className="flex pe-[15px] justify-between mb-4 items-center">
            <h1 className="roboto-bold text-[24px] text-[#002f34] overflow-hidden text-ellipsis whitespace-nowrap">Mobile Phones</h1>
            <div className="flex cursor-pointer justify-center items-center">
              <h1 className="uppercase text-[14px] roboto-bold text-[#3a77ff]">View more</h1>
              <div className="ms-[6px] -rotate-90">
                <DropdownIcon height={15} width={15} color="#3a77ff" />
              </div>
            </div>
          </div>
          <div>
            <div className="w-full">
              <Carousel products={products} />
            </div>
          </div>
        </div>
        <div className="mt-[16px] mb-[32px]">
          <div className="flex pe-[15px] justify-between mb-4 items-center">
            <h1 className="roboto-bold text-[24px] text-[#002f34] overflow-hidden text-ellipsis whitespace-nowrap">Mobile Phones</h1>
            <div className="flex cursor-pointer justify-center items-center">
              <h1 className="uppercase text-[14px] roboto-bold text-[#3a77ff]">View more</h1>
              <div className="ms-[6px] -rotate-90">
                <DropdownIcon height={15} width={15} color="#3a77ff" />
              </div>
            </div>
          </div>
          <div>
            <div className="w-full">
              <Carousel products={products} />
            </div>
          </div>
        </div>
        <div className="mt-[16px] mb-[32px]">
          <div className="flex pe-[15px] justify-between mb-4 items-center">
            <h1 className="roboto-bold text-[24px] text-[#002f34] overflow-hidden text-ellipsis whitespace-nowrap">Mobile Phones</h1>
            <div className="flex cursor-pointer justify-center items-center">
              <h1 className="uppercase text-[14px] roboto-bold text-[#3a77ff]">View more</h1>
              <div className="ms-[6px] -rotate-90">
                <DropdownIcon height={15} width={15} color="#3a77ff" />
              </div>
            </div>
          </div>
          <div>
            <div className="w-full">
              <Carousel products={products} />
            </div>
          </div>
        </div>
        <div className="mt-[16px] mb-[32px]">
          <div className="flex pe-[15px] justify-between mb-4 items-center">
            <h1 className="roboto-bold text-[24px] text-[#002f34] overflow-hidden text-ellipsis whitespace-nowrap">Mobile Phones</h1>
            <div className="flex cursor-pointer justify-center items-center">
              <h1 className="uppercase text-[14px] roboto-bold text-[#3a77ff]">View more</h1>
              <div className="ms-[6px] -rotate-90">
                <DropdownIcon height={15} width={15} color="#3a77ff" />
              </div>
            </div>
          </div>
          <div>
            <div className="w-full">
              <Carousel products={products} />
            </div>
          </div>
        </div>
        <div className="mt-[16px] mb-[32px]">
          <div className="flex pe-[15px] justify-between mb-4 items-center">
            <h1 className="roboto-bold text-[24px] text-[#002f34] overflow-hidden text-ellipsis whitespace-nowrap">Mobile Phones</h1>
            <div className="flex cursor-pointer justify-center items-center">
              <h1 className="uppercase text-[14px] roboto-bold text-[#3a77ff]">View more</h1>
              <div className="ms-[6px] -rotate-90">
                <DropdownIcon height={15} width={15} color="#3a77ff" />
              </div>
            </div>
          </div>
          <div>
            <div className="w-full">
              <Carousel products={products} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page