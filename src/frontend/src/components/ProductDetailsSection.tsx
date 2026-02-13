import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import type { Product } from '../backend';

interface ProductDetailsSectionProps {
  product: Product;
  imageSrc: string;
  sectionId: string;
}

export function ProductDetailsSection({ product, imageSrc, sectionId }: ProductDetailsSectionProps) {
  return (
    <section id={sectionId} className="scroll-mt-20 py-16 bg-background">
      <div className="container">
        <Card className="overflow-hidden border-border bg-card">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="aspect-square overflow-hidden bg-background/50 md:aspect-auto">
              <img 
                src={imageSrc} 
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
            
            <div className="flex flex-col p-6 md:p-8">
              <CardHeader className="p-0 pb-6">
                <CardTitle className="text-3xl font-bold">{product.name}</CardTitle>
                <CardDescription className="text-lg pt-2">{product.shortDescription}</CardDescription>
              </CardHeader>
              
              <CardContent className="flex-1 p-0 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Key Benefits</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.benefits.map((benefit, index) => (
                      <Badge key={index} variant="outline" className="text-sm py-1.5 px-3">
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <Separator />
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="how-to-use" className="border-none">
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                      How to Use
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pt-2">
                      {product.howToUse}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                
                <div className="pt-4">
                  <p className="text-sm text-muted-foreground italic">{product.cta}</p>
                </div>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
