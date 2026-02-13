import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Product } from '../backend';

interface ProductCardProps {
  product: Product;
  imageSrc: string;
  onLearnMore: () => void;
}

export function ProductCard({ product, imageSrc, onLearnMore }: ProductCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-xl border-border bg-card">
      <div className="aspect-square overflow-hidden bg-background/50">
        <img 
          src={imageSrc} 
          alt={product.name}
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{product.name}</CardTitle>
        <CardDescription className="text-base">{product.shortDescription}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {product.benefits.slice(0, 3).map((benefit, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {benefit}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={onLearnMore} className="w-full">
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
}
