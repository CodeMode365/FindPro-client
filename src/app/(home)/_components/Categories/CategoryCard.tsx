import { Card } from "@/components/ui/card";
import { generatePathname } from "@/lib/helpers";
import Link from "next/link";

const CategoryCard = ({ pro }: { pro: string }) => {
  return (
    <Link href={`/explore?category=${generatePathname(pro)}`} >
      <Card className="h-14 px-4 border-primary/30 shadow-xl flex  hover:bg-primary hover:text-white transition-all ">
        <div className="h-full w-full flex items-center justify-center pt-auto">
          <h2 className="text-sm text-center font-semibold ">{pro}</h2>
        </div>
      </Card>
    </Link>
  );
};

export default CategoryCard;
