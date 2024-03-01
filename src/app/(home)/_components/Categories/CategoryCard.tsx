import { Card } from "@/components/ui/card";

const CategoryCard = ({ pro }: { pro: string }) => {
  return (
    <Card className="h-14 px-4 border-primary/30 shadow-xl flex  hover:bg-primary hover:text-white transition-all ">
      <div className="h-full w-full flex items-center justify-center pt-auto">
        <h2 className="text-sm text-center font-semibold ">{pro}</h2>
      </div>
    </Card>
  );
};

export default CategoryCard;
