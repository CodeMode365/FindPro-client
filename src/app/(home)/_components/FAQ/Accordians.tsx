import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Accordians = () => {
  return (
    <Accordion type="single" collapsible defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger>How does FindPro work?</AccordionTrigger>
        <AccordionContent>
          FindPro is a platform that connects individuals and businesses with
          top professionals across various industries. Simply browse our
          extensive list of categories, select the professional you need, and
          initiate contact to discuss your project details.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>
          What types of professionals can I find on FindPro?
        </AccordionTrigger>
        <AccordionContent>
          Find professionals for every project on our platform. From
          photographers and web developers to graphic designers and legal
          professionals, we have a diverse range of expertise to meet your
          needs.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>
          How do I hire a professional on FindPro?
        </AccordionTrigger>
        <AccordionContent>
          Hiring on FindPro is simple! Review profiles, portfolios, and ratings
          of professionals. Contact them directly to discuss projects and terms.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>
          How do I find the right professional for my needs?
        </AccordionTrigger>
        <AccordionContent>
          Explore our advanced search filters to refine your search for
          professionals. Browse detailed profiles, portfolios, and client
          testimonials to find the perfect match based on expertise, location,
          ratings, and more.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Accordians;
