import Link from "next/link";
import Image from "next/image";
import { formatToTimeAgo, formatToWon } from "@/lib/utils";

interface ListProductsProps {
  title: string;
  price: number;
  createdAt: Date;
  photo: string;
  id: number;
}

export default function ListProducts({
  title,
  price,
  createdAt,
  photo,
  id,
}: ListProductsProps) {
  return (
    <Link href={`/products/${id}`} className="flex gap-5">
      <div className="relative size-28 rounded-md overflow-hidden">
        <Image src={photo} alt={title} fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-1 *:text-white">
        <span className="text-lg">{title}</span>
        <span className="text-sm text-neutral-500">
          {formatToTimeAgo(createdAt.toString())}
        </span>
        <span className="text-lg font-semibold">{formatToWon(price)}원</span>
      </div>
    </Link>
  );
}
